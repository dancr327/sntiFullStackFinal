const express = require('express');
const router = express.Router();
const { param, body } = require('express-validator');
const {
  validarCurso,
  crearCurso,
  getAllCursos,
  getCursoById,
  actualizarCurso,
  eliminarCurso,
  eliminarCursoConPassword
} = require('../controllers/cursosController');
const { uploadCursoConstancia } = require('../config/multerCursos');
const { verifyToken } = require('../middleware/auth');
const { hasRole } = require('../middleware/authorization');
const Roles = require('../enums/roles.enum');
const CursoStatus = require('../enums/cursoStatus.enum');
const TipoDocumento = require('../enums/tipodocumento.enum');

/**
 * @swagger
 * tags:
 *   - name: Cursos
 *     description: Gestión de cursos y su constancia general
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CursoInput:
 *       type: object
 *       required:
 *         - codigo_curso
 *         - nombre_curso
 *         - horas_duracion
 *       properties:
 *         codigo_curso:
 *           type: string
 *           example: "CURSO123"
 *         nombre_curso:
 *           type: string
 *           example: "Curso de Actualización"
 *         horas_duracion:
 *           type: integer
 *           example: 40
 *         estatus:
 *           type: string
 *           enum: [EnCurso, Finalizado, Cancelado, Suspendido]
 *           example: "EnCurso"
 *         tipo_documento_curso:
 *           type: string
 *           enum:
 *             - CONSTANCIA_NOMBRAMIENTO
 *             - CONSTANCIA_RECONOCIMIENTO
 *           example: "CONSTANCIA_NOMBRAMIENTO"
 *     CursoOutput:
 *       type: object
 *       properties:
 *         id_curso:
 *           type: integer
 *           example: 10
 *         codigo_curso:
 *           type: string
 *         nombre_curso:
 *           type: string
 *         horas_duracion:
 *           type: integer
 *         estatus:
 *           type: string
 *         documento_constancia_id:
 *           type: integer
 *         tipo_documento_curso:
 *           type: string
 *         documentoConstancia:
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
 *   responses:
 *     400Error:
 *       description: Error de validación
 *     401Error:
 *       description: No autorizado
 *     403Error:
 *       description: Prohibido
 *     404Error:
 *       description: No encontrado
 *     500Error:
 *       description: Error interno
 */

/**
 * @swagger
 * /cursos:
 *   post:
 *     summary: Crea un nuevo curso con su constancia general (ADMIN)
 *     tags: [Cursos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - codigo_curso
 *               - nombre_curso
 *               - horas_duracion
 *               - documento_constancia
 *             properties:
 *               codigo_curso:
 *                 type: string
 *               nombre_curso:
 *                 type: string
 *               horas_duracion:
 *                 type: integer
 *               estatus:
 *                 type: string
 *                 enum: [EnCurso, Finalizado, Cancelado, Suspendido]
 *               tipo_documento_curso:
 *                 type: string
 *                 enum:
 *                   - CONSTANCIA_NOMBRAMIENTO
 *                   - CONSTANCIA_RECONOCIMIENTO
 *               documento_constancia:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Curso creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/CursoOutput'
 *       400:
 *         $ref: '#/components/responses/400Error'
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       403:
 *         $ref: '#/components/responses/403Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.post(
  '/',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  uploadCursoConstancia.single('documento_constancia'),
  validarCurso,
  crearCurso
);

/**
 * @swagger
 * /cursos:
 *   get:
 *     summary: Lista todos los cursos disponibles (ADMIN, USUARIO)
 *     tags: [Cursos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Cursos listados correctamente.
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
 *                     $ref: '#/components/schemas/CursoOutput'
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.get(
  '/',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR, Roles.USUARIO]),
  getAllCursos
);

/**
 * @swagger
 * /cursos/{id}:
 *   get:
 *     summary: Obtiene el detalle de un curso por id (ADMIN, USUARIO)
 *     tags: [Cursos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID del curso
 *     responses:
 *       200:
 *         description: Curso obtenido correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/CursoOutput'
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       404:
 *         $ref: '#/components/responses/404Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.get(
  '/:id',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR, Roles.USUARIO]),
  [param('id').isInt().withMessage('ID debe ser entero').toInt()],
  getCursoById
);

/**
 * @swagger
 * /cursos/{id}:
 *   patch:
 *     summary: Actualiza información o constancia de un curso (ADMIN)
 *     tags: [Cursos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID del curso
 *     requestBody:
 *       required: false
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               codigo_curso:
 *                 type: string
 *               nombre_curso:
 *                 type: string
 *               horas_duracion:
 *                 type: integer
 *               estatus:
 *                 type: string
 *                 enum: [EnCurso, Finalizado, Cancelado, Suspendido]
 *               tipo_documento_curso:
 *                 type: string
 *                 enum:
 *                   - CONSTANCIA_NOMBRAMIENTO
 *                   - CONSTANCIA_RECONOCIMIENTO
 *               documento_constancia:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Curso actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/CursoOutput'
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
router.patch(
  '/:id',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  uploadCursoConstancia.single('documento_constancia'),
  validarCurso,
  actualizarCurso
);

/**
 * @swagger
 * /cursos/{id}:
 *   delete:
 *     summary: Elimina un curso y su constancia (ADMIN)
 *     tags: [Cursos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID del curso
 *     responses:
 *       200:
 *         description: Curso y constancia eliminados correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       403:
 *         $ref: '#/components/responses/403Error'
 *       404:
 *         $ref: '#/components/responses/404Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.delete(
  '/:id',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  [param('id').isInt().withMessage('ID debe ser entero').toInt()],
  eliminarCurso
);

// Eliminación de curso solicitando contraseña del administrador
router.delete(
  '/:id/con-password',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  [param('id').isInt().withMessage('ID debe ser entero').toInt(), body('password').isString()],
  eliminarCursoConPassword
);

/**
 * @swagger
 * /cursos/{id}/descargar-constancia:
 *   get:
 *     summary: Descarga la constancia general del curso (ADMIN, USUARIO)
 *     tags: [Cursos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID del curso
 *     responses:
 *       200:
 *         description: Archivo de constancia descargado exitosamente.
 *         content:
 *           application/pdf: {}
 *           application/msword: {}
 *           application/vnd.openxmlformats-officedocument.wordprocessingml.document: {}
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       404:
 *         $ref: '#/components/responses/404Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.get(
  '/:id/descargar-constancia',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR, Roles.USUARIO]),
  [param('id').isInt().withMessage('ID debe ser entero').toInt()],
  require('../controllers/cursosController').descargarConstanciaCurso
);

module.exports = router;