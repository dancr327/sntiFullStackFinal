const path = require('path');
const fs = require('fs').promises;
const crypto = require('crypto');
const { PrismaClient } = require('@prisma/client');
const { PUBLIC_PDFS_DIR } = require('../config/multerPublicPdf');
const sanitizeBigInt = require('../utils/sanitizeBigInt'); // <-- Importa desde utils

const prisma = new PrismaClient();

async function safeUnlink(filePath) {
  try { await fs.unlink(filePath); } catch {}
}

/**
 * @desc Subir PDF público (ADMINISTRADOR)
 */
const uploadDocumentoPublico = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'Archivo PDF requerido.' });
  }

  const { originalname, path: filePath, size, mimetype } = req.file;

  // Calcular hash del archivo
  let hash_archivo;
  try {
    const buffer = await fs.readFile(filePath);
    hash_archivo = crypto.createHash('sha256').update(buffer).digest('hex');
  } catch (err) {
    await safeUnlink(filePath);
    return res.status(500).json({ success: false, message: 'No se pudo calcular hash del archivo.' });
  }

  try {
    const documento = await prisma.documentos.create({
      data: {
        id_trabajador: null,
        tipo_documento: 'PUBLICO_GENERAL',
        nombre_archivo: originalname,
        descripcion: req.body.descripcion || 'Documento público',
        hash_archivo,
        ruta_almacenamiento: path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/'),
        tamano_bytes: BigInt(size),
        mimetype,
        es_publico: true
      }
    });

    res.status(201).json({
      success: true,
      message: 'Documento público subido correctamente.',
      data: sanitizeBigInt(documento)
    });
  } catch (error) {
    await safeUnlink(filePath);
    res.status(500).json({ success: false, message: 'Error al guardar en base de datos.', error: error.message });
  }
};

/**
 * @desc Descargar documento público por filename
 */
const downloadDocumentoPublico = async (req, res) => {
  const { filename } = req.params;
  const absPath = path.join(PUBLIC_PDFS_DIR, filename);

  try {
    const documento = await prisma.documentos.findFirst({
      where: {
        ruta_almacenamiento: {
          endsWith: `publicpdfs/${filename}`
        },
        es_publico: true
      }
    });

    if (!documento) {
      return res.status(404).json({ success: false, message: 'Documento no encontrado en la base de datos.' });
    }

    await fs.access(absPath);

    res.setHeader('Content-Type', documento.mimetype || 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${documento.nombre_archivo}"`);
    res.setHeader('Content-Length', documento.tamano_bytes.toString());

    return res.download(absPath, (err) => {
      if (err && !res.headersSent) {
        res.status(500).json({ success: false, message: 'Error al descargar el archivo.' });
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error al descargar el documento.', error: err.message });
  }
};

/**
 * @desc Listar todos los documentos públicos disponibles
 */
const listarDocumentosPublicos = async (req, res) => {
  try {
    const documentos = await prisma.documentos.findMany({
      where: { es_publico: true },
      orderBy: { fecha_subida: 'desc' }
    });

    const baseUrl = `${req.protocol}://${req.get('host')}/publicpdfs`;
    const resultado = documentos.map((doc) => {
      const filename = doc.ruta_almacenamiento.split('/').pop(); // Manejo seguro
      return {
        ...sanitizeBigInt(doc),
        url_descarga: `${baseUrl}/${filename}`
      };
    });

    res.status(200).json({
      success: true,
      message: 'Documentos públicos listados correctamente.',
      data: resultado
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al listar documentos públicos.',
      error: error.message
    });
  }
};

module.exports = {
  uploadDocumentoPublico,
  downloadDocumentoPublico,
  listarDocumentosPublicos
};
