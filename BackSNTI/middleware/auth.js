// middleware/auth.js
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];
  
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Acceso no autorizado. Formato de token inválido'
    });
  }

  const token = authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Acceso no autorizado. Token requerido'
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      const message = err.name === 'TokenExpiredError' 
        ? 'Token expirado' 
        : 'Token inválido';
      
      return res.status(401).json({
        success: false,
        message: `Error de autenticación: ${message}`
      });
    }
    
    req.user = decoded;
    next();
  });
};


module.exports = { 
  verifyToken, 
 
};