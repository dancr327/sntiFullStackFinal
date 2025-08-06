
// ✅ config/multerGaleria.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { createFileFilter } = require('../middleware/multer-error-handler');

const GALERIA_DIR = path.join(__dirname, '../uploads/galeria');
if (!fs.existsSync(GALERIA_DIR)) {
  fs.mkdirSync(GALERIA_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, GALERIA_DIR);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext);
    cb(null, `${base}-${timestamp}${ext}`);
  }
});

const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
const fileFilter = createFileFilter(allowedTypes, 'Solo se permiten imágenes JPG, PNG o WEBP');

const uploadGaleria = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });

module.exports = { uploadGaleria };