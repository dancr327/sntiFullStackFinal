const { PrismaClient } = require('@prisma/client');
const { validationResult, body, param } = require('express-validator');
const path = require('path');
const fs = require('fs').promises;
const crypto = require('crypto');
const Roles = require('../enums/roles.enum');
const EstatusPermiso = require('../enums/estatusPermiso.enum');
const TipoDocumento = require('../enums/tipodocumento.enum'); // Usa tu enum global para tipos de documento
const sanitizeBigInt = require('../utils/sanitizeBigInt');
const { PERMISOS_UPLOAD_DIR } = require('../config/multerPermisos');

const prisma = new PrismaClient();

// --- VALIDADORES ---
const validarPermiso = [
  body('id_trabajador')
    .notEmpty().isInt().withMessage('El trabajador es obligatorio'),
  body('tipo_permiso')
    .notEmpty().isString().withMessage('El tipo de permiso es obligatorio'),
  body('fecha_inicio')
    .notEmpty().isISO8601().withMessage('Fecha de inicio inválida'),
  body('fecha_fin')
    .notEmpty().isISO8601().withMessage('Fecha de fin inválida'),
  body('motivo')
    .notEmpty().isString().withMessage('El motivo es obligatorio'),
  body('estatus')
    .optional()
    .isIn(Object.values(EstatusPermiso)).withMessage('Estatus inválido')
];

const validarPatchPermiso = [
  param('id').isInt().withMessage('ID debe ser entero'),
  body('tipo_permiso').optional().isString(),
  body('fecha_inicio').optional().isISO8601(),
  body('fecha_fin').optional().isISO8601(),
  body('motivo').optional().isString(),
  body('estatus').optional().isIn(Object.values(EstatusPermiso)).withMessage('Estatus inválido')
];

// --- UTILS ---
async function safeUnlink(filePath) {
  try { await fs.unlink(filePath); } catch { }
}

// --- CONTROLADORES ---

/**
 * @desc Crear permiso (ADMIN) + documento
 */
const crearPermiso = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.file) await safeUnlink(req.file.path);
    return res.status(400).json({ success: false, message: 'Datos inválidos', errors: errors.array() });
  }

  if (!req.file) {
    return res.status(400).json({ success: false, message: 'El archivo de aprobación es obligatorio.' });
  }

  const { id_trabajador, tipo_permiso, fecha_inicio, fecha_fin, motivo, estatus } = req.body;
  const { originalname, path: filePath, size, mimetype } = req.file;

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
      // 1. Documento de aprobación
      const doc = await tx.documentos.create({
        data: {
          id_trabajador: parseInt(id_trabajador),
          tipo_documento: TipoDocumento.APROBACION_PERMISO,
          nombre_archivo: originalname,
          descripcion: `Aprobación permiso`,
          hash_archivo,
          ruta_almacenamiento: path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/'),
          tamano_bytes: BigInt(size),
          mimetype,
          es_publico: false
        }
      });
      // 2. Permiso
      const permiso = await tx.permisos.create({
        data: {
          id_trabajador: parseInt(id_trabajador),
          tipo_permiso,
          fecha_inicio: new Date(fecha_inicio),
          fecha_fin: new Date(fecha_fin),
          motivo,
          estatus: estatus || EstatusPermiso.PENDIENTE,
          documento_aprobacion_id: doc.id_documento
        },
        include: { documentos: true }
      });
      return permiso;
    });
    res.status(201).json({
      success: true,
      message: 'Permiso registrado correctamente.',
      data: sanitizeBigInt(result)
    });
  } catch (error) {
    if (req.file) await safeUnlink(filePath);
    res.status(500).json({ success: false, message: 'Error al registrar permiso.', error: error.message });
  }
};

/**
 * @desc Listar permisos (ADMIN: todos, USUARIO: solo propios)
 */
const listarPermisos = async (req, res) => {
  const userRole = req.user.role;
  const id_trabajador = req.user.id;
  let where = {};
  if (userRole === Roles.USUARIO) {
    where.id_trabajador = id_trabajador;
  } else if (req.query.trabajador) {
    where.id_trabajador = parseInt(req.query.trabajador);
  }
  try {
    const permisos = await prisma.permisos.findMany({
      where,
      include: {
        documentos: true,
        trabajadores: {
          include: {
            seccion: true
          }
        }
      }
    });
    res.status(200).json({
      success: true,
      message: 'Permisos obtenidos correctamente.',
      data: sanitizeBigInt(permisos)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al listar permisos.', error: error.message });
  }
};

/**
 * @desc Descargar documento aprobación (ADMIN o USUARIO dueño)
 */
const descargarAprobacion = async (req, res) => {
  const { id } = req.params;
  const userRole = req.user.role;
  const id_trabajador = req.user.id;

  const permiso = await prisma.permisos.findUnique({
    where: { id_permiso: parseInt(id) },
    include: { documentos: true }
  });

  if (!permiso) {
    return res.status(404).json({ success: false, message: 'Permiso no encontrado.' });
  }
  if (userRole !== Roles.ADMINISTRADOR && permiso.id_trabajador !== id_trabajador) {
    return res.status(403).json({ success: false, message: 'No tienes permiso para descargar este archivo.' });
  }
  const doc = permiso.documentos;
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
 * @desc Actualizar permiso (ADMIN: datos, documento, estatus)
 */
const actualizarPermiso = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.file) await safeUnlink(req.file.path);
    return res.status(400).json({ success: false, message: 'Datos inválidos', errors: errors.array() });
  }
  try {
    const permiso = await prisma.permisos.findUnique({
      where: { id_permiso: parseInt(id) },
      include: { documentos: true }
    });
    if (!permiso) {
      if (req.file) await safeUnlink(req.file.path);
      return res.status(404).json({ success: false, message: 'Permiso no encontrado.' });
    }

    let docAprobacionId = permiso.documento_aprobacion_id;

    // Si hay archivo nuevo, reemplaza
    if (req.file) {
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
          id_trabajador: permiso.id_trabajador,
          tipo_documento: TipoDocumento.APROBACION_PERMISO,
          nombre_archivo: req.file.originalname,
          descripcion: `Aprobación permiso`,
          hash_archivo,
          ruta_almacenamiento: path.relative(path.join(__dirname, '..'), req.file.path).replace(/\\/g, '/'),
          tamano_bytes: BigInt(req.file.size),
          mimetype: req.file.mimetype,
          es_publico: false
        }
      });

      // Borra archivo físico y doc anterior si existe
      if (permiso.documentos && permiso.documentos.ruta_almacenamiento) {
        await safeUnlink(path.join(__dirname, '..', permiso.documentos.ruta_almacenamiento));
        await prisma.documentos.delete({ where: { id_documento: permiso.documentos.id_documento } });
      }
      docAprobacionId = nuevoDoc.id_documento;
    }

    // Actualiza datos permitidos
    const actualizado = await prisma.permisos.update({
      where: { id_permiso: parseInt(id) },
      data: {
        tipo_permiso: req.body.tipo_permiso || undefined,
        fecha_inicio: req.body.fecha_inicio ? new Date(req.body.fecha_inicio) : undefined,
        fecha_fin: req.body.fecha_fin ? new Date(req.body.fecha_fin) : undefined,
        motivo: req.body.motivo || undefined,
        estatus: req.body.estatus || undefined,
        documento_aprobacion_id: docAprobacionId
      },
      include: { documentos: true }
    });

    res.status(200).json({
      success: true,
      message: 'Permiso actualizado correctamente.',
      data: sanitizeBigInt(actualizado)
    });
  } catch (error) {
    if (req.file) await safeUnlink(req.file.path);
    res.status(500).json({ success: false, message: 'Error al actualizar permiso.', error: error.message });
  }
};

/**
 * @desc Eliminar permiso y documento (ADMIN)
 */
const eliminarPermiso = async (req, res) => {
  const { id } = req.params;
  try {
    const permiso = await prisma.permisos.findUnique({
      where: { id_permiso: parseInt(id) },
      include: { documentos: true }
    });
    if (!permiso) {
      return res.status(404).json({ success: false, message: 'Permiso no encontrado.' });
    }

    await prisma.$transaction(async (tx) => {
      await tx.permisos.delete({ where: { id_permiso: parseInt(id) } });
      if (permiso.documentos && permiso.documentos.ruta_almacenamiento) {
        await safeUnlink(path.join(__dirname, '..', permiso.documentos.ruta_almacenamiento));
        await tx.documentos.delete({ where: { id_documento: permiso.documentos.id_documento } });
      }
    });

    res.status(200).json({
      success: true,
      message: 'Permiso y documento eliminados correctamente.'
    });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al eliminar permiso.', error: error.message });
  }
};

module.exports = {
  validarPermiso,
  validarPatchPermiso,
  crearPermiso,
  listarPermisos,
  descargarAprobacion,
  actualizarPermiso,
  eliminarPermiso
};
