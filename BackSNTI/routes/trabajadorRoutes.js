// routes/trabajadorRoutes.js
const express = require("express");
const router = express.Router();
const { check, param } = require("express-validator");
const {
    validarTrabajador,
    validarCreacionTrabajador,
    listarTrabajadores,
    crearTrabajador,
    miPerfil,
    obtenerTrabajadorPorId,
    actualizarTrabajador,
    listarTrabajadoresPorSeccion,
    eliminarTrabajador
} = require("../controllers/trabajadorController");
const { verifyToken } = require("../middleware/auth");
const { hasRole } = require("../middleware/authorization");
const Roles = require('../enums/roles.enum');


/**
 * @swagger
 * tags:
 * - name: Trabajadores
 *   description: Endpoints para administrar y consultar información de trabajadores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     TrabajadorInput:
 *       type: object
 *       required:
 *         - identificador
 *         - contraseña
 *         - nombre
 *         - apellido_paterno
 *         - fecha_nacimiento
 *         - sexo
 *         - curp
 *         - rfc
 *         - email
 *         - numero_empleado
 *         - numero_plaza
 *         - fecha_ingreso
 *         - fecha_ingreso_gobierno
 *         - nivel_puesto
 *         - nombre_puesto
 *         - adscripcion
 *         - id_seccion
 *       properties:
 *         identificador:
 *           type: string
 *           maxLength: 150
 *           example: "juan.perez@example.com"
 *         contraseña:
 *           type: string
 *           format: password
 *           minLength: 6
 *           example: "Password123"
 *         rol:
 *           type: string
 *           enum: [ADMINISTRADOR, USUARIO]
 *           example: "USUARIO"
 *         nombre:
 *           type: string
 *           maxLength: 100
 *           example: "Juan"
 *         apellido_paterno:
 *           type: string
 *           maxLength: 100
 *           example: "Pérez"
 *         apellido_materno:
 *           type: string
 *           maxLength: 100
 *           example: "Gómez"
 *         fecha_nacimiento:
 *           type: string
 *           format: date
 *           example: "1980-01-01"
 *         sexo:
 *           type: string
 *           enum: [M, F]
 *           example: "M"
 *         curp:
 *           type: string
 *           minLength: 18
 *           maxLength: 18
 *           example: "XAXX01010100000001"
 *         rfc:
 *           type: string
 *           minLength: 13
 *           maxLength: 13
 *           example: "XAXX010101000"
 *         email:
 *           type: string
 *           format: email
 *           maxLength: 150
 *           example: "juan.perez@dominio.com"
 *         situacion_sentimental:
 *           type: string
 *           enum: [Soltero, Casado, Divorciado, Viudo, Union_Libre]
 *           example: "Soltero"
 *         numero_hijos:
 *           type: integer
 *           minimum: 0
 *           example: 0
 *         numero_empleado:
 *           type: string
 *           minLength: 10
 *           maxLength: 10
 *           example: "EMP1234567"
 *         numero_plaza:
 *           type: string
 *           minLength: 8
 *           maxLength: 8
 *           example: "PLZ12345"
 *         fecha_ingreso:
 *           type: string
 *           format: date
 *           example: "2020-03-15"
 *         fecha_ingreso_gobierno:
 *           type: string
 *           format: date
 *           example: "2010-07-01"
 *         nivel_puesto:
 *           type: string
 *           maxLength: 50
 *           example: "Jefe de Departamento"
 *         nombre_puesto:
 *           type: string
 *           maxLength: 100
 *           example: "Jefe de Departamento de Sistemas"
 *         puesto_inpi:
 *           type: string
 *           maxLength: 100
 *           example: "Desarrollador Senior"
 *         adscripcion:
 *           type: string
 *           maxLength: 100
 *           example: "Dirección de Tecnologías de la Información"
 *         id_seccion:
 *           type: integer
 *           example: 1
 *         nivel_estudios:
 *           type: string
 *           maxLength: 100
 *           example: "Licenciatura"
 *         institucion_estudios:
 *           type: string
 *           maxLength: 200
 *           example: "Universidad Nacional Autónoma de México"
 *         certificado_estudios:
 *           type: boolean
 *           example: true
 *         plaza_base:
 *           type: string
 *           maxLength: 10
 *           example: "Base"
 * 
 *     TrabajadorUpdateInput:
 *       type: object
 *       properties:
 *         identificador:
 *           type: string
 *           maxLength: 150
 *         contraseña:
 *           type: string
 *           format: password
 *           minLength: 6
 *         rol:
 *           type: string
 *           enum: [ADMINISTRADOR, USUARIO]
 *         nombre:
 *           type: string
 *           maxLength: 100
 *         apellido_paterno:
 *           type: string
 *           maxLength: 100
 *         apellido_materno:
 *           type: string
 *           maxLength: 100
 *         fecha_nacimiento:
 *           type: string
 *           format: date
 *         sexo:
 *           type: string
 *           enum: [M, F]
 *         curp:
 *           type: string
 *           minLength: 18
 *           maxLength: 18
 *         rfc:
 *           type: string
 *           minLength: 13
 *           maxLength: 13
 *         email:
 *           type: string
 *           format: email
 *           maxLength: 150
 *         situacion_sentimental:
 *           type: string
 *           enum: [Soltero, Casado, Divorciado, Viudo, Union_Libre]
 *         numero_hijos:
 *           type: integer
 *           minimum: 0
 *         numero_empleado:
 *           type: string
 *           minLength: 10
 *           maxLength: 10
 *         numero_plaza:
 *           type: string
 *           minLength: 8
 *           maxLength: 8
 *         fecha_ingreso:
 *           type: string
 *           format: date
 *         fecha_ingreso_gobierno:
 *           type: string
 *           format: date
 *         nivel_puesto:
 *           type: string
 *           maxLength: 50
 *         nombre_puesto:
 *           type: string
 *           maxLength: 100
 *         puesto_inpi:
 *           type: string
 *           maxLength: 100
 *         adscripcion:
 *           type: string
 *           maxLength: 100
 *         id_seccion:
 *           type: integer
 *         nivel_estudios:
 *           type: string
 *           maxLength: 100
 *         institucion_estudios:
 *           type: string
 *           maxLength: 200
 *         certificado_estudios:
 *           type: boolean
 *         plaza_base:
 *           type: string
 *           maxLength: 10
 * 
 *     TrabajadorOutput:
 *       type: object
 *       properties:
 *         id_trabajador:
 *           type: integer
 *           readOnly: true
 *           example: 1
 *         identificador:
 *           type: string
 *           example: "juan.perez@example.com"
 *         rol:
 *           type: string
 *           example: "USUARIO"
 *         nombre:
 *           type: string
 *           example: "Juan"
 *         apellido_paterno:
 *           type: string
 *           example: "Pérez"
 *         apellido_materno:
 *           type: string
 *           nullable: true
 *           example: "Gómez"
 *         fecha_nacimiento:
 *           type: string
 *           format: date
 *           example: "1980-01-01"
 *         sexo:
 *           type: string
 *           example: "M"
 *         curp:
 *           type: string
 *           example: "XAXX01010100000001"
 *         rfc:
 *           type: string
 *           example: "XAXX010101000"
 *         email:
 *           type: string
 *           example: "juan.perez@dominio.com"
 *         situacion_sentimental:
 *           type: string
 *           nullable: true
 *           example: "Soltero"
 *         numero_hijos:
 *           type: integer
 *           example: 0
 *         numero_empleado:
 *           type: string
 *           example: "EMP1234567"
 *         numero_plaza:
 *           type: string
 *           example: "PLZ12345"
 *         fecha_ingreso:
 *           type: string
 *           format: date
 *           example: "2020-03-15"
 *         fecha_ingreso_gobierno:
 *           type: string
 *           format: date
 *           example: "2010-07-01"
 *         nivel_puesto:
 *           type: string
 *           example: "Jefe de Departamento"
 *         nombre_puesto:
 *           type: string
 *           example: "Jefe de Departamento de Sistemas"
 *         puesto_inpi:
 *           type: string
 *           nullable: true
 *           example: "Desarrollador Senior"
 *         adscripcion:
 *           type: string
 *           example: "Dirección de Tecnologías de la Información"
 *         id_seccion:
 *           type: integer
 *           example: 1
 *         nivel_estudios:
 *           type: string
 *           nullable: true
 *           example: "Licenciatura"
 *         institucion_estudios:
 *           type: string
 *           nullable: true
 *           example: "Universidad Nacional Autónoma de México"
 *         certificado_estudios:
 *           type: boolean
 *           nullable: true
 *           example: true
 *         plaza_base:
 *           type: string
 *           nullable: true
 *           example: "Base"
 *         fecha_creacion:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *         ultimo_login:
 *           type: string
 *           format: date-time
 *           nullable: true
 *         fecha_actualizacion:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *         seccion:
 *           type: object
 *           properties:
 *             nombre_seccion:
 *               type: string
 *               example: "Tecnología"
 * 
 *   responses:
 *     400Error:
 *       description: Solicitud inválida o error de validación
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
 *     401Error:
 *       description: Acceso no autorizado
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
 *       description: Prohibido - Permisos insuficientes
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
 *       description: Recurso no encontrado
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
 *                 example: "No encontrado"
 *     409Error:
 *       description: Conflicto de datos
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
 *                 example: "Conflicto en los datos"
 *     500Error:
 *       description: Error interno del servidor
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
 *                 example: "Error del servidor"
 */

// --- Rutas para Trabajadores ---

/**
 * @swagger
 * /trabajadores:
 *   get:
 *     summary: Lista todos los trabajadores
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Trabajadores]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de trabajadores obtenida
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
 *                     $ref: '#/components/schemas/TrabajadorOutput'
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       403:
 *         $ref: '#/components/responses/403Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.get(
    "/",
    verifyToken,
    hasRole([Roles.ADMINISTRADOR]),
    listarTrabajadores
);

/**
 * @swagger
 * /trabajadores/mi-perfil:
 *   get:
 *     summary: Obtiene el perfil del trabajador autenticado
 *     description: Accesible para ADMINISTRADORES y USUARIOS
 *     tags: [Trabajadores]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil obtenido exitosamente
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
 *                   $ref: '#/components/schemas/TrabajadorOutput'
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       404:
 *         $ref: '#/components/responses/404Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.get(
    "/mi-perfil",
    verifyToken,
    miPerfil
);

/**
 * @swagger
 * /trabajadores:
 *   post:
 *     summary: Crea un nuevo trabajador
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Trabajadores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TrabajadorInput'
 *     responses:
 *       201:
 *         description: Trabajador creado exitosamente
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
 *                   $ref: '#/components/schemas/TrabajadorOutput'
 *       400:
 *         $ref: '#/components/responses/400Error'
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       403:
 *         $ref: '#/components/responses/403Error'
 *       409:
 *         $ref: '#/components/responses/409Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.post(
    "/",
    verifyToken,
    hasRole([Roles.ADMINISTRADOR]),
    validarCreacionTrabajador,
    crearTrabajador
);
/**
 * @swagger
 * /trabajadores/seccion:
 *   get:
 *     summary: Lista todos los trabajadores de la misma sección del administrador autenticado
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Trabajadores]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de trabajadores de la sección obtenida
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
 *                     $ref: '#/components/schemas/TrabajadorOutput'
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       403:
 *         $ref: '#/components/responses/403Error'
 *       404:
 *         $ref: '#/components/responses/404Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.get(
    '/seccion',
    verifyToken,
    hasRole([Roles.ADMINISTRADOR]),
    listarTrabajadoresPorSeccion
);

/**
 * @swagger
 * /trabajadores/{id}:
 *   get:
 *     summary: Obtiene un trabajador por ID
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Trabajadores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del trabajador
 *     responses:
 *       200:
 *         description: Trabajador obtenido exitosamente
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
 *                   $ref: '#/components/schemas/TrabajadorOutput'
 *       400:
 *         description: ID inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/400Error'
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       403:
 *         $ref: '#/components/responses/403Error'
 *       404:
 *         $ref: '#/components/responses/404Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.get(
    "/:id",
    verifyToken,
    hasRole([Roles.ADMINISTRADOR]),
    [
        param('id')
            .isInt().withMessage('ID debe ser entero')
            .toInt()
    ],
    obtenerTrabajadorPorId
);

/**
 * @swagger
 * /trabajadores/{id}:
 *   put:
 *     summary: Actualiza un trabajador
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Trabajadores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del trabajador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TrabajadorUpdateInput'
 *     responses:
 *       200:
 *         description: Trabajador actualizado exitosamente
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
 *                   $ref: '#/components/schemas/TrabajadorOutput'
 *       400:
 *         $ref: '#/components/responses/400Error'
 *       401:
 *         $ref: '#/components/responses/401Error'
 *       403:
 *         $ref: '#/components/responses/403Error'
 *       404:
 *         $ref: '#/components/responses/404Error'
 *       409:
 *         $ref: '#/components/responses/409Error'
 *       500:
 *         $ref: '#/components/responses/500Error'
 */
router.put(
    "/:id",
    verifyToken,
    hasRole([Roles.ADMINISTRADOR]),
    [
        param('id')
            .isInt().withMessage('ID debe ser entero')
            .toInt(),
        ...validarTrabajador
    ],
    actualizarTrabajador
);

/**
 * @swagger
 * /trabajadores/{id}:
 *   delete:
 *     summary: Elimina un trabajador
 *     description: Accesible solo para ADMINISTRADORES
 *     tags: [Trabajadores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del trabajador
 *     responses:
 *       200:
 *         description: Trabajador eliminado exitosamente
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
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/400Error'
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
    "/:id",
    verifyToken,
    hasRole([Roles.ADMINISTRADOR]),
    [
        param('id')
            .isInt().withMessage('ID debe ser entero')
            .toInt()
    ],
    eliminarTrabajador
);



module.exports = router;