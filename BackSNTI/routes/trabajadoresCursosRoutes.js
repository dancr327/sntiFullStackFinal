const express = require('express');
const router = express.Router();
const { param, body } = require('express-validator');
const {
  validarInscripcion,
  validarInscripcionAdmin,
  validarSubidaDocumento,
  validarAdminUpdate,
  crearInscripcion,
  crearInscripcionAdmin,
  subirDocumentoInscripcion,
  listarInscripciones,
  misInscripciones,
  descargarDocumento,
  eliminarInscripcion,
  actualizarInscripcionAdmin
} = require('../controllers/trabajadoresCursosController');
const { uploadCursoTrabajadorDocumento } = require('../config/multerCursosTrabajadores');
const { verifyToken } = require('../middleware/auth');
const { hasRole } = require('../middleware/authorization');
const Roles = require('../enums/roles.enum');
const TipoDocumento = require('../enums/tipodocumento.enum');

/**
 * @swagger
 * tags:
 *   - name: TrabajadoresCursos
 *     description: Inscripción, gestión de documentos y control administrativo en cursos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     TrabajadorCursoInput:
 *       type: object
 *       required:
 *         - id_curso
 *         - tipo_documento
 *       properties:
 *         id_curso:
 *           type: integer
 *           example: 1
 *         tipo_documento:
 *           type: string
 *           enum: [INVITACION_CURSO]
 *           example: "INVITACION_CURSO"
 *         documento:
 *           type: string
 *           format: binary
 *     SubirDocumentoInput:
 *       type: object
 *       required:
 *         - tipo_documento
 *       properties:
 *         tipo_documento:
 *           type: string
 *           enum: [CONCLUSION_CURSO, CERTIFICADO_CURSO]
 *           example: "CONCLUSION_CURSO"
 *         documento:
 *           type: string
 *           format: binary
 *     AdminUpdateInput:
 *       type: object
 *       properties:
 *         calificacion:
 *           type: string
 *           example: "95.50"
 *         completado:
 *           type: boolean
 *           example: true
 *         fecha_completado:
 *           type: string
 *           format: date
 *           example: "2025-08-20"
 *     TrabajadorCursoOutput:
 *       type: object
 *       properties:
 *         id_trabajador_curso: { type: integer }
 *         id_trabajador: { type: integer }
 *         id_curso: { type: integer }
 *         fecha_inscripcion: { type: string, format: date }
 *         calificacion: { type: string }
 *         completado: { type: boolean }
 *         fecha_completado: { type: string, format: date }
 *         documento_invitacion_id: { type: integer }
 *         documento_conclusion_id: { type: integer }
 *         documento_certificado_id: { type: integer }
 *         documentoInvitacion: { $ref: '#/components/schemas/Documento' }
 *         documentoConclusion: { $ref: '#/components/schemas/Documento' }
 *         documentoCertificado: { $ref: '#/components/schemas/Documento' }
 *         trabajadores:
 *           type: object
 *           properties:
 *             nombre: { type: string }
 *             apellido_paterno: { type: string }
 *             apellido_materno: { type: string }
 *             identificador: { type: string }
 *         cursos:
 *           type: object
 *           properties:
 *             id_curso: { type: integer }
 *             nombre_curso: { type: string }
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
 * /trabajadores-cursos:
 *   post:
 *     summary: Inscribe a un usuario en un curso y sube la invitación (sólo una vez)
 *     tags: [TrabajadoresCursos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/TrabajadorCursoInput'
 *     responses:
 *       201:
 *         description: Inscripción y documento registrados correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data: { $ref: '#/components/schemas/TrabajadorCursoOutput' }
 *       400: { description: Error de validación }
 *       401: { description: No autorizado }
 *       409:
 *         description: Ya existe la inscripción.
 *       500: { description: Error interno }
 */
router.post(
  '/',
  verifyToken,
  hasRole([Roles.USUARIO]),
  uploadCursoTrabajadorDocumento.single('documento'),
  validarInscripcion,
  crearInscripcion
);

// Endpoint para que un administrador inscriba a un trabajador
router.post(
  '/admin',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  uploadCursoTrabajadorDocumento.single('documento'),
  validarInscripcionAdmin,
  crearInscripcionAdmin
);

/**
 * @swagger
 * /trabajadores-cursos:
 *   get:
 *     summary: Lista todas las inscripciones (ADMIN)
 *     tags: [TrabajadoresCursos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Inscripciones obtenidas correctamente.
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
 *                     $ref: '#/components/schemas/TrabajadorCursoOutput'
 *       401: { description: No autorizado }
 *       403: { description: Prohibido }
 *       500: { description: Error interno }
 */
router.get(
  '/',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  listarInscripciones
);

/**
 * @swagger
 * /trabajadores-cursos/mis-cursos:
 *   get:
 *     summary: Lista las inscripciones propias del usuario
 *     tags: [TrabajadoresCursos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Inscripciones propias obtenidas correctamente.
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
 *                     $ref: '#/components/schemas/TrabajadorCursoOutput'
 *       401: { description: No autorizado }
 *       500: { description: Error interno }
 */
router.get(
  '/mis-cursos',
  verifyToken,
  hasRole([Roles.USUARIO]),
  misInscripciones
);

/**
 * @swagger
 * /trabajadores-cursos/{id}/documento:
 *   patch:
 *     summary: Sube documento de conclusión o certificado (sólo una vez, no se sobrescribe)
 *     tags: [TrabajadoresCursos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID de la inscripción
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/SubirDocumentoInput'
 *     responses:
 *       200:
 *         description: Documento subido y vinculado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data: { $ref: '#/components/schemas/TrabajadorCursoOutput' }
 *       400: { description: Error de validación }
 *       401: { description: No autorizado }
 *       404: { description: Inscripción no encontrada }
 *       409: { description: Ya existe documento de ese tipo }
 *       500: { description: Error interno }
 */
router.patch(
  '/:id/documento',
  verifyToken,
  hasRole([Roles.USUARIO]),
  uploadCursoTrabajadorDocumento.single('documento'),
  validarSubidaDocumento,
  subirDocumentoInscripcion
);

/**
 * @swagger
 * /trabajadores-cursos/{id}/descargar/{tipo_documento}:
 *   get:
 *     summary: Descarga documento de inscripción (ADMIN, usuario propio)
 *     tags: [TrabajadoresCursos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID de la inscripción
 *       - in: path
 *         name: tipo_documento
 *         schema:
 *           type: string
 *           enum: [INVITACION_CURSO, CONCLUSION_CURSO, CERTIFICADO_CURSO]
 *         required: true
 *         description: Tipo de documento a descargar
 *     responses:
 *       200:
 *         description: Archivo descargado exitosamente.
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
  '/:id/descargar/:tipo_documento',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR, Roles.USUARIO]),
  [
    param('id').isInt().withMessage('ID debe ser entero').toInt(),
    param('tipo_documento').isIn([
      TipoDocumento.INVITACION_CURSO,
      TipoDocumento.CONCLUSION_CURSO,
      TipoDocumento.CERTIFICADO_CURSO
    ]).withMessage('Tipo de documento no válido')
  ],
  descargarDocumento
);

/**
 * @swagger
 * /trabajadores-cursos/{id}:
 *   delete:
 *     summary: Elimina inscripción y documentos asociados (ADMIN)
 *     tags: [TrabajadoresCursos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID de la inscripción
 *     responses:
 *       200:
 *         description: Inscripción y documentos eliminados correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *       401: { description: No autorizado }
 *       403: { description: Prohibido }
 *       404: { description: Inscripción no encontrada }
 *       500: { description: Error interno }
 */
router.delete(
  '/:id',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  [param('id').isInt().withMessage('ID debe ser entero').toInt()],
  eliminarInscripcion
);

/**
 * @swagger
 * /trabajadores-cursos/{id}/admin:
 *   patch:
 *     summary: Actualiza calificación, completado o fecha (sólo ADMIN)
 *     tags: [TrabajadoresCursos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID de la inscripción
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminUpdateInput'
 *     responses:
 *       200:
 *         description: Inscripción actualizada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data: { $ref: '#/components/schemas/TrabajadorCursoOutput' }
 *       400: { description: Error de validación }
 *       401: { description: No autorizado }
 *       404: { description: Inscripción no encontrada }
 *       500: { description: Error interno }
 */
router.patch(
  '/:id/admin',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  validarAdminUpdate,
  actualizarInscripcionAdmin
);

module.exports = router;