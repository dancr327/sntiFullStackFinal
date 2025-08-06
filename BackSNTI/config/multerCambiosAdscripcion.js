// File: config/multerCambiosAdscripcion.js

const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const { createFileFilter } = require('../middleware/multer-error-handler');

// Directorios base para los documentos
const DIR_COMPROBATORIO = path.join(__dirname, '../uploads/documento_comprobatorio');
const DIR_NOMBRAMIENTO = path.join(__dirname, '../uploads/documento_nombramiento'); // <-- Nombre correcto con 'R'

// Crear directorios si no existen
[DIR_COMPROBATORIO, DIR_NOMBRAMIENTO].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Tipos de archivo permitidos
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const fileFilter = createFileFilter(
  ALLOWED_MIME_TYPES,
  'Tipo de archivo no permitido. Solo se aceptan PDF, DOC y DOCX.'
);

// Un solo "storage" para manejar ambos archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'documento_comprobatorio') {
      cb(null, DIR_COMPROBATORIO);
    } else if (file.fieldname === 'documento_nombramiento') {
      // CORRECCIÓN AQUÍ: Usar el nombre de variable correcto con 'R'
      cb(null, DIR_NOMBRAMIENTO); 
    } else {
      cb(new Error('Campo de archivo no reconocido'), null);
    }
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const hash = crypto.randomBytes(8).toString('hex');
    cb(null, `${Date.now()}-${hash}${ext}`);
  }
});

// Un solo middleware que usa .fields() para esperar ambos archivos
const uploadCambioAdscripcionFields = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
}).fields([
  { name: 'documento_comprobatorio', maxCount: 1 },
  { name: 'documento_nombramiento', maxCount: 1 }
]);

// Exportamos el middleware único
module.exports = {
  uploadCambioAdscripcionFields,
  DIR_COMPROBATORIO,
  // CORRECCIÓN AQUÍ: Usar el nombre de variable correcto con 'R'
  DIR_NOMBRAMIENTO
};