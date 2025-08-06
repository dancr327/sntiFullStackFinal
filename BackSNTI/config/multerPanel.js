// config/multerPanel.js
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const { createFileFilter } = require('../middleware/multer-error-handler');
const TipoDocumento = require('../enums/tipodocumento.enum');

// Mapear cada tipo a su carpeta (¡puedes personalizar después!)
const PANEL_DIRECTORIES = {
  CURP: 'curp',
  RFC: 'rfc',
  INE: 'ine',
  CERTIFICADO_ESTUDIO: 'certificados_estudio',
  OTRO_DOCUMENTO: 'otros_documentos'
};

// Carpeta raíz de documentos de panel
const PANEL_UPLOAD_BASE = path.join(__dirname, '../uploads/');

// Tipos MIME permitidos: PDF, DOC, DOCX
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const panelFileFilter = createFileFilter(
  ALLOWED_MIME_TYPES,
  'Tipo de archivo no permitido. Solo PDF, DOC y DOCX.'
);

// Storage dinámico según tipo_documento
const storagePanel = multer.diskStorage({
  destination: function (req, file, cb) {
    // Recibe tipo_documento en el body
    const tipoDoc = req.body.tipo_documento;
    const folderKey = PANEL_DIRECTORIES[tipoDoc];
    if (!folderKey) {
      return cb(new Error('Tipo de documento inválido o no soportado.'), false);
    }
    const destDir = path.join(PANEL_UPLOAD_BASE, folderKey);
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

const uploadPanelDocumento = multer({
  storage: storagePanel,
  fileFilter: panelFileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10 MB máximo
  }
});

module.exports = {
  uploadPanelDocumento,
  PANEL_DIRECTORIES,
  PANEL_UPLOAD_BASE
};
