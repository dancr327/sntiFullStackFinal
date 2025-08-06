// routes/index.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const Roles = require('../enums/roles.enum'); // Agrega esto arriba

const { authMiddleware, authorizationMiddleware } = require('../middleware');

// Importa los enrutadores de las diferentes rutas
const trabajadorRoutes = require('./trabajadorRoutes');
const authRoutes = require('./authRoutes'); // Este enrutador ya maneja sus propios middlewares internos (login, test-token)
const seccionRoutes = require('./seccionRoutes');
const documentosPanelRoutes = require('./documentosPanelRoutes');
const hijosRoutes = require('./hijosRoutes');
const permisosRoutes = require('./permisosRoutes'); 
const sancionesRoutes = require('./sancionesRoutes'); 
const contactosRoutes = require('./contactosRoutes'); 
const galeriaRoutes = require('./galeriaRoutes'); // Asegúrate de que este enrutador esté correctamente definido
const cursosRoutes = require('./cursosRoutes'); // Asegúrate de que este enrutador esté correctamente definido
const trabajadoresCursosRoutes = require('./trabajadoresCursosRoutes'); // Asegúrate de que este enrutador esté correctamente definido
const documentosPublicosRoutes = require('./documentosPublicosRoutes'); // Asegúrate de que este enrutador esté correctamente definido
const cambioAdscripcionRoutes = require('./cambioAdscripcionRoutes'); // Asegúrate de que este enrutador esté correctamente definido
// Rutas que requieren autenticación por defecto (aplican verifyToken y hasRole)
// Nota: El middleware hasRole, si no se le pasan roles, debe manejarlo internamente
// o deberías pasarle un array vacío/un rol por defecto si es una ruta general
// o solo aplicarlo cuando sea necesario un rol específico.
// Si quieres un hasRole general aquí, necesitarás ajustar el middleware para que no falle sin roles.

router.use('/trabajadores', authMiddleware.verifyToken, authorizationMiddleware.hasRole([Roles.USUARIO, Roles.ADMINISTRADOR]), trabajadorRoutes);
router.use('/secciones', authMiddleware.verifyToken, authorizationMiddleware.hasRole([Roles.ADMINISTRADOR]), seccionRoutes);
router.use('/documentos', authMiddleware.verifyToken, authorizationMiddleware.hasRole([Roles.USUARIO, Roles.ADMINISTRADOR]), documentosPanelRoutes);
router.use('/permisos', authMiddleware.verifyToken, authorizationMiddleware.hasRole([Roles.USUARIO, Roles.ADMINISTRADOR]), permisosRoutes);
router.use('/sanciones', authMiddleware.verifyToken, authorizationMiddleware.hasRole([Roles.USUARIO, Roles.ADMINISTRADOR]), sancionesRoutes);
router.use('/contactos', authMiddleware.verifyToken, authorizationMiddleware.hasRole([Roles.ADMINISTRADOR]), contactosRoutes);

router.use ('/galeria', authMiddleware.verifyToken, authorizationMiddleware.hasRole([Roles.USUARIO, Roles.ADMINISTRADOR]),galeriaRoutes);
router.use('/hijos', authMiddleware.verifyToken, authorizationMiddleware.hasRole([Roles.USUARIO, Roles.ADMINISTRADOR]), hijosRoutes);
router.use('/cursos', authMiddleware.verifyToken, authorizationMiddleware.hasRole([Roles.USUARIO, Roles.ADMINISTRADOR]), cursosRoutes);
router.use('/trabajadoresCursos', authMiddleware.verifyToken, authorizationMiddleware.hasRole([Roles.USUARIO, Roles.ADMINISTRADOR]), trabajadoresCursosRoutes);
router.use('/cambioAdscripcionRoutes', authMiddleware.verifyToken, authorizationMiddleware.hasRole([Roles.USUARIO, Roles.ADMINISTRADOR]), cambioAdscripcionRoutes);


// Las rutas de autenticación (login, test-token, etc.) NO llevan authMiddleware.verifyToken globalmente aquí.
// Si alguna ruta dentro de authRoutes (como /auth/verify o /auth/logout) necesita token,
// ESE middleware debe estar definido DENTRO de authRoutes.js para esa ruta específica.


router.use('/documentos-publicos', documentosPublicosRoutes); // Esta ruta no requiere autenticación, así que no lleva middleware de token
router.use('/auth', authRoutes); // ¡Sin middleware de token aquí!




module.exports = router;