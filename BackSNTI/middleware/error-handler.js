// middleware/error-handler.js
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime/library');

const errorHandler = (err, req, res, next) => {
  console.error('[Error Handler]', err.stack);

  // Errores conocidos
  if (err instanceof PrismaClientKnownRequestError) {
    return handlePrismaError(err, res);
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Error de validación de datos',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }

  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    return res.status(401).json({
      success: false,
      message: 'Error de autenticación',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }

  // Error genérico
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

const handlePrismaError = (err, res) => {
  switch (err.code) {
    case 'P2002':
      return res.status(409).json({
        success: false,
        message: 'Conflicto de datos único',
        field: err.meta?.target?.[0]
      });
    case 'P2025':
      return res.status(404).json({
        success: false,
        message: 'Recurso no encontrado'
      });
    default:
      return res.status(400).json({
        success: false,
        message: 'Error de base de datos',
        code: err.code
      });
  }
};

module.exports = errorHandler;