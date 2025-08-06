// File: routes/cambiosAdscripcionRoutes.js

const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const Roles = require('../enums/roles.enum');
const { verifyToken } = require('../middleware/auth');
const { hasRole } = require('../middleware/authorization');
const {
  registrarCambioConDocumentos,
  listarTodosLosCambios,
  listarCambiosPorTrabajador,
  eliminarCambioAdscripcion,
  descargarDocumentoCambio
} = require('../controllers/cambioAdscripcionController');

const multer = require('multer');
const upload = multer();
const { uploadComprobatorio, uploadNombramiento } = require('../config/multerCambiosAdscripcion');
const { uploadCambioAdscripcionFields } = require('../config/multerCambiosAdscripcion');

/**
 * @swagger
 * tags:
 *   - name: CambiosAdscripcion
 *     description: Gestión de cambios de adscripción
 */

/**
 * @swagger
 * /cambios-adscripcion:
 *   post:
 *     summary: Registrar un nuevo cambio de adscripción con documentos
 *     tags: [CambiosAdscripcion]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - id_trabajador
 *               - adscripcion_nueva
 *               - motivo
 *               - fecha_cambio
 *               - documento_comprobatorio
 *               - documento_nombramiento
 *             properties:
 *               id_trabajador:
 *                 type: integer
 *               adscripcion_nueva:
 *                 type: string
 *               motivo:
 *                 type: string
 *               fecha_cambio:
 *                 type: string
 *                 format: date
 *               documento_comprobatorio:
 *                 type: string
 *                 format: binary
 *               documento_nombramiento:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Cambio registrado exitosamente
 *       400:
 *         description: Error de validación o archivos faltantes
 *       500:
 *         description: Error interno del servidor
 */
router.post(
  '/',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  uploadCambioAdscripcionFields, // ESTE ES EL ÚNICO middleware de Multer necesario
  [
    body('id_trabajador').isInt().withMessage('ID del trabajador debe ser entero'),
    body('adscripcion_nueva').isString().notEmpty().withMessage('Adscripción nueva es requerida'),
    body('motivo').isString().notEmpty().withMessage('Motivo es requerido'),
    body('fecha_cambio').isISO8601().toDate().withMessage('Fecha de cambio inválida')
  ],
  registrarCambioConDocumentos
);


/**
 * @swagger
 * /cambios-adscripcion:
 *   get:
 *     summary: Obtener todos los cambios de adscripción
 *     tags: [CambiosAdscripcion]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de cambios obtenida exitosamente
 *       500:
 *         description: Error al obtener los datos
 */

router.get(
  '/',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  listarTodosLosCambios
);

/**
 * @swagger
 * /cambios-adscripcion/{id}:
 *   get:
 *     summary: Obtener cambios por trabajador
 *     tags: [CambiosAdscripcion]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del trabajador
 *     responses:
 *       200:
 *         description: Lista de cambios del trabajador
 *       403:
 *         description: Acceso no autorizado
 *       500:
 *         description: Error al obtener los datos
 */
router.get(
  '/:id',
  verifyToken,
  param('id').isInt().withMessage('ID debe ser entero').toInt(),
  listarCambiosPorTrabajador
);



/**
 * @swagger
 * /cambios-adscripcion/{id}:
 *   delete:
 *     summary: Eliminar un cambio de adscripción
 *     tags: [CambiosAdscripcion]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cambio a eliminar
 *     responses:
 *       200:
 *         description: Cambio eliminado correctamente
 *       500:
 *         description: Error al eliminar
 */
router.delete(
  '/:id',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  param('id').isInt().withMessage('ID debe ser entero').toInt(),
  eliminarCambioAdscripcion
);

/**
 * @swagger
 * /cambios-adscripcion/descargar/{tipo}/{id}:
 *   get:
 *     summary: Descargar documento de cambio de adscripción
 *     tags: [CambiosAdscripcion]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tipo
 *         required: true
 *         schema:
 *           type: string
 *           enum: [comprobatorio, nombramiento]
 *         description: Tipo de documento
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cambio de adscripción
 *     responses:
 *       200:
 *         description: Documento descargado correctamente
 *       403:
 *         description: Acceso no autorizado
 *       404:
 *         description: Documento no encontrado
 *       500:
 *         description: Error al descargar el documento
 */
router.get(
  '/descargar/:tipo/:id',
  verifyToken,
  param('tipo').isIn(['comprobatorio', 'nombramiento']),
  param('id').isInt().withMessage('ID debe ser entero').toInt(),
  descargarDocumentoCambio
);

module.exports = router;
