// routes/seccionRoutes.js
const express = require('express');
const router = express.Router();
const { param } = require('express-validator');
const { verifyToken } = require('../middleware/auth');
const { hasRole } = require('../middleware/authorization');
const Roles = require('../enums/roles.enum');
const seccionController = require('../controllers/seccionController');


/**
 * @swagger
 * tags:
 * - name: Secciones
 *   description: Gestión de secciones sindicales
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     EstadosMexico:
 *       type: string
 *       enum:
 *         - AGUASCALIENTES
 *         - BAJA_CALIFORNIA
 *         - BAJA_CALIFORNIA_SUR
 *         - CAMPECHE
 *         - CHIAPAS
 *         - CHIHUAHUA
 *         - CIUDAD_DE_MEXICO
 *         - COAHUILA
 *         - COLIMA
 *         - DURANGO
 *         - ESTADO_DE_MEXICO
 *         - GUANAJUATO
 *         - GUERRERO
 *         - HIDALGO
 *         - JALISCO
 *         - MICHOACAN
 *         - MORELOS
 *         - NAYARIT
 *         - NUEVO_LEON
 *         - OAXACA
 *         - PUEBLA
 *         - QUERETARO
 *         - QUINTANA_ROO
 *         - SAN_LUIS_POTOSI
 *         - SINALOA
 *         - SONORA
 *         - TABASCO
 *         - TAMAULIPAS
 *         - TLAXCALA
 *         - VERACRUZ
 *         - YUCATAN
 *         - ZACATECAS
 * 
 *     Seccion:
 *       type: object
 *       properties:
 *         id_seccion:
 *           type: integer
 *           readOnly: true
 *           example: 1
 *         numero_seccion:
 *           type: integer
 *           example: 1
 *         estado:
 *           $ref: '#/components/schemas/EstadosMexico'
 *           example: CIUDAD_DE_MEXICO
 *         ubicacion:
 *           type: string
 *           example: "Oficina Central, Calle Siempre Viva #123"
 *         secretario:
 *           type: string
 *           nullable: true
 *           example: "Juan Pérez"
 *         numero_trabajadores:
 *           type: integer
 *           readOnly: true
 *           example: 50
 * 
 *     SeccionInput:
 *       type: object
 *       required:
 *         - numero_seccion
 *         - estado
 *         - ubicacion
 *       properties:
 *         numero_seccion:
 *           type: integer
 *           example: 45
 *         estado:
 *           $ref: '#/components/schemas/EstadosMexico'
 *           example: JALISCO
 *         ubicacion:
 *           type: string
 *           example: "Guadalajara, Calle Falsa #123"
 *         secretario:
 *           type: string
 *           nullable: true
 *           example: "Luis Mendoza"
 * 
 *     SeccionUpdate:
 *       type: object
 *       properties:
 *         numero_seccion:
 *           type: integer
 *           example: 46
 *         estado:
 *           $ref: '#/components/schemas/EstadosMexico'
 *           example: NAYARIT
 *         ubicacion:
 *           type: string
 *           example: "Tepic, Avenida Siempre Viva #456"
 *         secretario:
 *           type: string
 *           nullable: true
 *           example: "Carlos Álvarez"
 */
// --- Rutas para Secciones ---

/**
 * @swagger
 * /secciones:
 *   post:
 *     summary: Crea una nueva sección
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Secciones]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SeccionInput'
 *     responses:
 *       201:
 *         description: Sección creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Seccion'
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Prohibido
 *       409:
 *         description: Conflicto
 *       500:
 *         description: Error del servidor
 */
router.post(
  '/',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  seccionController.validarCreacionSeccion,
  seccionController.createSeccion
);

/**
 * @swagger
 * /secciones:
 *   get:
 *     summary: Obtiene todas las secciones
 *     description: Accesible para ADMINISTRADORES y USUARIOS
 *     tags: [Secciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de secciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Seccion'
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Prohibido
 *       500:
 *         description: Error del servidor
 */
router.get(
  '/',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR, Roles.USUARIO]),
  seccionController.getAllSecciones
);

/**
 * @swagger
 * /secciones/{id}:
 *   get:
 *     summary: Obtiene sección por ID
 *     description: Accesible para ADMINISTRADORES y USUARIOS
 *     tags: [Secciones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la sección
 *     responses:
 *       200:
 *         description: Sección obtenida
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Seccion'
 *       400:
 *         description: ID inválido
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Prohibido
 *       404:
 *         description: No encontrada
 *       500:
 *         description: Error del servidor
 */
router.get(
  '/:id',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR, Roles.USUARIO]),
  [
    param('id')
      .isInt().withMessage('ID debe ser entero')
      .toInt()
  ],
  seccionController.getSeccionById
);


/**
 * @swagger
 * /secciones/{id}:
 *   patch:
 *     summary: Actualiza sección por ID
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Secciones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la sección
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SeccionUpdate'
 *     responses:
 *       200:
 *         description: Sección actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Seccion'
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Prohibido
 *       404:
 *         description: No encontrada
 *       409:
 *         description: Conflicto
 *       500:
 *         description: Error del servidor
 */
router.patch(
  '/:id',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  [
    param('id')
      .isInt().withMessage('ID debe ser entero')
      .toInt()
  ],
  seccionController.validarSeccion,
  seccionController.updateSeccion
);

/**
 * @swagger
 * /secciones/{id}:
 *   delete:
 *     summary: Elimina sección por ID
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Secciones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la sección
 *     responses:
 *       200:
 *         description: Sección eliminada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *       400:
 *         description: ID inválido o restricciones
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Prohibido
 *       404:
 *         description: No encontrada
 *       500:
 *         description: Error del servidor
 */
router.delete(
  '/:id',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  [
    param('id')
      .isInt().withMessage('ID debe ser entero')
      .toInt()
  ],
  seccionController.deleteSeccion
);

module.exports = router;