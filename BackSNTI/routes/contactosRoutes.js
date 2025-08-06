// routes/contactosRoutes.js
const express = require('express');
const router = express.Router();
const { param } = require('express-validator');
const {
    getAllContactos,
    getContactoById,
    createContacto,
    updateContacto,
    deleteContacto
} = require('../controllers/contactosController');
const { verifyToken } = require('../middleware/auth');
const { hasRole } = require('../middleware/authorization');

const Roles = require('../enums/roles.enum');


// Congelar el objeto para evitar modificaciones
Object.freeze(Roles);

/**
 * @swagger
 * tags:
 * - name: Contactos
 *   description: Gestión de contactos institucionales
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Contacto:
 *       type: object
 *       properties:
 *         id_contacto:
 *           type: integer
 *           readOnly: true
 *           example: 1
 *         ocupacion:
 *           type: string
 *           example: "Desarrollador"
 *         nombre:
 *           type: string
 *           example: "Juan Pérez"
 *         correo:
 *           type: string
 *           example: "juan.perez@example.com"
 * 
 *     ContactoInput:
 *       type: object
 *       required:
 *         - ocupacion
 *         - nombre
 *         - correo
 *       properties:
 *         ocupacion:
 *           type: string
 *           example: "Diseñador Gráfico"
 *         nombre:
 *           type: string
 *           example: "María López"
 *         correo:
 *           type: string
 *           example: "maria.lopez@example.com"
 * 
 *     ContactoUpdate:
 *       type: object
 *       properties:
 *         ocupacion:
 *           type: string
 *           example: "Diseñador UI/UX"
 *         nombre:
 *           type: string
 *           example: "María Guadalupe López"
 *         correo:
 *           type: string
 *           example: "maria.guadalupe@example.com"
 * 
 *   responses:
 *     400Error:
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
 *     401Error:
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
 *     403Error:
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
 *     404Error:
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
 *     500Error:
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
 */

// --- Rutas para Contactos ---

/**
 * @swagger
 * /api/contactos:
 *   get:
 *     summary: Listar todos los contactos
 *     description: Acceso público
 *     tags: [Contactos]
 *     responses:
 *       200:
 *         description: Lista de contactos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Contacto'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.get('/', getAllContactos);

/**
 * @swagger
 * /api/contactos/{id}:
 *   get:
 *     summary: Obtener contacto por ID
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Contactos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del contacto
 *     responses:
 *       200:
 *         description: Contacto obtenido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Contacto'
 *       400:
 *         $ref: '#/components/responses/400Error'
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       403:
 *         $ref: '#/components/responses/403Error'
 *       404:
 *         $ref: '#/components/responses/404Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.get('/:id', verifyToken, hasRole([Roles.ADMINISTRADOR]), getContactoById);


/**
 * @swagger
 * /api/contactos:
 *   post:
 *     summary: Crear nuevo contacto
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Contactos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContactoInput'
 *     responses:
 *       201:
 *         description: Contacto creado
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
 *                   $ref: '#/components/schemas/Contacto'
 *       400:
 *         $ref: '#/components/responses/400Error'
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       403:
 *         $ref: '#/components/responses/403Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.post('/', verifyToken, hasRole([Roles.ADMINISTRADOR]), createContacto);


/**
 * @swagger
 * /api/contactos/{id}:
 *   patch:
 *     summary: Actualizar contacto existente
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Contactos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del contacto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContactoUpdate'
 *     responses:
 *       200:
 *         description: Contacto actualizado
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
 *                   $ref: '#/components/schemas/Contacto'
 *       400:
 *         $ref: '#/components/responses/400Error'
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       403:
 *         $ref: '#/components/responses/403Error'
 *       404:
 *         $ref: '#/components/responses/404Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.patch('/:id', verifyToken, hasRole([Roles.ADMINISTRADOR]), updateContacto);

/**
 * @swagger
 * /api/contactos/{id}:
 *   delete:
 *     summary: Eliminar contacto
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Contactos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del contacto
 *     responses:
 *       200:
 *         description: Contacto eliminado
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
 *         $ref: '#/components/responses/400Error'
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       403:
 *         $ref: '#/components/responses/403Error'
 *       404:
 *         $ref: '#/components/responses/404Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.delete('/:id', verifyToken, hasRole([Roles.ADMINISTRADOR]), deleteContacto);


module.exports = router;