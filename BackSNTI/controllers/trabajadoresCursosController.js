const { PrismaClient } = require('@prisma/client');
const { validationResult, body, param } = require('express-validator');
const path = require('path');
const fs = require('fs').promises;
const crypto = require('crypto');
const Roles = require('../enums/roles.enum');
const TipoDocumento = require('../enums/tipodocumento.enum');
const { BASE_UPLOAD_DIR } = require('../config/multerCursosTrabajadores');

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

// --- VALIDADORES EXPRESS ---
const validarInscripcion = [
  body('id_curso')
    .notEmpty().withMessage('El id_curso es obligatorio.')
    .isInt().withMessage('Debe ser número entero.'),
  body('tipo_documento')
    .notEmpty().withMessage('El tipo_documento es obligatorio.')
    .isIn([TipoDocumento.INVITACION_CURSO]).withMessage('Solo puedes subir la invitación al inscribirte.')
];

// Validación adicional para inscripciones creadas por un administrador
const validarInscripcionAdmin = [
  body('id_trabajador')
    .notEmpty().withMessage('El id_trabajador es obligatorio.')
    .isInt().withMessage('Debe ser número entero.'),
  ...validarInscripcion
];

const validarSubidaDocumento = [
  param('id').isInt().withMessage('ID de inscripción debe ser entero.'),
  body('tipo_documento')
    .notEmpty().withMessage('El tipo_documento es obligatorio.')
    .isIn([TipoDocumento.CONCLUSION_CURSO, TipoDocumento.CERTIFICADO_CURSO])
    .withMessage('Solo puedes subir conclusión o certificado en este endpoint.')
];

const validarAdminUpdate = [
  param('id').isInt().withMessage('ID debe ser entero.'),
  body('calificacion').optional().isDecimal({ min: 0, max: 100 }).withMessage('Calificación inválida'),
  body('completado').optional().isBoolean().withMessage('Completado debe ser booleano'),
  body('fecha_completado').optional().isISO8601().withMessage('Fecha inválida')
];

// --- CONTROLADORES ---

/**
 * @desc Inscribir usuario y subir invitación (POST)
 */
const crearInscripcion = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.file) await safeUnlink(req.file.path);
    return res.status(400).json({ success: false, message: 'Datos inválidos', errors: errors.array() });
  }
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'El archivo de invitación es obligatorio.' });
  }

  const id_trabajador = req.user.id;
  const { id_curso, tipo_documento } = req.body;
  const { originalname, path: filePath, size, mimetype } = req.file;

  // Validar inscripción existente
  const existe = await prisma.trabajadores_cursos.findUnique({
    where: {
      trabajadores_cursos_unique: {
        id_trabajador,
        id_curso: parseInt(id_curso)
      }
    }
  });
  if (existe) {
    await safeUnlink(filePath);
    return res.status(409).json({ success: false, message: 'Ya estás inscrito en este curso.' });
  }

  // Validar que el curso exista
  const curso = await prisma.cursos.findUnique({ where: { id_curso: parseInt(id_curso) } });
  if (!curso) {
    await safeUnlink(filePath);
    return res.status(404).json({ success: false, message: 'Curso no encontrado.' });
  }

  // Hash
  let hash_archivo;
  try {
    const buffer = await fs.readFile(filePath);
    hash_archivo = crypto.createHash('sha256').update(buffer).digest('hex');
  } catch {
    await safeUnlink(filePath);
    return res.status(500).json({ success: false, message: 'No se pudo calcular hash del archivo.' });
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const doc = await tx.documentos.create({
        data: {
          id_trabajador,
          tipo_documento,
          nombre_archivo: originalname,
          descripcion: `Invitación al curso ${curso.nombre_curso}`,
          hash_archivo,
          ruta_almacenamiento: path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/'),
          tamano_bytes: BigInt(size),
          mimetype,
          es_publico: false
        }
      });
      const inscripcion = await tx.trabajadores_cursos.create({
        data: {
          id_trabajador,
          id_curso: parseInt(id_curso),
          documento_invitacion_id: doc.id_documento
        },
        include: {
          documentoInvitacion: true,
          cursos: true
        }
      });
      return { inscripcion, doc };
    });
    res.status(201).json({
      success: true,
      message: 'Inscripción y documento registrados correctamente.',
      data: sanitizeBigInt(result)
    });
  } catch (error) {
    if (req.file) await safeUnlink(filePath);
    res.status(500).json({ success: false, message: 'Error al crear inscripción.', error: error.message });
  }
};

/**
 * @desc Inscribir trabajador (ADMIN) y subir invitación
 */
const crearInscripcionAdmin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.file) await safeUnlink(req.file.path);
    return res.status(400).json({ success: false, message: 'Datos inválidos', errors: errors.array() });
  }
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'El archivo de invitación es obligatorio.' });
  }

  const { id_trabajador, id_curso, tipo_documento } = req.body;
  const { originalname, path: filePath, size, mimetype } = req.file;

  // Validar inscripción existente
  const existe = await prisma.trabajadores_cursos.findUnique({
    where: {
      trabajadores_cursos_unique: {
        id_trabajador: parseInt(id_trabajador),
        id_curso: parseInt(id_curso)
      }
    }
  });
  if (existe) {
    await safeUnlink(filePath);
    return res.status(409).json({ success: false, message: 'El trabajador ya está inscrito en este curso.' });
  }

  // Validar que el curso exista
  const curso = await prisma.cursos.findUnique({ where: { id_curso: parseInt(id_curso) } });
  if (!curso) {
    await safeUnlink(filePath);
    return res.status(404).json({ success: false, message: 'Curso no encontrado.' });
  }

  // Validar que el trabajador exista
  const trabajador = await prisma.trabajadores.findUnique({ where: { id_trabajador: parseInt(id_trabajador) } });
  if (!trabajador) {
    await safeUnlink(filePath);
    return res.status(404).json({ success: false, message: 'Trabajador no encontrado.' });
  }

  // Hash del archivo
  let hash_archivo;
  try {
    const buffer = await fs.readFile(filePath);
    hash_archivo = crypto.createHash('sha256').update(buffer).digest('hex');
  } catch {
    await safeUnlink(filePath);
    return res.status(500).json({ success: false, message: 'No se pudo calcular hash del archivo.' });
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const doc = await tx.documentos.create({
        data: {
          id_trabajador: parseInt(id_trabajador),
          tipo_documento,
          nombre_archivo: originalname,
          descripcion: `Invitación al curso ${curso.nombre_curso}`,
          hash_archivo,
          ruta_almacenamiento: path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/'),
          tamano_bytes: BigInt(size),
          mimetype,
          es_publico: false
        }
      });
      const inscripcion = await tx.trabajadores_cursos.create({
        data: {
          id_trabajador: parseInt(id_trabajador),
          id_curso: parseInt(id_curso),
          documento_invitacion_id: doc.id_documento
        },
        include: {
          documentoInvitacion: true,
          cursos: true,
          trabajadores: { select: { nombre: true, apellido_paterno: true, apellido_materno: true, identificador: true } }
        }
      });
      return { inscripcion, doc };
    });

    res.status(201).json({
      success: true,
      message: 'Inscripción creada correctamente.',
      data: sanitizeBigInt(result)
    });
  } catch (error) {
    if (req.file) await safeUnlink(filePath);
    res.status(500).json({ success: false, message: 'Error al crear inscripción.', error: error.message });
  }
};


/**
 * @desc Subir conclusión o certificado (PATCH). Solo una vez, no sobrescribe.
 */
const subirDocumentoInscripcion = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.file) await safeUnlink(req.file.path);
    return res.status(400).json({ success: false, message: 'Datos inválidos', errors: errors.array() });
  }
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'El archivo es obligatorio.' });
  }

  const id_trabajador = req.user.id;
  const { id } = req.params;
  const { tipo_documento } = req.body;
  const { originalname, path: filePath, size, mimetype } = req.file;

  // Buscar inscripción y validar propiedad
  const inscripcion = await prisma.trabajadores_cursos.findUnique({
    where: { id_trabajador_curso: parseInt(id) },
    include: {
      documentoCertificado: true,
      documentoConclusion: true
    }
  });
  if (!inscripcion || inscripcion.id_trabajador !== id_trabajador) {
    await safeUnlink(filePath);
    return res.status(404).json({ success: false, message: 'Inscripción no encontrada o no es tuya.' });
  }

  // Validar que NO exista ya ese documento
  if (tipo_documento === TipoDocumento.CONCLUSION_CURSO && inscripcion.documentoConclusion) {
    await safeUnlink(filePath);
    return res.status(409).json({ success: false, message: 'Ya has subido el documento de conclusión para este curso.' });
  }
  if (tipo_documento === TipoDocumento.CERTIFICADO_CURSO && inscripcion.documentoCertificado) {
    await safeUnlink(filePath);
    return res.status(409).json({ success: false, message: 'Ya has subido el certificado para este curso.' });
  }

  // Hash
  let hash_archivo;
  try {
    const buffer = await fs.readFile(filePath);
    hash_archivo = crypto.createHash('sha256').update(buffer).digest('hex');
  } catch {
    await safeUnlink(filePath);
    return res.status(500).json({ success: false, message: 'No se pudo calcular hash del archivo.' });
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      // Nuevo documento
      const nuevoDoc = await tx.documentos.create({
        data: {
          id_trabajador,
          tipo_documento,
          nombre_archivo: originalname,
          descripcion: `${tipo_documento === TipoDocumento.CONCLUSION_CURSO ? 'Conclusión' : 'Certificado'} del curso`,
          hash_archivo,
          ruta_almacenamiento: path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/'),
          tamano_bytes: BigInt(size),
          mimetype,
          es_publico: false
        }
      });

      // Actualiza inscripción
      const updateField = tipo_documento === TipoDocumento.CONCLUSION_CURSO
        ? { documento_conclusion_id: nuevoDoc.id_documento }
        : { documento_certificado_id: nuevoDoc.id_documento };
      const inscripcionActualizada = await tx.trabajadores_cursos.update({
        where: { id_trabajador_curso: parseInt(id) },
        data: updateField,
        include: {
          documentoCertificado: true,
          documentoConclusion: true
        }
      });

      return { inscripcionActualizada, nuevoDoc };
    });

    res.status(200).json({
      success: true,
      message: 'Documento subido y vinculado correctamente.',
      data: sanitizeBigInt(result)
    });

  } catch (error) {
    if (req.file) await safeUnlink(filePath);
    res.status(500).json({ success: false, message: 'Error al subir documento.', error: error.message });
  }
};

/**
 * @desc Listar todas las inscripciones (ADMIN)
 */
const listarInscripciones = async (req, res) => {
  try {
    const data = await prisma.trabajadores_cursos.findMany({
      include: {
        trabajadores: { select: { nombre: true, apellido_paterno: true, apellido_materno: true, identificador: true } },
        cursos: true,
        documentoInvitacion: true,
        documentoConclusion: true,
        documentoCertificado: true
      },
      orderBy: { fecha_inscripcion: 'desc' }
    });
    res.status(200).json({
      success: true,
      message: 'Inscripciones obtenidas correctamente.',
      data: sanitizeBigInt(data)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al listar inscripciones.', error: error.message });
  }
};

/**
 * @desc Listar inscripciones propias (USUARIO)
 */
const misInscripciones = async (req, res) => {
  const id_trabajador = req.user.id;
  try {
    const data = await prisma.trabajadores_cursos.findMany({
      where: { id_trabajador },
      include: {
        trabajadores: { select: { nombre: true, apellido_paterno: true, apellido_materno: true, identificador: true } },
        cursos: true,
        documentoInvitacion: true,
        documentoConclusion: true,
        documentoCertificado: true
      },
      orderBy: { fecha_inscripcion: 'desc' }
    });
    res.status(200).json({
      success: true,
      message: 'Tus inscripciones obtenidas correctamente.',
      data: sanitizeBigInt(data)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al listar tus inscripciones.', error: error.message });
  }
};

/**
 * @desc Descargar documento (ADMIN, USUARIO-propio)
 */
const descargarDocumento = async (req, res) => {
  const { id, tipo_documento } = req.params;
  const id_trabajador = req.user.id;
  const userRole = req.user.role;

  // Validar tipo_documento
  if (![TipoDocumento.INVITACION_CURSO, TipoDocumento.CONCLUSION_CURSO, TipoDocumento.CERTIFICADO_CURSO].includes(tipo_documento)) {
    return res.status(400).json({ success: false, message: 'Tipo de documento inválido.' });
  }

  // Buscar inscripción y documento
  const inscripcion = await prisma.trabajadores_cursos.findUnique({
    where: { id_trabajador_curso: parseInt(id) },
    include: {
      documentoInvitacion: true,
      documentoConclusion: true,
      documentoCertificado: true
    }
  });
  if (!inscripcion) {
    return res.status(404).json({ success: false, message: 'Inscripción no encontrada.' });
  }

  // Solo admin o dueño
  if (userRole !== Roles.ADMINISTRADOR && inscripcion.id_trabajador !== id_trabajador) {
    return res.status(403).json({ success: false, message: 'No tienes permiso para descargar este archivo.' });
  }

  let doc;
  if (tipo_documento === TipoDocumento.INVITACION_CURSO) doc = inscripcion.documentoInvitacion;
  if (tipo_documento === TipoDocumento.CONCLUSION_CURSO) doc = inscripcion.documentoConclusion;
  if (tipo_documento === TipoDocumento.CERTIFICADO_CURSO) doc = inscripcion.documentoCertificado;

  if (!doc || !doc.ruta_almacenamiento) {
    return res.status(404).json({ success: false, message: 'Documento no encontrado.' });
  }

  const absPath = path.join(__dirname, '..', doc.ruta_almacenamiento);

  try {
    await fs.access(absPath);
  } catch {
    return res.status(404).json({ success: false, message: 'Archivo físico no encontrado.' });
  }

  res.setHeader('Content-Type', doc.mimetype || 'application/octet-stream');
  res.setHeader('Content-Disposition', `attachment; filename="${doc.nombre_archivo}"`);
  res.setHeader('Content-Length', doc.tamano_bytes.toString());

  return res.download(absPath, (err) => {
    if (err && !res.headersSent) {
      res.status(500).json({ success: false, message: 'Error al descargar el archivo.' });
    }
  });
};

/**
 * @desc Eliminar inscripción y documentos (ADMIN)
 * (Se mantiene igual: sigue borrando archivos y documentos si es necesario)
 */
const eliminarInscripcion = async (req, res) => {
  const { id } = req.params;
  try {
    const inscripcion = await prisma.trabajadores_cursos.findUnique({
      where: { id_trabajador_curso: parseInt(id) },
      include: {
        documentoInvitacion: true,
        documentoConclusion: true,
        documentoCertificado: true
      }
    });
    if (!inscripcion) {
      return res.status(404).json({ success: false, message: 'Inscripción no encontrada.' });
    }

    await prisma.$transaction(async (tx) => {
      await tx.trabajadores_cursos.delete({ where: { id_trabajador_curso: parseInt(id) } });
      for (const field of ['documentoInvitacion', 'documentoConclusion', 'documentoCertificado']) {
        const doc = inscripcion[field];
        if (doc && doc.ruta_almacenamiento) {
          await safeUnlink(path.join(__dirname, '..', doc.ruta_almacenamiento));
          await tx.documentos.delete({ where: { id_documento: doc.id_documento } });
        }
      }
    });

    res.status(200).json({
      success: true,
      message: 'Inscripción y documentos eliminados correctamente.'
    });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al eliminar inscripción.', error: error.message });
  }
};

/**
 * @desc Actualización administrativa: calificación, completado, fecha_completado
 */
const actualizarInscripcionAdmin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: 'Datos inválidos', errors: errors.array() });
  }
  const { id } = req.params;
  const { calificacion, completado, fecha_completado } = req.body;
  try {
    const inscripcion = await prisma.trabajadores_cursos.findUnique({
      where: { id_trabajador_curso: parseInt(id) }
    });
    if (!inscripcion) {
      return res.status(404).json({ success: false, message: 'Inscripción no encontrada.' });
    }

    const dataUpdate = {};
    if (typeof calificacion !== 'undefined') dataUpdate.calificacion = calificacion;
    if (typeof completado !== 'undefined') dataUpdate.completado = completado === 'true' || completado === true;
    if (fecha_completado) dataUpdate.fecha_completado = new Date(fecha_completado);

    const actualizado = await prisma.trabajadores_cursos.update({
      where: { id_trabajador_curso: parseInt(id) },
      data: dataUpdate
    });
    res.status(200).json({
      success: true,
      message: 'Inscripción actualizada correctamente.',
      data: sanitizeBigInt(actualizado)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al actualizar inscripción.', error: error.message });
  }
};

// --- EXPORTAR ---
module.exports = {
  validarInscripcion,
  validarInscripcionAdmin,
  validarSubidaDocumento,
  validarAdminUpdate,
  crearInscripcion,
  crearInscripcionAdmin,
  subirDocumentoInscripcion,
  listarInscripciones,
  misInscripciones,
  descargarDocumento,
  eliminarInscripcion,
  actualizarInscripcionAdmin
};