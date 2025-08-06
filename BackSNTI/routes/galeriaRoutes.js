// ✅ routes/galeriaRoutes.js
const express = require('express');
const router = express.Router();
const galeriaController = require('../controllers/galeriaController');
const { verifyToken, handleMulterUpload } = require('../middleware');
const { hasRole } = require('../middleware/authorization');
const { uploadGaleria } = require('../config/multerGaleria');
const Roles = { ADMINISTRADOR: 'ADMINISTRADOR', USUARIO: 'USUARIO' };

/**
 * @swagger
 * tags:
 * - name: Galeria
 *   description: Gestión de imágenes en la galería institucional
 *
 * components:
 *   schemas:
 *     GaleriaInput:
 *       type: object
 *       required:
 *         - nombre_imagen
 *       properties:
 *         nombre_imagen:
 *           type: string
 *           example: "Cartel del evento sindical"
 *     GaleriaOutput:
 *       type: object
 *       properties:
 *         id_imagen:
 *           type: integer
 *           example: 1
 *         nombre_imagen:
 *           type: string
 *           example: "Cartel del evento sindical"
 *         ruta_imagen:
 *           type: string
 *           example: "uploads/galeria/evento.jpg"
 *         tipo_imagen:
 *           type: string
 *           example: "jpg"
 *         tamano_bytes:
 *           type: integer
 *           example: 204800
 *         es_activa:
 *           type: boolean
 *           example: true
 *
 *   responses:
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
 *               error: 
 *                 type: string
 */

/**
 * @swagger
 * /galeria:
 *   get:
 *     summary: Listar imágenes públicas de la galería
 *     tags: [Galeria]
 *     responses:
 *       200:
 *         description: Lista de imágenes activas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean, example: true }
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/GaleriaOutput'
 */
router.get('/', galeriaController.obtenerGaleria);

/**
 * @swagger
 * /galeria/{id}/descargar:
 *   get:
 *     summary: Descargar imagen de galería
 *     tags: [Galeria]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *     responses:
 *       200:
 *         description: Imagen descargada
 *         content:
 *           image/jpeg: {}
 *           image/png: {}
 *           image/webp: {}
 *       404:
 *         $ref: '#/components/responses/404Error'
 */
router.get('/:id/descargar', verifyToken, hasRole([Roles.USUARIO, Roles.ADMINISTRADOR]), galeriaController.descargarImagen);

/**
 * @swagger
 * /galeria/subir:
 *   post:
 *     summary: Subir imagen a galería
 *     tags: [Galeria]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [nombre_imagen, archivo]
 *             properties:
 *               nombre_imagen:
 *                 type: string
 *                 example: "Cartel Asamblea General"
 *               archivo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Imagen subida
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GaleriaOutput'
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       403:
 *         $ref: '#/components/responses/403Error'
 */
router.post('/subir', verifyToken, hasRole([Roles.ADMINISTRADOR]), handleMulterUpload(uploadGaleria.single('archivo')), galeriaController.crearImagenGaleria);

/**
 * @swagger
 * /galeria/{id}:
 *   patch:
 *     summary: Actualizar datos o imagen
 *     tags: [Galeria]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *     requestBody:
 *       required: false
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_imagen:
 *                 type: string
 *               archivo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Imagen actualizada
 *       404:
 *         $ref: '#/components/responses/404Error'
 */
router.patch('/:id', verifyToken, hasRole([Roles.ADMINISTRADOR]), handleMulterUpload(uploadGaleria.single('archivo')), galeriaController.actualizarImagenGaleria);

/**
 * @swagger
 * /galeria/{id}:
 *   delete:
 *     summary: Eliminar imagen (soft delete)
 *     tags: [Galeria]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *     responses:
 *       200:
 *         description: Imagen eliminada lógicamente
 *       404:
 *         $ref: '#/components/responses/404Error'
 */
router.delete('/:id', verifyToken, hasRole([Roles.ADMINISTRADOR]), galeriaController.eliminarImagenGaleria);

module.exports = router;
