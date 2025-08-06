// File: controllers/cambioAdscripcionController.js

const { PrismaClient } = require('@prisma/client');
const { validationResult } = require('express-validator');
const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');
const mime = require('mime-types');

const sanitizeBigInt = require('../utils/sanitizeBigInt');
const Roles = require('../enums/roles.enum');
const { DIR_COMPROBATORIO, DIR_NOMBRAMIENTO } = require('../config/multerCambiosAdscripcion');

const prisma = new PrismaClient();

// Calcular hash SHA-256
async function calcularHash(filePath) {
  const buffer = await fs.readFile(filePath);
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

// Registrar documento en la tabla documentos
async function registrarDocumento({ file, tipo_documento, id_trabajador }) {
  const hash = await calcularHash(file.path);
  const stats = await fs.stat(file.path);
  const metadata = {
    originalname: file.originalname,
    size: stats.size,
    mimetype: file.mimetype,
    fecha_subida: new Date().toISOString()
  };

  const nuevoDocumento = await prisma.documentos.create({
    data: {
      id_trabajador,
      tipo_documento,
      metadata,
      hash_archivo: hash,
      nombre_archivo: file.filename,
      descripcion: `Documento ${tipo_documento} de cambio de adscripción`,
      tipo_archivo: path.extname(file.originalname).substring(1),
      ruta_almacenamiento: file.path,
      tamano_bytes: BigInt(stats.size),
      es_publico: false,
      mimetype: file.mimetype
    }
  });

  return nuevoDocumento;
}

// POST: Registrar cambio con documentos
async function registrarCambioConDocumentos(req, res) {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ success: false, errors: errores.array() });
  }

 const {
  adscripcion_nueva,
  motivo,
  fecha_cambio
} = req.body;

const id_trabajador = parseInt(req.body.id_trabajador);

  const fileComprobatorio = req.files['documento_comprobatorio']?.[0];
  const fileNombramiento = req.files['documento_nombramiento']?.[0];

  if (!fileComprobatorio || !fileNombramiento) {
    return res.status(400).json({ success: false, message: 'Ambos documentos son obligatorios.' });
  }

  try {
    const trabajador = await prisma.trabajadores.findUnique({ where: { id_trabajador } });
    if (!trabajador) return res.status(404).json({ success: false, message: 'Trabajador no encontrado' });

    const docComprobatorio = await registrarDocumento({
      file: fileComprobatorio,
      tipo_documento: 'COMPROBATORIO_CAMBIO_ADSCRIPCION',
      id_trabajador
    });

    const docNombramiento = await registrarDocumento({
      file: fileNombramiento,
      tipo_documento: 'NOMBRAMIENTO_CAMBIO_ADSCRIPCION',
      id_trabajador
    });

    const nuevoCambio = await prisma.cambiosadscripcion.create({
      data: {
        id_trabajador,
        adscripcion_anterior: trabajador.adscripcion,
        adscripcion_nueva,
        motivo,
        fecha_cambio: new Date(fecha_cambio),
        documento_comprobatorio_id: docComprobatorio.id_documento,
        documento_nombramiento_id: docNombramiento.id_documento,
        usuario_registro: req.user?.identificador || 'sistema'
      }
    });

    await prisma.trabajadores.update({
      where: { id_trabajador },
      data: { adscripcion: adscripcion_nueva }
    });

    res.status(201).json({ success: true, data: sanitizeBigInt(nuevoCambio) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al registrar el cambio con documentos' });
  }
}

// GET: Descargar documento por tipo (comprobatorio o nombramiento)
async function descargarDocumentoCambio(req, res) {
  const { tipo, id } = req.params;
  const id_cambio = parseInt(id);

  if (!['comprobatorio', 'nombramiento'].includes(tipo)) {
    return res.status(400).json({ success: false, message: 'Tipo de documento inválido' });
  }

  try {
    const cambio = await prisma.cambiosadscripcion.findUnique({
      where: { id_cambio },
      include: {
        documentoComprobatorio: true,
        documentoNombramiento: true,
        trabajadores: true
      }
    });

    if (!cambio) return res.status(404).json({ success: false, message: 'Cambio no encontrado' });

    const esPropietario = req.user.rol === Roles.USUARIO && req.user.id_trabajador === cambio.id_trabajador;
    if (req.user.rol !== Roles.ADMINISTRADOR && !esPropietario) {
      return res.status(403).json({ success: false, message: 'Acceso no autorizado' });
    }

    const documento = tipo === 'comprobatorio' ? cambio.documentoComprobatorio : cambio.documentoNombramiento;
    if (!documento) return res.status(404).json({ success: false, message: 'Documento no encontrado' });

    res.download(documento.ruta_almacenamiento, documento.nombre_archivo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al descargar el documento' });
  }
}

// GET: Listar todos los cambios de adscripción
async function listarTodosLosCambios(req, res) {
  try {
    const cambios = await prisma.cambiosadscripcion.findMany({
      include: {
        trabajadores: true
      },
      orderBy: { fecha_cambio: 'desc' }
    });
    res.json({ success: true, data: sanitizeBigInt(cambios) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al listar los cambios' });
  }
}

// GET: Listar cambios por trabajador (admin o usuario dueño)
async function listarCambiosPorTrabajador(req, res) {
  const id_trabajador = parseInt(req.params.id);

  const esPropietario = req.user.rol === Roles.USUARIO && req.user.id_trabajador === id_trabajador;
  if (req.user.rol !== Roles.ADMINISTRADOR && !esPropietario) {
    return res.status(403).json({ success: false, message: 'Acceso no autorizado' });
  }

  try {
    const cambios = await prisma.cambiosadscripcion.findMany({
      where: { id_trabajador },
      include: {
        documentoComprobatorio: true,
        documentoNombramiento: true
      },
      orderBy: { fecha_cambio: 'desc' }
    });
    res.json({ success: true, data: sanitizeBigInt(cambios) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener los cambios del trabajador' });
  }
}

// DELETE: Eliminar cambio
async function eliminarCambioAdscripcion(req, res) {
  const id_cambio = parseInt(req.params.id);
  try {
    await prisma.cambiosadscripcion.delete({ where: { id_cambio } });
    res.json({ success: true, message: 'Cambio eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al eliminar el cambio' });
  }
}

module.exports = {
  registrarCambioConDocumentos,
  descargarDocumentoCambio,
  listarTodosLosCambios,
  listarCambiosPorTrabajador,
  eliminarCambioAdscripcion
};
