// File: config/multerConfig.js
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const fsPromises = require('fs').promises;
const { createFileFilter } = require('../middleware/multer-error-handler');


// Constantes para tipos de documentos (las mantenemos por si las usas en otra parte)
const TIPOS_DOCUMENTOS = {
    INE: 'ine',
    CURP: 'curp',
    RFC: 'rfc',
    ACTA_NACIMIENTO: 'actas_nacimiento',
    CERTIFICADO_ESTUDIOS: 'certificados_estudios',
    CERTIFICADO_CURSO: 'certificados_cursos',
    APROBACION_PERMISO: 'aprobaciones_permisos',
    RESPALDO_CAMBIO_ADSCRIPCION: 'documentos_respaldo_cambios_adscripcion',
    OTRO: 'otros_documentos'
};

// Mapeo de nombres descriptivos a claves del sistema (las mantenemos por si las usas en otra parte)
const MAPEO_TIPOS_DOCUMENTOS = {
    'INE': TIPOS_DOCUMENTOS.INE,
    'CURP': TIPOS_DOCUMENTOS.CURP,
    'RFC': TIPOS_DOCUMENTOS.RFC,
    'Acta de Nacimiento': TIPOS_DOCUMENTOS.ACTA_NACIMIENTO,
    'Certificado de Estudios': TIPOS_DOCUMENTOS.CERTIFICADO_ESTUDIOS,
    'Certificado de Curso': TIPOS_DOCUMENTOS.CERTIFICADO_CURSO,
    'Aprobación Permiso': TIPOS_DOCUMENTOS.APROBACION_PERMISO,
    'Respaldo Cambio Adscripción': TIPOS_DOCUMENTOS.RESPALDO_CAMBIO_ADSCRIPCION,
    'Otro': TIPOS_DOCUMENTOS.OTRO
};

// Lista de MIME types permitidos (la mantenemos por si la usas en otra parte)
const ALLOWED_MIME_TYPES = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/webp',
    'application/msword', // doc
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // docx
    'application/vnd.ms-excel', // xls
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' // xlsx
];

// Crear filtro personalizado usando utilitario (lo mantenemos por si lo usas en otra parte)
const fileFilter = createFileFilter(
    ALLOWED_MIME_TYPES,
    'Tipo de archivo no permitido. Formatos aceptados: PDF, JPEG, PNG, WEBP, DOC, DOCX, XLS, XLSX'
);

// Constante específica para el directorio de actas de nacimiento
const ACTAS_NACIMIENTO_UPLOAD_DIR = path.join(__dirname, '../uploads', 'actas_nacimiento');

// Asegurar que el directorio exista
if (!fs.existsSync(ACTAS_NACIMIENTO_UPLOAD_DIR)) {
    fs.mkdirSync(ACTAS_NACIMIENTO_UPLOAD_DIR, { recursive: true });
}

// Lista de MIME types permitidos para actas de nacimiento
const ACTAS_NACIMIENTO_ALLOWED_MIME_TYPES = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/webp'
];

// Crear filtro específico para actas de nacimiento
const actaNacimientoFileFilter = createFileFilter(
    ACTAS_NACIMIENTO_ALLOWED_MIME_TYPES,
    'Tipo de archivo no permitido para acta de nacimiento. Formatos aceptados: PDF, JPEG, PNG, WEBP'
);

// Configuración de almacenamiento específica para actas de nacimiento
const storageActasNacimiento = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, ACTAS_NACIMIENTO_UPLOAD_DIR);
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(8).toString('hex');
        const fileExtension = path.extname(file.originalname).toLowerCase();
        const safeFilename = uniqueSuffix + fileExtension;
        cb(null, safeFilename);
    }
});

// Configuración final de multer específica para actas de nacimiento
const uploadActaNacimiento = multer({
    storage: storageActasNacimiento,
    fileFilter: actaNacimientoFileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB máximo
    }
});

// Exportar la nueva configuración (y las anteriores por si las usas en otro lado)
module.exports = {
    uploadActaNacimiento,
    uploadDocumento: multer({ storage: multer.diskStorage({ destination: (req, file, cb) => {
            const tipoDocumentoKey = MAPEO_TIPOS_DOCUMENTOS[req.body.tipo_documento] || TIPOS_DOCUMENTOS.OTRO;
            const uploadDir = path.join(__dirname, '../uploads', tipoDocumentoKey);
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            cb(null, uploadDir);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(8).toString('hex');
            const fileExtension = path.extname(file.originalname).toLowerCase();
            const safeFilename = uniqueSuffix + fileExtension;
            cb(null, safeFilename);
        }
    }), fileFilter: fileFilter, limits: { fileSize: 10 * 1024 * 1024 } }),
    TIPOS_DOCUMENTOS: { ACTA_NACIMIENTO: 'actas_nacimiento', ...TIPOS_DOCUMENTOS }, // Exporta solo el tipo que necesitamos para actas y los demás
    MAPEO_TIPOS_DOCUMENTOS,
    ALLOWED_MIME_TYPES
};