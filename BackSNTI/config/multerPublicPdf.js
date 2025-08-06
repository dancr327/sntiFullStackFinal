// config/multerPublicPdf.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const { createFileFilter } = require('../middleware/multer-error-handler');

// Carpeta destino
const PUBLIC_PDFS_DIR = path.join(__dirname, '../uploads/publicpdfs');

// Asegura que la carpeta exista
if (!fs.existsSync(PUBLIC_PDFS_DIR)) {
  fs.mkdirSync(PUBLIC_PDFS_DIR, { recursive: true });
}

// Solo se aceptan PDFs
const ALLOWED_MIME_TYPES = ['application/pdf'];
const pdfFileFilter = createFileFilter(
  ALLOWED_MIME_TYPES,
  'Tipo de archivo no permitido. Solo se aceptan archivos PDF.'
);

// Configuración de almacenamiento
const storagePublicPdf = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PUBLIC_PDFS_DIR);
  },
  filename: (req, file, cb) => {
    // Formato: timestamp-hash.extensión
    const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(8).toString('hex');
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, uniqueSuffix + ext);
  }
});

// Middleware Multer listo para un solo archivo
const uploadPublicPdf = multer({
  storage: storagePublicPdf,
  fileFilter: pdfFileFilter,
  limits: {
    fileSize: 40 * 1024 * 1024 // 10 MB
  }
});

module.exports = {
  uploadPublicPdf,
  PUBLIC_PDFS_DIR
};
