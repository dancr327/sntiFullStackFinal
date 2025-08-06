// File: middleware/multer-error-handler.js
/**
 * @file multer-error-handler.js
 * @description Middleware para manejar errores específicos de multer durante la carga de archivos
 */

const multer = require('multer');

/**
 * Middleware que maneja diferentes tipos de errores de multer y proporciona respuestas específicas
 * @param {Error} err - Error capturado durante la carga del archivo
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 * @param {Function} next - Función next de Express
 * @returns {Object|undefined} Respuesta de error o continúa con la ejecución
 */
const multerErrorHandler = (err, req, res, next) => {
  if (!err) {
    return next();
    
  }

  // Manejar errores específicos de multer
  if (err instanceof multer.MulterError) {
    switch (err.code) {
      case 'LIMIT_FILE_SIZE':
        return res.status(413).json({
          success: false,
          code: 'LIMIT_FILE_SIZE',
          message: 'El archivo excede el tamaño máximo permitido'
        });
      
      case 'LIMIT_FILE_COUNT':
        return res.status(400).json({
          success: false,
          code: 'LIMIT_FILE_COUNT',
          message: 'Se ha excedido el número máximo de archivos permitidos'
        });
      
      case 'LIMIT_FIELD_KEY':
      case 'LIMIT_FIELD_VALUE':
      case 'LIMIT_FIELD_COUNT':
      case 'LIMIT_UNEXPECTED_FILE':
        return res.status(400).json({
          success: false,
          code: err.code,
          message: 'Error en el formato de los campos del formulario'
        });
      
      default:
        return res.status(400).json({
          success: false,
          code: err.code || 'UNKNOWN_MULTER_ERROR',
          message: `Error al procesar la carga de archivos: ${err.message}`
        });
    }
  }
  
  // Manejar errores personalizados lanzados en el fileFilter o el storage de multer
  if (err.name === 'MulterCustomError' || err.code === 'MULTER_CUSTOM_ERROR') {
    return res.status(415).json({
      success: false,
      code: err.code || 'CUSTOM_MULTER_ERROR',
      message: err.message || 'Error en la validación del archivo'
    });
  }

  // Si es un error de validación de tipo de archivo
  if (err.message && (
    err.message.includes('Tipo de archivo no permitido') || 
    err.message.includes('formato') || 
    err.message.includes('extensión')
  )) {
    return res.status(415).json({
      success: false,
      code: 'UNSUPPORTED_MEDIA_TYPE',
      message: err.message
    });
  }

  // Para errores no identificados específicamente
  next(err);
};

/**
 * Función que envuelve la llamada al middleware de multer y captura sus errores
 * @param {Function} multerMiddleware - Middleware de multer configurado (single, array, fields, etc)
 * @returns {Function} Middleware Express
 */
const handleMulterUpload = (multerMiddleware) => {
  return (req, res, next) => {
    multerMiddleware(req, res, (err) => {
      multerErrorHandler(err, req, res, next);
    });
  };
};

/**
 * Crea un filtro personalizado para validar tipos de archivos
 * @param {Array} allowedMimeTypes - Array de MIME types permitidos
 * @param {String} errorMessage - Mensaje de error personalizado
 * @returns {Function} Filtro para usar en la configuración de Multer
 */
const createFileFilter = (allowedMimeTypes, errorMessage = 'Tipo de archivo no permitido') => {
  return (req, file, cb) => {
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      const error = new Error(errorMessage);
      error.code = 'UNSUPPORTED_MEDIA_TYPE';
      error.name = 'MulterCustomError';
      cb(error, false);
    }
  };
};

module.exports = {
  multerErrorHandler,
  handleMulterUpload,
  createFileFilter
};