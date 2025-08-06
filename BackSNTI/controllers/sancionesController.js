// controllers/sancionesController.js
const { PrismaClient } = require('@prisma/client');
const { body, param, validationResult } = require('express-validator');
const prisma = new PrismaClient();
const Roles = require('../enums/roles.enum'); // Asegúrate de que esta ruta sea correcta

// --- Middleware para validar datos de entrada de una sanción ---
const validarSancion = [
    body('id_trabajador')
        .notEmpty().withMessage('El ID del trabajador es obligatorio.')
        .isInt().withMessage('El ID del trabajador debe ser un número entero.'),
    body('tipo_sancion')
        .notEmpty().withMessage('El tipo de sanción es obligatorio.')
        .isLength({ max: 50 }).withMessage('El tipo de sanción no puede exceder 50 caracteres.'),
    body('descripcion')
        .notEmpty().withMessage('La descripción de la sanción es obligatoria.'),
    body('fecha_aplicacion')
        .notEmpty().withMessage('La fecha de aplicación es obligatoria.')
        .isISO8601().withMessage('Formato de fecha de aplicación inválido (YYYY-MM-DD).'),
    body('fecha_fin')
        .optional()
        .isISO8601().withMessage('Formato de fecha de fin inválido (YYYY-MM-DD).'),
    body('estatus')
        .optional()
        .isLength({ max: 20 }).withMessage('El estatus no puede exceder 20 caracteres.'),
];

/**
 * @function crearSancion
 * @description Crea una nueva sanción para un trabajador. Solo accesible para ADMINISTRADORES.
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 */
const crearSancion = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, message: 'Error de validación', errors: errors.array() });
        }

        const {
            id_trabajador,
            tipo_sancion,
            descripcion,
            fecha_aplicacion,
            fecha_fin,
            estatus
        } = req.body;

        // Verificar si el trabajador existe
        const trabajadorExistente = await prisma.trabajadores.findUnique({
            where: { id_trabajador: parseInt(id_trabajador) }
        });

        if (!trabajadorExistente) {
            return res.status(404).json({ success: false, message: 'El trabajador especificado no existe.' });
        }

        // Obtener el usuario que registra la sanción del token JWT
        const usuarioRegistro = req.user.identificador || 'Desconocido'; // Asume que 'identificador' está en req.user

        const nuevaSancion = await prisma.sanciones.create({
            data: {
                id_trabajador: parseInt(id_trabajador),
                tipo_sancion,
                descripcion,
                fecha_aplicacion: new Date(fecha_aplicacion),
                fecha_fin: fecha_fin ? new Date(fecha_fin) : null,
                estatus,
                usuario_registro: usuarioRegistro, // Asignar el identificador del usuario que crea la sanción
                fecha_registro: new Date() // Asignar la fecha actual del registro
            }
        });

        return res.status(201).json({
            success: true,
            message: 'Sanción creada exitosamente.',
            data: nuevaSancion
        });

    } catch (error) {
        console.error('Error al crear la sanción:', error);
        return res.status(500).json({ success: false, message: 'Error del servidor.', error: error.message });
    }
};

/**
 * @function listarSanciones
 * @description Lista todas las sanciones registradas en el sistema. Solo accesible para ADMINISTRADORES.
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 */
const listarSanciones = async (req, res) => {
    try {
        const sanciones = await prisma.sanciones.findMany({
            include: {
                trabajadores: { // Incluye la información del trabajador asociado
                    select: {
                        nombre: true,
                        apellido_paterno: true,
                        apellido_materno: true,
                        identificador: true
                    }
                }
            }
        });

        return res.status(200).json({
            success: true,
            message: 'Lista de sanciones obtenida exitosamente.',
            data: sanciones
        });

    } catch (error) {
        console.error('Error al listar sanciones:', error);
        return res.status(500).json({ success: false, message: 'Error del servidor.', error: error.message });
    }
};

/**
 * @function obtenerSancionesPorTrabajador
 * @description Obtiene todas las sanciones de un trabajador específico por su ID. Solo accesible para ADMINISTRADORES.
 * @param {object} req - Objeto de solicitud de Express (req.params.idTrabajador).
 * @param {object} res - Objeto de respuesta de Express.
 */
const obtenerSancionesPorTrabajador = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, message: 'Error de validación', errors: errors.array() });
        }

        const idTrabajador = parseInt(req.params.idTrabajador);

        // Verificar si el trabajador existe (opcional, pero buena práctica)
        const trabajadorExistente = await prisma.trabajadores.findUnique({
            where: { id_trabajador: idTrabajador }
        });

        if (!trabajadorExistente) {
            return res.status(404).json({ success: false, message: 'El trabajador especificado no existe.' });
        }

        const sanciones = await prisma.sanciones.findMany({
            where: {
                id_trabajador: idTrabajador
            },
            include: {
                trabajadores: {
                    select: {
                        nombre: true,
                        apellido_paterno: true,
                        apellido_materno: true,
                        identificador: true
                    }
                }
            }
        });

        return res.status(200).json({
            success: true,
            message: `Sanciones para el trabajador con ID ${idTrabajador} obtenidas exitosamente.`,
            data: sanciones
        });

    } catch (error) {
        console.error('Error al obtener sanciones por trabajador:', error);
        return res.status(500).json({ success: false, message: 'Error del servidor.', error: error.message });
    }
};

/**
 * @function miSancion
 * @description Obtiene las sanciones del trabajador autenticado. Accesible para ADMINISTRADORES y USUARIOS.
 * @param {object} req - Objeto de solicitud de Express (req.user contiene el ID del usuario autenticado).
 * @param {object} res - Objeto de respuesta de Express.
 */
const miSancion = async (req, res) => {
    try {
        const userId = req.user.id; // El ID del usuario se adjunta desde verifyToken

        const sanciones = await prisma.sanciones.findMany({
            where: {
                id_trabajador: userId
            },
            include: {
                trabajadores: {
                    select: {
                        nombre: true,
                        apellido_paterno: true,
                        apellido_materno: true,
                        identificador: true
                    }
                }
            }
        });

        if (sanciones.length === 0) {
            return res.status(200).json({ success: true, message: 'No tienes sanciones registradas.', data: [] });
        }

        return res.status(200).json({
            success: true,
            message: 'Tus sanciones han sido obtenidas exitosamente.',
            data: sanciones
        });

    } catch (error) {
        console.error('Error al obtener las sanciones del usuario autenticado:', error);
        return res.status(500).json({ success: false, message: 'Error del servidor.', error: error.message });
    }
};

module.exports = {
    validarSancion,
    crearSancion,
    listarSanciones,
    obtenerSancionesPorTrabajador,
    miSancion
};