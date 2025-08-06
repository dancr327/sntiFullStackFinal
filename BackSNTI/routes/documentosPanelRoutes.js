const express = require('express');
const router = express.Router();
const {
  validarSubidaPanel,
  subirDocumentoPanel,
  listarMisDocumentos,
  listarDocumentosTrabajador,
  descargarDocumentoPanel,
  eliminarDocumentoPanel
} = require('../controllers/documentosPanelController');
const { uploadPanelDocumento } = require('../config/multerPanel');
const { verifyToken } = require('../middleware/auth');
const { hasRole } = require('../middleware/authorization');
const Roles = require('../enums/roles.enum');
const TipoDocumento = require('../enums/tipodocumento.enum');

/**
 * @swagger
 * tags:
 *   - name: DocumentosPanel
 *     description: Documentos personales de trabajadores (CURP, RFC, INE, etc.)
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DocumentoInput:
 *       type: object
 *       required:
 *         - tipo_documento
 *       properties:
 *         tipo_documento:
 *           type: string
 *           enum: [CURP, RFC, INE, CERTIFICADO_ESTUDIO, OTRO_DOCUMENTO]
 *           example: "CURP"
 *         archivo:
 *           type: string
 *           format: binary
 *     DocumentoOutput:
 *       type: object
 *       properties:
 *         id_documento: { type: integer }
 *         id_trabajador: { type: integer }
 *         tipo_documento: { type: string }
 *         nombre_archivo: { type: string }
 *         descripcion: { type: string }
 *         hash_archivo: { type: string }
 *         ruta_almacenamiento: { type: string }
 *         fecha_subida: { type: string, format: date-time }
 *         tamano_bytes: { type: string }
 *         mimetype: { type: string }
 *         es_publico: { type: boolean }
 */

/**
 * @swagger
 * /documentos:
 *   post:
 *     summary: Sube o reemplaza un documento personal (solo usuario)
 *     tags: [DocumentosPanel]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/DocumentoInput'
 *     responses:
 *       201:
 *         description: Documento subido correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data: { $ref: '#/components/schemas/DocumentoOutput' }
 *       400: { description: Error de validación }
 *       401: { description: No autorizado }
 *       500: { description: Error interno }
 */
router.post(
  '/',
  verifyToken,
  hasRole([Roles.USUARIO]),
  uploadPanelDocumento.single('archivo'),
  validarSubidaPanel,
  subirDocumentoPanel
);

/**
 * @swagger
 * /documentos/mis-documentos:
 *   get:
 *     summary: Lista los documentos personales del usuario autenticado
 *     tags: [DocumentosPanel]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Documentos obtenidos correctamente.
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
 *                     $ref: '#/components/schemas/DocumentoOutput'
 *       401: { description: No autorizado }
 *       500: { description: Error interno }
 */
router.get(
  '/mis-documentos',
  verifyToken,
  hasRole([Roles.USUARIO]),
  listarMisDocumentos
);

/**
 * @swagger
 * /documentos:
 *   get:
 *     summary: Lista los documentos de un trabajador (admin)
 *     tags: [DocumentosPanel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: trabajador
 *         schema: { type: integer }
 *         required: true
 *         description: ID del trabajador
 *     responses:
 *       200:
 *         description: Documentos del trabajador obtenidos correctamente.
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
 *                     $ref: '#/components/schemas/DocumentoOutput'
 *       401: { description: No autorizado }
 *       403: { description: Prohibido }
 *       400: { description: Falta parámetro trabajador }
 *       500: { description: Error interno }
 */
router.get(
  '/',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  listarDocumentosTrabajador
);

/**
 * @swagger
 * /documentos/{id}/descargar:
 *   get:
 *     summary: Descarga un documento del panel (usuario propio o admin)
 *     tags: [DocumentosPanel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID del documento
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
  '/:id/descargar',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR, Roles.USUARIO]),
  descargarDocumentoPanel
);

/**
 * @swagger
 * /documentos/{id}:
 *   delete:
 *     summary: Elimina uno de tus documentos personales (usuario)
 *     tags: [DocumentosPanel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *         description: ID del documento
 *     responses:
 *       200:
 *         description: Documento eliminado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *       401: { description: No autorizado }
 *       404: { description: Documento no encontrado }
 *       500: { description: Error interno }
 */
router.delete(
  '/:id',
  verifyToken,
  hasRole([Roles.USUARIO]),
  eliminarDocumentoPanel
);

module.exports = router;
