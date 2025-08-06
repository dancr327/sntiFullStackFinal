// config/multerCursos.js
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const { createFileFilter } = require('../middleware/multer-error-handler');

// Carpeta base para constancias de cursos
const CURSOS_CONSTANCIAS_DIR = path.join(__dirname, '../uploads/cursos/constancias');

// Asegurar que el directorio exista
if (!fs.existsSync(CURSOS_CONSTANCIAS_DIR)) {
  fs.mkdirSync(CURSOS_CONSTANCIAS_DIR, { recursive: true });
}

// Solo se permiten PDF y Word
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const cursosConstanciaFileFilter = createFileFilter(
  ALLOWED_MIME_TYPES,
  'Tipo de archivo no permitido. Solo PDF, DOC y DOCX.'
);

const storageCursosConstancia = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, CURSOS_CONSTANCIAS_DIR);
  },
  filename: function (req, file, cb) {
    // Nombre único: timestamp-hash.ext
    const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(8).toString('hex');
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, uniqueSuffix + ext);
  }
});

// Multer para un solo archivo por curso
const uploadCursoConstancia = multer({
  storage: storageCursosConstancia,
  fileFilter: cursosConstanciaFileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB
  }
});

module.exports = {
  uploadCursoConstancia,
  CURSOS_CONSTANCIAS_DIR
};
