// config/multerCursosTrabajadores.js
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const { createFileFilter } = require('../middleware/multer-error-handler');
const TipoDocumento = require('../enums/tipodocumento.enum');

// Carpeta base
const BASE_UPLOAD_DIR = path.join(__dirname, '../uploads/cursos');

// Mapeo de tipo_documento a subcarpeta
const DOCUMENT_TYPE_FOLDER = {
  [TipoDocumento.INVITACION_CURSO]: 'invitacion',
  [TipoDocumento.CONCLUSION_CURSO]: 'conclusion',
  [TipoDocumento.CERTIFICADO_CURSO]: 'certificado'
};

// Tipos MIME permitidos (PDF, DOC, DOCX)
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const fileFilter = createFileFilter(
  ALLOWED_MIME_TYPES,
  'Tipo de archivo no permitido. Solo PDF, DOC y DOCX.'
);

// Storage dinámico por tipo de documento
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Obtiene el tipo_documento (desde body o params según endpoint)
    const tipoDocumento = req.body.tipo_documento || req.params.tipo_documento;
    const folderKey = DOCUMENT_TYPE_FOLDER[tipoDocumento];

    if (!folderKey) {
      return cb(new Error('Tipo de documento inválido o no soportado.'), false);
    }
    const destDir = path.join(BASE_UPLOAD_DIR, folderKey);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    cb(null, destDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(8).toString('hex');
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, uniqueSuffix + ext);
  }
});

const uploadCursoTrabajadorDocumento = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10 MB máximo
  }
});

module.exports = {
  uploadCursoTrabajadorDocumento,
  BASE_UPLOAD_DIR
};
