// config/multerHijos.js
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const { createFileFilter } = require('../middleware/multer-error-handler');

// Carpeta base para actas de hijos
const HIJOS_UPLOAD_DIR = path.join(__dirname, '../uploads/hijos');

// Asegura que la carpeta exista
if (!fs.existsSync(HIJOS_UPLOAD_DIR)) {
  fs.mkdirSync(HIJOS_UPLOAD_DIR, { recursive: true });
}

// Tipos MIME permitidos
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const hijosFileFilter = createFileFilter(
  ALLOWED_MIME_TYPES,
  'Tipo de archivo no permitido. Solo PDF, DOC y DOCX.'
);

const storageHijos = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, HIJOS_UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(8).toString('hex');
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, uniqueSuffix + ext);
  }
});

const uploadHijoActa = multer({
  storage: storageHijos,
  fileFilter: hijosFileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10 MB máximo
  }
});

module.exports = {
  uploadHijoActa,
  HIJOS_UPLOAD_DIR
};
