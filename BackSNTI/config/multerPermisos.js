const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const { createFileFilter } = require('../middleware/multer-error-handler');

const PERMISOS_UPLOAD_DIR = path.join(__dirname, '../uploads/aprobaciones_permisos');

if (!fs.existsSync(PERMISOS_UPLOAD_DIR)) {
  fs.mkdirSync(PERMISOS_UPLOAD_DIR, { recursive: true });
}

const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const permisosFileFilter = createFileFilter(
  ALLOWED_MIME_TYPES,
  'Tipo de archivo no permitido. Solo PDF, DOC y DOCX.'
);

const storagePermisos = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, PERMISOS_UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(8).toString('hex');
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, uniqueSuffix + ext);
  }
});

const uploadPermisoAprobacion = multer({
  storage: storagePermisos,
  fileFilter: permisosFileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10 MB máximo
  }
});

module.exports = {
  uploadPermisoAprobacion,
  PERMISOS_UPLOAD_DIR
};
