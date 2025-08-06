const { PrismaClient } = require('@prisma/client');
const { validationResult, body, param } = require('express-validator');
const path = require('path');
const fs = require('fs').promises;
const crypto = require('crypto');
const Roles = require('../enums/roles.enum');
const TipoDocumento = require('../enums/tipodocumento.enum');
const { PANEL_DIRECTORIES } = require('../config/multerPanel');
const sanitizeBigInt = require('../utils/sanitizeBigInt');

// --- UTILS ---
async function safeUnlink(filePath) {
  try { await fs.unlink(filePath); } catch { }
}

const prisma = new PrismaClient();

// --- VALIDADORES ---
const validarSubidaPanel = [
  body('tipo_documento')
    .notEmpty().withMessage('El tipo_documento es obligatorio.')
    .isIn(Object.keys(PANEL_DIRECTORIES)).withMessage('Tipo de documento no permitido.')
];

// --- CONTROLADORES ---

/**
 * @desc Sube (o reemplaza) un documento de panel para el usuario
 */
const subirDocumentoPanel = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.file) await safeUnlink(req.file.path);
    return res.status(400).json({ success: false, message: 'Datos inválidos', errors: errors.array() });
  }
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'El archivo es obligatorio.' });
  }

  const id_trabajador = req.user.id;
  const { tipo_documento } = req.body;
  const { originalname, path: filePath, size, mimetype } = req.file;

  // Busca documento previo (para reemplazo seguro)
  const docPrevio = await prisma.documentos.findFirst({
    where: {
      id_trabajador,
      tipo_documento
    }
  });

  // Calcula hash
  let hash_archivo;
  try {
    const buffer = await fs.readFile(filePath);
    hash_archivo = crypto.createHash('sha256').update(buffer).digest('hex');
  } catch {
    await safeUnlink(filePath);
    return res.status(500).json({ success: false, message: 'No se pudo calcular hash del archivo.' });
  }

  try {
    const resultado = await prisma.$transaction(async (tx) => {
      // Si existe, elimina físico y de la BD
      if (docPrevio) {
        await safeUnlink(path.join(__dirname, '..', docPrevio.ruta_almacenamiento));
        await tx.documentos.delete({ where: { id_documento: docPrevio.id_documento } });
      }
      // Registra nuevo
      const docNuevo = await tx.documentos.create({
        data: {
          id_trabajador,
          tipo_documento,
          nombre_archivo: originalname,
          descripcion: `Documento ${tipo_documento} subido por usuario`,
          hash_archivo,
          ruta_almacenamiento: path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/'),
          tamano_bytes: BigInt(size),
          mimetype,
          es_publico: false
        }
      });
      return docNuevo;
    });

    res.status(201).json({
      success: true,
      message: 'Documento subido correctamente.',
      data: sanitizeBigInt(resultado)
    });
  } catch (error) {
    if (req.file) await safeUnlink(filePath);
    res.status(500).json({ success: false, message: 'Error al subir documento.', error: error.message });
  }
};

/**
 * @desc Lista los documentos del usuario autenticado
 */
const listarMisDocumentos = async (req, res) => {
  const id_trabajador = req.user.id;
  try {
    const docs = await prisma.documentos.findMany({
      where: {
        id_trabajador,
        tipo_documento: { in: Object.keys(PANEL_DIRECTORIES) }
      },
      orderBy: { tipo_documento: 'asc' }
    });
    res.status(200).json({
      success: true,
      message: 'Documentos obtenidos correctamente.',
      data: sanitizeBigInt(docs)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al listar documentos.', error: error.message });
  }
};

/**
 * @desc Lista documentos de un trabajador (admin)
 */
const listarDocumentosTrabajador = async (req, res) => {
  const { trabajador } = req.query;
  if (!trabajador) {
    return res.status(400).json({ success: false, message: 'Falta el parámetro trabajador.' });
  }
  try {
    const docs = await prisma.documentos.findMany({
      where: {
        id_trabajador: parseInt(trabajador),
        tipo_documento: { in: Object.keys(PANEL_DIRECTORIES) }
      },
      orderBy: { tipo_documento: 'asc' }
    });
    res.status(200).json({
      success: true,
      message: 'Documentos del trabajador obtenidos correctamente.',
      data: sanitizeBigInt(docs)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al listar documentos del trabajador.', error: error.message });
  }
};

/**
 * @desc Descargar documento de panel (usuario propio o admin)
 */
const descargarDocumentoPanel = async (req, res) => {
  const { id } = req.params;
  const userRole = req.user.role;
  const id_trabajador = req.user.id;

  const doc = await prisma.documentos.findUnique({
    where: { id_documento: parseInt(id) }
  });

  if (!doc) {
    return res.status(404).json({ success: false, message: 'Documento no encontrado.' });
  }
  if (userRole !== Roles.ADMINISTRADOR && doc.id_trabajador !== id_trabajador) {
    return res.status(403).json({ success: false, message: 'No tienes permiso para descargar este archivo.' });
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
 * @desc Eliminar documento de panel (usuario)
 */
const eliminarDocumentoPanel = async (req, res) => {
  const { id } = req.params;
  const id_trabajador = req.user.id;

  try {
    const doc = await prisma.documentos.findUnique({
      where: { id_documento: parseInt(id) }
    });
    if (!doc || doc.id_trabajador !== id_trabajador) {
      return res.status(404).json({ success: false, message: 'Documento no encontrado o no es tuyo.' });
    }

    await prisma.$transaction(async (tx) => {
      await tx.documentos.delete({ where: { id_documento: parseInt(id) } });
      if (doc.ruta_almacenamiento) {
        await safeUnlink(path.join(__dirname, '..', doc.ruta_almacenamiento));
      }
    });

    res.status(200).json({
      success: true,
      message: 'Documento eliminado correctamente.'
    });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al eliminar documento.', error: error.message });
  }
};

module.exports = {
  validarSubidaPanel,
  subirDocumentoPanel,
  listarMisDocumentos,
  listarDocumentosTrabajador,
  descargarDocumentoPanel,
  eliminarDocumentoPanel
};
