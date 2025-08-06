const { PrismaClient } = require('@prisma/client');
const { validationResult, body, param } = require('express-validator');
const path = require('path');
const fs = require('fs').promises;
const crypto = require('crypto');
const TipoDocumento = require('../enums/tipodocumento.enum');
const CursoStatus = require('../enums/cursoStatus.enum');
const { CURSOS_CONSTANCIAS_DIR } = require('../config/multerCursos');

// Prisma instance
const prisma = new PrismaClient();

// --- UTILS ---
function sanitizeBigInt(obj) {
  if (Array.isArray(obj)) return obj.map(sanitizeBigInt);
  else if (obj && typeof obj === 'object') {
    const result = {};
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'bigint') result[key] = value.toString();
      else result[key] = sanitizeBigInt(value);
    }
    return result;
  }
  return obj;
}
async function safeUnlink(filePath) {
  try { await fs.unlink(filePath); } catch { }
}

// --- VALIDADORES ---
const validarCurso = [
  body('codigo_curso')
    .notEmpty().withMessage('El código del curso es obligatorio.')
    .isString().withMessage('Debe ser texto.'),
  body('nombre_curso')
    .notEmpty().withMessage('El nombre del curso es obligatorio.')
    .isString(),
  body('horas_duracion')
    .notEmpty().withMessage('Las horas de duración son obligatorias.')
    .isInt({ min: 1 }).withMessage('Debe ser número entero positivo.'),
  body('estatus')
    .optional()
    .isIn(Object.values(CursoStatus)).withMessage('Estatus de curso inválido.'),
  body('tipo_documento_curso')
    .optional()
    .isIn(Object.values(TipoDocumento)).withMessage('Tipo de documento de curso inválido.')
];

// --- CONTROLADORES ---

/**
 * @desc Crear curso + constancia general (ADMIN)
 */
const crearCurso = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.file) await safeUnlink(req.file.path);
    return res.status(400).json({ success: false, message: 'Datos inválidos', errors: errors.array() });
  }
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'El archivo de constancia es obligatorio.' });
  }

  const { codigo_curso, nombre_curso, horas_duracion, estatus, tipo_documento_curso } = req.body;
  const { originalname, filename, path: filePath, size, mimetype } = req.file;

  // Verificar duplicados antes de procesar el archivo
  try {
    const codigoExistente = await prisma.cursos.findUnique({ where: { codigo_curso } });
    if (codigoExistente) {
      await safeUnlink(filePath);
      return res.status(409).json({ success: false, message: 'El código del curso ya existe.' });
    }
    const nombreExistente = await prisma.cursos.findFirst({ where: { nombre_curso } });
    if (nombreExistente) {
      await safeUnlink(filePath);
      return res.status(409).json({ success: false, message: 'El nombre del curso ya existe.' });
    }
  } catch (err) {
    if (req.file) await safeUnlink(filePath);
    return res.status(500).json({ success: false, message: 'Error al verificar duplicados.', error: err.message });
  }
  
  // Calcular hash del archivo
  let hash_archivo;
  try {
    const buffer = await fs.readFile(filePath);
    hash_archivo = crypto.createHash('sha256').update(buffer).digest('hex');
  } catch (e) {
    await safeUnlink(filePath);
    return res.status(500).json({ success: false, message: 'No se pudo calcular hash del archivo.' });
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. Registrar documento constancia (sin id_trabajador)
      const documentoConstancia = await tx.documentos.create({
        data: {
          id_trabajador: null,
          tipo_documento: tipo_documento_curso || TipoDocumento.CONSTANCIA_NOMBRAMIENTO,
          nombre_archivo: originalname,
          descripcion: `Constancia general del curso "${nombre_curso}"`,
          hash_archivo,
          ruta_almacenamiento: path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/'),
          tamano_bytes: BigInt(size),
          mimetype,
          es_publico: false
        }
      });

      // 2. Crear curso
      const nuevoCurso = await tx.cursos.create({
        data: {
          codigo_curso,
          nombre_curso,
          horas_duracion: parseInt(horas_duracion),
          estatus: estatus || CursoStatus.EN_CURSO,
          documento_constancia_id: documentoConstancia.id_documento,
          tipo_documento_curso: tipo_documento_curso || TipoDocumento.CONSTANCIA_NOMBRAMIENTO
        },
        include: {
          documentoConstancia: true
        }
      });

      return nuevoCurso;
    });

    res.status(201).json({
      success: true,
      message: 'Curso creado exitosamente.',
      data: sanitizeBigInt(result)
    });

  } catch (error) {
    if (req.file) await safeUnlink(filePath);
    res.status(500).json({ success: false, message: 'Error al crear curso.', error: error.message });
  }
};

/**
 * @desc Listar todos los cursos (ADMIN/USUARIO)
 */
const getAllCursos = async (req, res) => {
  try {
    const cursos = await prisma.cursos.findMany({
      include: { documentoConstancia: true }
    });
    res.status(200).json({
      success: true,
      message: 'Cursos listados correctamente.',
      data: sanitizeBigInt(cursos)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener cursos.', error: error.message });
  }
};

/**
 * @desc Obtener detalle de curso (ADMIN/USUARIO)
 */
const getCursoById = async (req, res) => {
  const { id } = req.params;
  try {
    const curso = await prisma.cursos.findUnique({
      where: { id_curso: parseInt(id) },
      include: { documentoConstancia: true }
    });
    if (!curso) {
      return res.status(404).json({ success: false, message: 'Curso no encontrado.' });
    }
    res.status(200).json({
      success: true,
      message: 'Curso obtenido correctamente.',
      data: sanitizeBigInt(curso)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener curso.', error: error.message });
  }
};

/**
 * @desc Actualizar datos o reemplazar constancia (ADMIN)
 */
const actualizarCurso = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.file) await safeUnlink(req.file.path);
    return res.status(400).json({ success: false, message: 'Datos inválidos', errors: errors.array() });
  }

  try {
    const curso = await prisma.cursos.findUnique({
      where: { id_curso: parseInt(id) },
      include: { documentoConstancia: true }
    });
    if (!curso) {
      if (req.file) await safeUnlink(req.file.path);
      return res.status(404).json({ success: false, message: 'Curso no encontrado.' });
    }

    let documentoConstanciaId = curso.documento_constancia_id;

    // Si hay archivo nuevo, crea documento, borra el anterior físico y registro
    if (req.file) {
      // Hash nuevo
      let hash_archivo;
      try {
        const buffer = await fs.readFile(req.file.path);
        hash_archivo = crypto.createHash('sha256').update(buffer).digest('hex');
      } catch {
        await safeUnlink(req.file.path);
        return res.status(500).json({ success: false, message: 'No se pudo calcular hash del archivo nuevo.' });
      }

      // Crea nuevo documento
      const nuevoDocumento = await prisma.documentos.create({
        data: {
          id_trabajador: null,
          tipo_documento: req.body.tipo_documento_curso || TipoDocumento.CONSTANCIA_NOMBRAMIENTO,
          nombre_archivo: req.file.originalname,
          descripcion: `Constancia general del curso "${req.body.nombre_curso || curso.nombre_curso}"`,
          hash_archivo,
          ruta_almacenamiento: path.relative(path.join(__dirname, '..'), req.file.path).replace(/\\/g, '/'),
          tamano_bytes: BigInt(req.file.size),
          mimetype: req.file.mimetype,
          es_publico: false
        }
      });

      // Borrar documento anterior físico y de BD si existía
      if (curso.documentoConstancia && curso.documentoConstancia.ruta_almacenamiento) {
        await safeUnlink(path.join(__dirname, '..', curso.documentoConstancia.ruta_almacenamiento));
        await prisma.documentos.delete({ where: { id_documento: curso.documentoConstancia.id_documento } });
      }
      documentoConstanciaId = nuevoDocumento.id_documento;
    }

    // Actualizar curso (parcial)
    const actualizacion = await prisma.cursos.update({
      where: { id_curso: parseInt(id) },
      data: {
        codigo_curso: req.body.codigo_curso || undefined,
        nombre_curso: req.body.nombre_curso || undefined,
        horas_duracion: req.body.horas_duracion ? parseInt(req.body.horas_duracion) : undefined,
        estatus: req.body.estatus || undefined,
        documento_constancia_id: documentoConstanciaId,
        tipo_documento_curso: req.body.tipo_documento_curso || undefined
      },
      include: { documentoConstancia: true }
    });

    res.status(200).json({
      success: true,
      message: 'Curso actualizado correctamente.',
      data: sanitizeBigInt(actualizacion)
    });

  } catch (error) {
    if (req.file) await safeUnlink(req.file.path);
    res.status(500).json({ success: false, message: 'Error al actualizar curso.', error: error.message });
  }
};

/**
 * @desc Eliminar curso y constancia física (ADMIN)
 */
const eliminarCurso = async (req, res) => {
  const { id } = req.params;
  try {
    const curso = await prisma.cursos.findUnique({
      where: { id_curso: parseInt(id) },
      include: { documentoConstancia: true }
    });
    if (!curso) {
      return res.status(404).json({ success: false, message: 'Curso no encontrado.' });
    }

    await prisma.$transaction(async (tx) => {
      // Borrar curso (onDelete: Cascade elimina inscripciones)
      await tx.cursos.delete({ where: { id_curso: parseInt(id) } });
      // Borrar archivo físico y documento de constancia
      if (curso.documentoConstancia && curso.documentoConstancia.ruta_almacenamiento) {
        await safeUnlink(path.join(__dirname, '..', curso.documentoConstancia.ruta_almacenamiento));
        await tx.documentos.delete({ where: { id_documento: curso.documentoConstancia.id_documento } });
      }
    });

    res.status(200).json({
      success: true,
      message: 'Curso y constancia eliminados correctamente.'
    });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al eliminar curso.', error: error.message });
  }
};

/**
 * @desc Eliminar curso solicitando contraseña del administrador
 */
const eliminarCursoConPassword = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ success: false, message: 'Contraseña requerida.' });
  }
  try {
    const admin = await prisma.trabajadores.findUnique({ where: { id_trabajador: req.user.id } });
    if (!admin) {
      return res.status(404).json({ success: false, message: 'Administrador no encontrado.' });
    }
    const bcrypt = require('bcrypt');
    const valid = await bcrypt.compare(password, admin.password_hash);
    if (!valid) {
      // Usar 403 para no gatillar los interceptores de token inválido en el front
      return res.status(403).json({ success: false, message: 'Contraseña incorrecta.' });
    }
    // Reutilizar la lógica de eliminación existente
    return eliminarCurso(req, res);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al eliminar curso.', error: error.message });
  }
};
//           DESCARGAS\\\


/**
 * @desc Descargar constancia general del curso (ADMIN/USUARIO)
 */
const descargarConstanciaCurso = async (req, res) => {
  const { id } = req.params;
  try {
    const curso = await prisma.cursos.findUnique({
      where: { id_curso: parseInt(id) },
      include: { documentoConstancia: true }
    });
    if (!curso || !curso.documentoConstancia || !curso.documentoConstancia.ruta_almacenamiento) {
      return res.status(404).json({ success: false, message: 'Constancia de curso no encontrada.' });
    }
    const doc = curso.documentoConstancia;
    const absPath = path.join(__dirname, '..', doc.ruta_almacenamiento);

    // Verifica si el archivo existe
    try {
      await fs.access(absPath);
    } catch {
      return res.status(404).json({ success: false, message: 'Archivo físico de constancia no encontrado.' });
    }

    res.setHeader('Content-Type', doc.mimetype || 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${doc.nombre_archivo}"`);
    res.setHeader('Content-Length', doc.tamano_bytes.toString());

    return res.download(absPath, (err) => {
      if (err && !res.headersSent) {
        res.status(500).json({ success: false, message: 'Error al descargar la constancia.' });
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al descargar constancia.', error: error.message });
  }
};




// --- EXPORTAR ---
module.exports = {
  validarCurso,
  crearCurso,
  getAllCursos,
  getCursoById,
  actualizarCurso,
  eliminarCurso,
  eliminarCursoConPassword,
  descargarConstanciaCurso

};