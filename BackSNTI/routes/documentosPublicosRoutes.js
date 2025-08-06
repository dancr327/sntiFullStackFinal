// routes/documentosPublicosRoutes.js
const express = require('express');
const router = express.Router();
const { uploadDocumentoPublico, downloadDocumentoPublico, listarDocumentosPublicos } = require('../controllers/documentosPublicosController');
const { uploadPublicPdf } = require('../config/multerPublicPdf');
const { verifyToken } = require('../middleware/auth');
const { hasRole } = require('../middleware/authorization');
const Roles = require('../enums/roles.enum');

/**
 * @swagger
 * tags:
 *   - name: Documentos Públicos
 *     description: Subida y descarga pública de documentos PDF
 */

/**
 * @swagger
 * /publicpdfs:
 *   post:
 *     summary: Subir un documento público (solo ADMIN)
 *     tags: [Documentos Públicos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - archivo
 *             properties:
 *               archivo:
 *                 type: string
 *                 format: binary
 *               descripcion:
 *                 type: string
 *                 example: "Reglamento interno 2025"
 *     responses:
 *       201:
 *         description: Documento público subido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   type: object
 *                   properties:
 *                     id_documento: { type: integer }
 *                     nombre_archivo: { type: string }
 *                     hash_archivo: { type: string }
 *                     mimetype: { type: string }
 *                     ruta_almacenamiento: { type: string }
 *                     tamano_bytes: { type: string }
 *                     es_publico: { type: boolean }
 *       400:
 *         description: Archivo faltante o inválido
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Prohibido
 *       500:
 *         description: Error interno
 */
router.post(
  '/',
  verifyToken,
  hasRole([Roles.ADMINISTRADOR]),
  uploadPublicPdf.single('archivo'),
  uploadDocumentoPublico
);

/**
 * @swagger
 * /publicpdfs/{filename}:
 *   get:
 *     summary: Descargar documento público por nombre de archivo
 *     tags: [Documentos Públicos]
 *     parameters:
 *       - in: path
 *         name: filename
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del archivo en disco (ej. 1720039305-abc123.pdf)
 *     responses:
 *       200:
 *         description: Descarga exitosa del documento
 *         content:
 *           application/pdf: {}
 *       404:
 *         description: Documento no encontrado
 *       500:
 *         description: Error al procesar la descarga
 */
router.get('/:filename', downloadDocumentoPublico);

/**
 * @swagger
 * /publicpdfs:
 *   get:
 *     summary: Listar todos los documentos públicos disponibles
 *     tags: [Documentos Públicos]
 *     responses:
 *       200:
 *         description: Lista de documentos públicos
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
 *                     type: object
 *                     properties:
 *                       id_documento: { type: integer }
 *                       nombre_archivo: { type: string }
 *                       descripcion: { type: string }
 *                       tamano_bytes: { type: string }
 *                       fecha_subida: { type: string, format: date-time }
 *                       mimetype: { type: string }
 *                       url_descarga: { type: string }
 *       500:
 *         description: Error al obtener documentos
 */
router.get('/', listarDocumentosPublicos);

module.exports = router;
