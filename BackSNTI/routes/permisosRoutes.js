const express = require('express');
const router = express.Router();
const { param, body } = require('express-validator');
const {
  validarPermiso,
  validarPatchPermiso,
  crearPermiso,
  listarPermisos,
  descargarAprobacion,
  actualizarPermiso,
  eliminarPermiso
} = require('../controllers/permisosController');
const { uploadPermisoAprobacion } = require('../config/multerPermisos');
const { verifyToken } = require('../middleware/auth');
const { hasRole } = require('../middleware/authorization');
const Roles = require('../enums/roles.enum');
const EstatusPermiso = require('../enums/estatusPermiso.enum');

/**
 * @swagger
 * tags:
 *   - name: Permisos
 *     description: Registro y gestión de permisos de trabajador
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PermisoInput:
 *       type: object
 *       required:
 *         - id_trabajador
 *         - tipo_permiso
 *         - fecha_inicio
 *         - fecha_fin
 *         - motivo
 *       properties:
 *         id_trabajador:
 *           type: integer
 *           example: 3
 *         tipo_permiso:
 *           type: string
 *           example: "Vacaciones"
 *         fecha_inicio:
 *           type: string
 *           format: date
 *           example: "2025-07-01"
 *         fecha_fin:
 *           type: string
 *           format: date
 *           example: "2025-07-10"
 *         motivo:
 *           type: string
 *           example: "Viaje familiar"
 *         estatus:
 *           type: string
 *           enum: [Pendiente, Aprobado, Denegado, NoSolicitado]
 *           example: "Pendiente"
 *         aprobacion:
 *           type: string
 *           format: binary
 *     PermisoOutput:
 *       type: object
 *       properties:
 *         id_permiso: { type: integer }
 *         id_trabajador: { type: integer }
 *         tipo_permiso: { type: string }
 *         fecha_inicio: { type: string, format: date }
 *         fecha_fin: { type: string, format: date }
 *         motivo: { type: string }
 *         estatus: { type: string }
 *         fecha_registro: { type: string, format: date-time }
 *         documento_aprobacion_id: { type: integer }
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
 * /permisos:
 *   post:
 *     summary: Crea un permiso para trabajador y sube documento de aprobación (ADMIN)
 *     tags: [Permisos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/PermisoInput'
 *     responses:
 *       201:
 *         description: Permiso registrado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data: { $ref: '#/components/schemas/PermisoOutput' }
 *       400: { description: Error de validación }
 *       401: { description: No autorizado }
 *       500: { description: Error interno }
 */
router.post(
  '/',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  uploadPermisoAprobacion.single('aprobacion'),
  validarPermiso,
  crearPermiso
);

/**
 * @swagger
 * /permisos:
 *   get:
 *     summary: "Lista los permisos (ADMIN: todos, USUARIO: solo propios)"
 *     tags: [Permisos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: trabajador
 *         schema: { type: integer }
 *         required: false
 *         description: ID del trabajador (opcional, solo admin)
 *     responses:
 *       200:
 *         description: Permisos obtenidos correctamente.
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
 *                     $ref: '#/components/schemas/PermisoOutput'
 *       401: { description: No autorizado }
 *       500: { description: Error interno }
 */
router.get(
  '/',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR, Roles.USUARIO]),
  listarPermisos
);

/**
 * @swagger
 * /permisos/{id}/descargar-aprobacion:
 *   get:
 *     summary: Descarga el documento de aprobación del permiso (usuario propio o admin)
 *     tags: [Permisos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID del permiso
 *     responses:
 *       200:
 *         description: Archivo de aprobación descargado exitosamente.
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
  '/:id/descargar-aprobacion',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR, Roles.USUARIO]),
  param('id').isInt().withMessage('ID debe ser entero').toInt(),
  descargarAprobacion
);

/**
 * @swagger
 * /permisos/{id}:
 *   patch:
 *     summary: Actualiza un permiso, estatus y/o documento (ADMIN)
 *     tags: [Permisos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID del permiso
 *     requestBody:
 *       required: false
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               tipo_permiso: { type: string }
 *               fecha_inicio: { type: string, format: date }
 *               fecha_fin: { type: string, format: date }
 *               motivo: { type: string }
 *               estatus:
 *                 type: string
 *                 enum: [Pendiente, Aprobado, Denegado, NoSolicitado]
 *               aprobacion:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Permiso actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data: { $ref: '#/components/schemas/PermisoOutput' }
 *       400: { description: Error de validación }
 *       401: { description: No autorizado }
 *       404: { description: Permiso no encontrado }
 *       500: { description: Error interno }
 */
router.patch(
  '/:id',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  uploadPermisoAprobacion.single('aprobacion'),
  validarPatchPermiso,
  actualizarPermiso
);

/**
 * @swagger
 * /permisos/{id}:
 *   delete:
 *     summary: Elimina permiso y documento asociado (ADMIN)
 *     tags: [Permisos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID del permiso
 *     responses:
 *       200:
 *         description: Permiso y documento eliminados correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *       401: { description: No autorizado }
 *       404: { description: Permiso no encontrado }
 *       500: { description: Error interno }
 */
router.delete(
  '/:id',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  param('id').isInt().withMessage('ID debe ser entero').toInt(),
  eliminarPermiso
);

module.exports = router;