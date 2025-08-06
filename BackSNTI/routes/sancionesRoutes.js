// routes/sancionesRoutes.js
const express = require("express");
const router = express.Router();
const { param } = require("express-validator");
const {
    validarSancion,
    crearSancion,
    listarSanciones,
    obtenerSancionesPorTrabajador,
    miSancion
} = require("../controllers/sancionesController");
const { verifyToken } = require("../middleware/auth");
const { hasRole } = require("../middleware/authorization");
const Roles = require('../enums/roles.enum');

/**
 * @swagger
 * tags:
 * - name: Sanciones
 *   description: Endpoints para administrar sanciones aplicadas a trabajadores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SancionInput:
 *       type: object
 *       required:
 *         - id_trabajador
 *         - tipo_sancion
 *         - descripcion
 *         - fecha_aplicacion
 *       properties:
 *         id_trabajador:
 *           type: integer
 *           example: 1
 *         tipo_sancion:
 *           type: string
 *           maxLength: 50
 *           example: "Amonestación Escrita"
 *         descripcion:
 *           type: string
 *           example: "Retraso injustificado en la entrega de proyecto clave."
 *         fecha_aplicacion:
 *           type: string
 *           format: date
 *           example: "2024-05-29"
 *         fecha_fin:
 *           type: string
 *           format: date
 *           nullable: true
 *           example: "2024-06-15"
 *         estatus:
 *           type: string
 *           maxLength: 20
 *           nullable: true
 *           example: "Activa"
 * 
 *     SancionOutput:
 *       type: object
 *       properties:
 *         id_sancion:
 *           type: integer
 *           readOnly: true
 *           example: 1
 *         id_trabajador:
 *           type: integer
 *           example: 1
 *         tipo_sancion:
 *           type: string
 *           example: "Amonestación Escrita"
 *         descripcion:
 *           type: string
 *           example: "Retraso injustificado en la entrega de proyecto clave."
 *         fecha_aplicacion:
 *           type: string
 *           format: date
 *           example: "2024-05-29"
 *         fecha_fin:
 *           type: string
 *           format: date
 *           nullable: true
 *           example: "2024-06-15"
 *         estatus:
 *           type: string
 *           nullable: true
 *           example: "Activa"
 *         usuario_registro:
 *           type: string
 *           readOnly: true
 *           example: "admin@tuempresa.com"
 *         fecha_registro:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *         trabajadores:
 *           type: object
 *           properties:
 *             nombre: 
 *               type: string
 *               example: "Juan"
 *             apellido_paterno: 
 *               type: string
 *               example: "Pérez"
 *             apellido_materno: 
 *               type: string
 *               example: "Gómez"
 *             identificador: 
 *               type: string
 *               example: "juan.perez"
 * 
 *   responses:
 *     400ValidationError:
 *       description: Error de validación
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               success: 
 *                 type: boolean
 *                 example: false
 *               message: 
 *                 type: string
 *                 example: "Error de validación"
 *               errors:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     msg: 
 *                       type: string
 *                     param: 
 *                       type: string
 *                     location: 
 *                       type: string
 *     401UnauthorizedError:
 *       description: No autorizado
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               success: 
 *                 type: boolean
 *                 example: false
 *               message: 
 *                 type: string
 *                 example: "Acceso no autorizado"
 *     403ForbiddenError:
 *       description: Prohibido
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               success: 
 *                 type: boolean
 *                 example: false
 *               message: 
 *                 type: string
 *                 example: "Acceso denegado"
 *     404NotFoundError:
 *       description: No encontrado
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               success: 
 *                 type: boolean
 *                 example: false
 *               message: 
 *                 type: string
 *                 example: "Recurso no encontrado"
 *     500ServerError:
 *       description: Error del servidor
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               success: 
 *                 type: boolean
 *                 example: false
 *               message: 
 *                 type: string
 *                 example: "Error interno"
 *               error: 
 *                 type: string
 */

// --- Rutas para Sanciones ---

/**
 * @swagger
 * /sanciones:
 *   post:
 *     summary: Crea una nueva sanción
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Sanciones]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SancionInput'
 *     responses:
 *       201:
 *         description: Sanción creada
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
 *                 data:
 *                   $ref: '#/components/schemas/SancionOutput'
 *       400:
 *         $ref: '#/components/responses/400ValidationError'
 *       401:
 *         $ref: '#/components/responses/401UnauthorizedError'
 *       403:
 *         $ref: '#/components/responses/403ForbiddenError'
 *       404:
 *         $ref: '#/components/responses/404NotFoundError'
 *       500:
 *         $ref: '#/components/responses/500ServerError'
 */
router.post(
    "/",
    verifyToken,
    hasRole([Roles.ADMINISTRADOR]),
    validarSancion,
    crearSancion
);

/**
 * @swagger
 * /sanciones:
 *   get:
 *     summary: Lista todas las sanciones
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Sanciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de sanciones
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
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/SancionOutput'
 *       401:
 *         $ref: '#/components/responses/401UnauthorizedError'
 *       403:
 *         $ref: '#/components/responses/403ForbiddenError'
 *       500:
 *         $ref: '#/components/responses/500ServerError'
 */
router.get(
    "/",
    verifyToken,
    hasRole([Roles.ADMINISTRADOR]),
    listarSanciones
);

/**
 * @swagger
 * /sanciones/trabajador/{idTrabajador}:
 *   get:
 *     summary: Obtiene sanciones por trabajador
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Sanciones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: idTrabajador
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del trabajador
 *     responses:
 *       200:
 *         description: Sanciones del trabajador
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
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/SancionOutput'
 *       400:
 *         $ref: '#/components/responses/400ValidationError'
 *       401:
 *         $ref: '#/components/responses/401UnauthorizedError'
 *       403:
 *         $ref: '#/components/responses/403ForbiddenError'
 *       404:
 *         $ref: '#/components/responses/404NotFoundError'
 *       500:
 *         $ref: '#/components/responses/500ServerError'
 */
router.get(
    "/trabajador/:idTrabajador",
    verifyToken,
    hasRole([Roles.ADMINISTRADOR]),
    [
        param('idTrabajador')
            .isInt().withMessage('ID debe ser entero')
            .toInt()
    ],
    obtenerSancionesPorTrabajador
);

/**
 * @swagger
 * /sanciones/mi-sancion:
 *   get:
 *     summary: Obtiene mis sanciones
 *     description: Accesible para ADMINISTRADORES y USUARIOS
 *     tags: [Sanciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sanciones del usuario autenticado
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
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/SancionOutput'
 *       401:
 *         $ref: '#/components/responses/401UnauthorizedError'
 *       500:
 *         $ref: '#/components/responses/500ServerError'
 */
router.get(
    "/mi-sancion",
    verifyToken,
    hasRole([Roles.ADMINISTRADOR, Roles.USUARIO]),
    miSancion
);

module.exports = router;