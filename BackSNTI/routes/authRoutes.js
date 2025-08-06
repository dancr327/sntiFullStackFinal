const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { body } = require('express-validator');
const { verifyToken } = require('../middleware/auth');

// Validaciones básicas para login
const loginValidation = [
  body('identificador')
    .notEmpty()
    .withMessage('El identificador es requerido')
    .isLength({ min: 3, max: 150 })
    .withMessage('El identificador debe tener entre 3 y 150 caracteres'),

  body('contraseña')
    .notEmpty()
    .withMessage('La contraseña es requerida')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres')
];

/**
 * @swagger
 * tags:
 *   - name: Autenticación
 *     description: Endpoints para manejar la autenticación de usuarios
 *   - name: Autenticación - Testing
 *     description: Endpoints para generar tokens de prueba (solo en desarrollo)
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Autentica un usuario y genera un token JWT
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - identificador
 *               - contraseña
 *             properties:
 *               identificador:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 150
 *                 example: usuario@empresa.com
 *               contraseña:
 *                 type: string
 *                 minLength: 6
 *                 example: contraseñaSegura123
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                     usuario:
 *                       $ref: '#/components/schemas/Usuario'
 *                     expires_in:
 *                       type: string
 *       400:
 *         description: Error de validación en los datos de entrada
 *       401:
 *         description: Credenciales inválidas o cuenta bloqueada
 *       500:
 *         description: Error interno del servidor
 */
router.post('/login', loginValidation, authController.login);

/**
 * @swagger
 * /auth/verify:
 *   get:
 *     summary: Verifica la validez de un token JWT
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token válido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     usuario:
 *                       $ref: '#/components/schemas/Usuario'
 *                     token_info:
 *                       type: object
 *                       properties:
 *                         expires_at:
 *                           type: string
 *                           format: date-time
 *       401:
 *         description: Token inválido o no proporcionado
 *       404:
 *         description: Usuario no encontrado
 *       423:
 *         description: Cuenta bloqueada
 *       500:
 *         description: Error interno del servidor
 */
router.get('/verify', verifyToken, authController.verificarToken);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Cierra la sesión del usuario (simbólico)
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logout exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     mensaje:
 *                       type: string
 *       500:
 *         description: Error interno del servidor
 */
router.post('/logout', verifyToken, authController.logout);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         identificador:
 *           type: string
 *         nombre:
 *           type: string
 *         apellido_paterno:
 *           type: string
 *         apellido_materno:
 *           type: string
 *         email:
 *           type: string
 *         rol:
 *           type: string
 *         numero_empleado:
 *           type: string
 *         puesto:
 *           type: string
 *         seccion:
 *           type: object
 *           properties:
 *             nombre_seccion:
 *               type: string
 *             descripcion:
 *               type: string
 *         ultimo_login:
 *           type: string
 *           format: date-time
 */

// Validaciones para custom-test-token
const customTokenValidation = [
  body('id').optional().isInt({ min: 1 }).withMessage('ID debe ser un número entero positivo'),
  body('identificador').optional().isLength({ min: 3, max: 150 }).withMessage('Identificador debe tener entre 3 y 150 caracteres'),
  body('email').optional().isEmail().withMessage('Email debe tener formato válido'),
  body('rol').optional().isIn(['ADMINISTRADOR', 'USUARIO']).withMessage('Rol debe ser ADMINISTRADOR o USUARIO'),
  body('numero_empleado').optional().isLength({ max: 10 }).withMessage('Número de empleado máximo 10 caracteres'),
  body('numero_plaza').optional().isLength({ max: 8 }).withMessage('Número de plaza máximo 8 caracteres'),
  body('expiresIn').optional().matches(/^\d+[smhd]$/).withMessage('expiresIn debe tener formato válido (ej: 1h, 30m, 1d)')
];

/**
 * @swagger
 * /auth/test-token:
 *   post:
 *     summary: Genera un token JWT de prueba para un trabajador existente
 *     tags: [Autenticación - Testing]
 *     description: |
 *       ⚠️ **Solo disponible en desarrollo** - Genera un token de prueba para un trabajador específico.
 *       Útil para testing de APIs sin necesidad de hacer login completo.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_trabajador
 *               - rol
 *             properties:
 *               id_trabajador:
 *                 type: integer
 *                 description: El ID del trabajador para el que se generará el token.
 *                 example: 1
 *               rol:
 *                 type: string
 *                 description: El rol con el que se generará el token (ej. 'ADMINISTRADOR', 'USUARIO').
 *                 example: ADMINISTRADOR
 *     responses:
 *       200:
 *         description: Token de prueba generado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                     usuario:
 *                       $ref: '#/components/schemas/Usuario'
 *                     expires_in:
 *                       type: string
 *                       example: "24h"
 *                 warning:
 *                   type: string
 *                 usage:
 *                   type: object
 *                   properties:
 *                     header:
 *                       type: string
 *                       example: "Authorization"
 *                     format:
 *                       type: string
 *                       example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Parámetros inválidos
 *       403:
 *         description: No disponible en producción
 *       404:
 *         description: Trabajador no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.post('/test-token',
  [
    body('id_trabajador').isInt().withMessage('El ID del trabajador debe ser un número entero.'),
    body('rol').isString().notEmpty().withMessage('El rol es requerido.')
  ],
  authController.generateTestToken
);

/**
 * @swagger
 * /auth/custom-test-token:
 *   post:
 *     summary: Genera un token JWT de prueba con datos personalizados
 *     tags: [Autenticación - Testing]
 *     description: |
 *       ⚠️ **Solo disponible en desarrollo** - Genera un token de prueba con datos personalizados.
 *       Todos los campos son opcionales y tendrán valores por defecto si no se proporcionan.
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 123
 *               identificador:
 *                 type: string
 *                 example: "mi-test@empresa.com"
 *               nombre:
 *                 type: string
 *                 example: "Juan"
 *               apellido_paterno:
 *                 type: string
 *                 example: "Pérez"
 *               apellido_materno:
 *                 type: string
 *                 example: "García"
 *               email:
 *                 type: string
 *                 example: "juan.perez@empresa.com"
 *               rol:
 *                 type: string
 *                 enum: [ADMINISTRADOR, USUARIO]
 *                 example: "ADMINISTRADOR"
 *               numero_empleado:
 *                 type: string
 *                 example: "EMP001"
 *               puesto:
 *                 type: string
 *                 example: "Gerente"
 *               seccion:
 *                 type: object
 *                 properties:
 *                   nombre_seccion:
 *                     type: string
 *                     example: "Ventas"
 *                   descripcion:
 *                     type: string
 *                     example: "Departamento de ventas"
 *               expiresIn:
 *                 type: string
 *                 example: "2h"
 *                 description: "Tiempo de expiración (formato: 1s, 1m, 1h, 1d)"
 *     responses:
 *       200:
 *         description: Token personalizado generado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                     usuario:
 *                       $ref: '#/components/schemas/Usuario'
 *                     expires_in:
 *                       type: string
 *                 warning:
 *                   type: string
 *                 usage:
 *                   type: object
 *       400:
 *         description: Error de validación
 *       403:
 *         description: No disponible en producción
 *       500:
 *         description: Error interno del servidor
 */
router.post('/custom-test-token', customTokenValidation, authController.generateCustomTestToken);

module.exports = router;