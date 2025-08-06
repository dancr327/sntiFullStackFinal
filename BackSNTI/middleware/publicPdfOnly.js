// middleware/publicPdfOnly.js

/**
 * Middleware para asegurar que solo se suban archivos PDF.
 * Este middleware es opcional si ya usas createFileFilter en multer.
 */
module.exports = function publicPdfOnly(req, res, next) {
  const file = req.file || (req.files && req.files[0]);

  if (!file) {
    return res.status(400).json({
      success: false,
      message: 'No se ha proporcionado ningún archivo.'
    });
  }

  if (file.mimetype !== 'application/pdf') {
    return res.status(400).json({
      success: false,
      message: 'Solo se permiten archivos PDF.'
    });
  }

  next();
};
