// middleware/index.js
const auth = require('./auth');
const authorization = require('./authorization');
const errorHandler = require('./error-handler');
const multerHandler = require('./multer-error-handler');

module.exports = {
  authMiddleware: auth,
  verifyToken: auth.verifyToken,
  authorizationMiddleware: authorization,
  errorHandler,
 multerHandler,
   handleMulterUpload: multerHandler.handleMulterUpload // <-- AÑADE ESTO

};