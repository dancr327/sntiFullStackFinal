const { PrismaClient } = require('@prisma/client');
const { validationResult, body, param, query } = require('express-validator');
const path = require('path');
const fs = require('fs').promises;
const crypto = require('crypto');
const Roles = require('../enums/roles.enum');
const TipoDocumento = require('../enums/tipodocumento.enum');
const { HIJOS_UPLOAD_DIR } = require('../config/multerHijos');
const parseBool = require ('../utils/parseBool') // Asegúrate de tener esta ruta bien

const prisma = new PrismaClient();

// --- UTILS ---
function sanitizeBigInt(obj) {
  if (Array.isArray(obj)) return obj.map(sanitizeBigInt);
  else if (obj && typeof obj === 'object') {
    const result = {};
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'bigint') result[key] = value.toString();
      else if (value instanceof Date) result[key] = value.toISOString().slice(0, 10); // "YYYY-MM-DD"
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
const validarNuevoHijo = [
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('apellido_paterno').notEmpty().withMessage('El apellido paterno es obligatorio'),
  body('apellido_materno').notEmpty().withMessage('El apellido materno es obligatorio'),
  body('fecha_nacimiento').notEmpty().isISO8601().withMessage('Fecha de nacimiento inválida')
];

const validarPatchHijo = [
  param('id').isInt().withMessage('ID debe ser entero'),
  body('nombre').optional().isString(),
  body('apellido_paterno').optional().isString(),
  body('apellido_materno').optional().isString(),
  body('fecha_nacimiento').optional().isISO8601(),
  body('vigente').optional().isBoolean().withMessage('Debe ser booleano')
];

const validarDescarga = [
  param('id').isInt().withMessage('ID debe ser entero')
];

// --- CONTROLADORES ---

/**
 * @desc Crear hijo (registro + acta)
 */
const crearHijo = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.file) await safeUnlink(req.file.path);
    return res.status(400).json({ success: false, message: 'Datos inválidos', errors: errors.array() });
  }
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'El archivo de acta es obligatorio.' });
  }

  const id_trabajador = req.user.id;
  const { nombre, apellido_paterno, apellido_materno, fecha_nacimiento } = req.body;
  const { originalname, path: filePath, size, mimetype } = req.file;

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
          tipo_documento: TipoDocumento.ACTA_NACIMIENTO,
          nombre_archivo: originalname,
          descripcion: `Acta de nacimiento de ${nombre}`,
          hash_archivo,
          ruta_almacenamiento: path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/'),
          tamano_bytes: BigInt(size),
          mimetype,
          es_publico: false
        }
      });
      const hijo = await tx.hijos.create({
        data: {
          id_trabajador,
          nombre,
          apellido_paterno,
          apellido_materno,
          fecha_nacimiento: new Date(fecha_nacimiento),
          acta_nacimiento_id: doc.id_documento,
          vigente: true
        },
        include: { documentos: true }
      });
      return hijo;
    });

    res.status(201).json({
      success: true,
      message: 'Hijo registrado y acta subida correctamente.',
      data: sanitizeBigInt(result)
    });
  } catch (error) {
    if (req.file) await safeUnlink(filePath);
    res.status(500).json({ success: false, message: 'Error al registrar hijo.', error: error.message });
  }
};

/**
 * @desc Listar hijos propios (usuario) o de todos/por trabajador (admin)
 */
const listarHijos = async (req, res) => {
  const userRole = req.user.role;
  const id_trabajador = req.user.id;
  const trabajadorParam = req.query.trabajador;

  let where = {};
  if (userRole === Roles.USUARIO) {
    where.id_trabajador = id_trabajador;
  } else if (trabajadorParam) {
    where.id_trabajador = parseInt(trabajadorParam);
  }

  try {
    const hijos = await prisma.hijos.findMany({
      where,
      include: { documentos: true }
    });
    res.status(200).json({
      success: true,
      message: 'Hijos obtenidos correctamente.',
      data: sanitizeBigInt(hijos)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al listar hijos.', error: error.message });
  }
};

/**
 * @desc Descargar acta de nacimiento (usuario o admin)
 */
const descargarActa = async (req, res) => {
  const { id } = req.params;
  const userRole = req.user.role;
  const id_trabajador = req.user.id;

  const hijo = await prisma.hijos.findUnique({
    where: { id_hijo: parseInt(id) },
    include: { documentos: true }
  });

  if (!hijo) {
    return res.status(404).json({ success: false, message: 'Hijo no encontrado.' });
  }

  if (userRole !== Roles.ADMINISTRADOR && hijo.id_trabajador !== id_trabajador) {
    return res.status(403).json({ success: false, message: 'No tienes permiso para descargar este archivo.' });
  }

  const doc = hijo.documentos;
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
 * @desc Editar datos del hijo y/o subir acta (solo si aún no existe)
 */
const editarHijo = async (req, res) => {
  const { id } = req.params;
  const id_trabajador = req.user.id;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.file) await safeUnlink(req.file.path);
    return res.status(400).json({ success: false, message: 'Datos inválidos', errors: errors.array() });
  }

  try {
    const hijo = await prisma.hijos.findUnique({
      where: { id_hijo: parseInt(id) },
      include: { documentos: true }
    });
    if (!hijo || hijo.id_trabajador !== id_trabajador) {
      if (req.file) await safeUnlink(req.file.path);
      return res.status(404).json({ success: false, message: 'Hijo no encontrado o no es tuyo.' });
    }

    // No permite reemplazar acta si ya existe
    if (req.file && hijo.documentos) {
      await safeUnlink(req.file.path);
      return res.status(409).json({ success: false, message: 'Ya existe un acta registrada para este hijo.' });
    }

    let actaId = hijo.acta_nacimiento_id;

    // Si sube acta y no existe, crear documento y asignar
    if (req.file && !hijo.documentos) {
      // Hash
      let hash_archivo;
      try {
        const buffer = await fs.readFile(req.file.path);
        hash_archivo = crypto.createHash('sha256').update(buffer).digest('hex');
      } catch {
        await safeUnlink(req.file.path);
        return res.status(500).json({ success: false, message: 'No se pudo calcular hash del archivo.' });
      }

      const nuevoDoc = await prisma.documentos.create({
        data: {
          id_trabajador,
          tipo_documento: TipoDocumento.ACTA_NACIMIENTO,
          nombre_archivo: req.file.originalname,
          descripcion: `Acta de nacimiento de ${req.body.nombre || hijo.nombre}`,
          hash_archivo,
          ruta_almacenamiento: path.relative(path.join(__dirname, '..'), req.file.path).replace(/\\/g, '/'),
          tamano_bytes: BigInt(req.file.size),
          mimetype: req.file.mimetype,
          es_publico: false
        }
      });
      actaId = nuevoDoc.id_documento;
    }

    // Normaliza el campo vigente (boolean)
    const vigenteValue = (req.body.vigente !== undefined) ? parseBool(req.body.vigente) : undefined;

    // Actualizar datos permitidos
    const actualizado = await prisma.hijos.update({
      where: { id_hijo: parseInt(id) },
      data: {
        nombre: req.body.nombre || undefined,
        apellido_paterno: req.body.apellido_paterno || undefined,
        apellido_materno: req.body.apellido_materno || undefined,
        fecha_nacimiento: req.body.fecha_nacimiento ? new Date(req.body.fecha_nacimiento) : undefined,
        vigente: vigenteValue !== undefined ? vigenteValue : undefined,
        acta_nacimiento_id: actaId
      },
      include: { documentos: true }
    });

    res.status(200).json({
      success: true,
      message: 'Datos del hijo actualizados correctamente.',
      data: sanitizeBigInt(actualizado)
    });

  } catch (error) {
    if (req.file) await safeUnlink(req.file.path);
    res.status(500).json({ success: false, message: 'Error al actualizar hijo.', error: error.message });
  }
};

/**
 * @desc Eliminar hijo y acta (opcional)
 */
const eliminarHijo = async (req, res) => {
  const { id } = req.params;
  const id_trabajador = req.user.id;
  try {
    const hijo = await prisma.hijos.findUnique({
      where: { id_hijo: parseInt(id) },
      include: { documentos: true }
    });
    if (!hijo || hijo.id_trabajador !== id_trabajador) {
      return res.status(404).json({ success: false, message: 'Hijo no encontrado o no es tuyo.' });
    }

    await prisma.$transaction(async (tx) => {
      await tx.hijos.delete({ where: { id_hijo: parseInt(id) } });
      if (hijo.documentos && hijo.documentos.ruta_almacenamiento) {
        await safeUnlink(path.join(__dirname, '..', hijo.documentos.ruta_almacenamiento));
        await tx.documentos.delete({ where: { id_documento: hijo.documentos.id_documento } });
      }
    });

    res.status(200).json({
      success: true,
      message: 'Hijo y acta eliminados correctamente.'
    });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al eliminar hijo.', error: error.message });
  }
};

module.exports = {
  validarNuevoHijo,
  validarPatchHijo,
  validarDescarga,
  crearHijo,
  listarHijos,
  descargarActa,
  editarHijo,
  eliminarHijo
};
