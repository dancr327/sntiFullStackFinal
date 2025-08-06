const express = require('express');
const router = express.Router();
const { param, body, query } = require('express-validator');
const {
  validarNuevoHijo,
  validarPatchHijo,
  validarDescarga,
  crearHijo,
  listarHijos,
  descargarActa,
  editarHijo,
  eliminarHijo
} = require('../controllers/hijosController');
const { uploadHijoActa } = require('../config/multerHijos');
const { verifyToken } = require('../middleware/auth');
const { hasRole } = require('../middleware/authorization');
const Roles = require('../enums/roles.enum');

/**
 * @swagger
 * tags:
 *   - name: Hijos
 *     description: Registro, consulta y gestión de hijos de trabajadores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     HijoInput:
 *       type: object
 *       required:
 *         - nombre
 *         - apellido_paterno
 *         - apellido_materno
 *         - fecha_nacimiento
 *       properties:
 *         nombre:
 *           type: string
 *           example: "Carlos"
 *         apellido_paterno:
 *           type: string
 *           example: "García"
 *         apellido_materno:
 *           type: string
 *           example: "López"
 *         fecha_nacimiento:
 *           type: string
 *           format: date
 *           example: "2015-07-15"
 *         vigente:
 *           type: boolean
 *           example: true
 *         acta:
 *           type: string
 *           format: binary
 *     HijoOutput:
 *       type: object
 *       properties:
 *         id_hijo: { type: integer }
 *         id_trabajador: { type: integer }
 *         nombre: { type: string }
 *         apellido_paterno: { type: string }
 *         apellido_materno: { type: string }
 *         fecha_nacimiento: { type: string, format: date }
 *         vigente: { type: boolean }
 *         acta_nacimiento_id: { type: integer }
 *         documentos:
 *           $ref: '#/components/schemas/Documento'
 *     Documento:
 *       type: object
 *       properties:
 *         id_documento: { type: integer }
 *         nombre_archivo: { type: string }
 *         tipo_documento: { type: string }
 *         ruta_almacenamiento: { type: string }
 *         fecha_subida: { type: string, format: date-time }
 *         tamano_bytes: { type: string }
 *         mimetype: { type: string }
 */

/**
 * @swagger
 * /hijos:
 *   post:
 *     summary: Registra un hijo y sube el acta de nacimiento (solo usuario)
 *     tags: [Hijos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/HijoInput'
 *     responses:
 *       201:
 *         description: Hijo registrado y acta subida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data: { $ref: '#/components/schemas/HijoOutput' }
 *       400: { description: Error de validación }
 *       401: { description: No autorizado }
 *       500: { description: Error interno }
 */
router.post(
  '/',
  verifyToken,
  hasRole([Roles.USUARIO]),
  uploadHijoActa.single('acta'),
  validarNuevoHijo,
  crearHijo
);

/**
 * @swagger
 * /hijos/mis-hijos:
 *   get:
 *     summary: Lista los hijos registrados por el usuario autenticado
 *     tags: [Hijos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Hijos obtenidos correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/HijoOutput'
 *       401: { description: No autorizado }
 *       500: { description: Error interno }
 */
router.get(
  '/mis-hijos',
  verifyToken,
  hasRole([Roles.USUARIO]),
  listarHijos
);

/**
 * @swagger
 * /hijos:
 *   get:
 *     summary: Lista los hijos de cualquier trabajador (solo admin, opcional query ?trabajador=ID)
 *     tags: [Hijos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: trabajador
 *         schema: { type: integer }
 *         required: false
 *         description: ID del trabajador a consultar
 *     responses:
 *       200:
 *         description: Hijos obtenidos correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/HijoOutput'
 *       401: { description: No autorizado }
 *       403: { description: Prohibido }
 *       500: { description: Error interno }
 */
router.get(
  '/',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  listarHijos
);

/**
 * @swagger
 * /hijos/{id}/descargar-acta:
 *   get:
 *     summary: Descarga el acta de nacimiento del hijo (usuario propio o admin)
 *     tags: [Hijos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID del hijo
 *     responses:
 *       200:
 *         description: Archivo de acta descargado exitosamente.
 *         content:
 *           application/pdf: {}
 *           application/msword: {}
 *           application/vnd.openxmlformats-officedocument.wordprocessingml.document: {}
 *       401: { description: No autorizado }
 *       403: { description: Prohibido }
 *       404: { description: Documento no encontrado }
 *       500: { description: Error interno }
 */
router.get(
  '/:id/descargar-acta',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR, Roles.USUARIO]),
  validarDescarga,
  descargarActa
);

/**
 * @swagger
 * /hijos/{id}:
 *   patch:
 *     summary: Edita datos del hijo y/o sube acta si aún no existe (solo usuario)
 *     tags: [Hijos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID del hijo
 *     requestBody:
 *       required: false
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/HijoInput'
 *     responses:
 *       200:
 *         description: Datos del hijo actualizados correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data: { $ref: '#/components/schemas/HijoOutput' }
 *       400: { description: Error de validación }
 *       401: { description: No autorizado }
 *       404: { description: Hijo no encontrado }
 *       409: { description: Ya existe acta para este hijo }
 *       500: { description: Error interno }
 */
router.patch(
  '/:id',
  verifyToken,
  hasRole([Roles.USUARIO]),
  uploadHijoActa.single('acta'),
  validarPatchHijo,
  editarHijo
);

/**
 * @swagger
 * /hijos/{id}:
 *   delete:
 *     summary: Elimina hijo y acta asociada (solo usuario)
 *     tags: [Hijos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID del hijo
 *     responses:
 *       200:
 *         description: Hijo y acta eliminados correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *       401: { description: No autorizado }
 *       404: { description: Hijo no encontrado }
 *       500: { description: Error interno }
 */
router.delete(
  '/:id',
  verifyToken,
  hasRole([Roles.USUARIO]),
  param('id').isInt().withMessage('ID debe ser entero').toInt(),
  eliminarHijo
);

module.exports = router;
