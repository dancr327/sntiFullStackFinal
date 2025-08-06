// controllers/seccionController.js
const { PrismaClient } = require('@prisma/client');
const { body, param, validationResult } = require('express-validator');
const EstadosMexico = require('../enums/estados.enum'); // Asegúrate de que esta ruta sea correcta
const prisma = new PrismaClient();

const sendResponse = (res, success, statusCode, message, data = null, errors = null) => {
    res.status(statusCode).json({ success, message, data, errors });
};

// --- Validaciones ---
const validarSeccion = [
    body('numero_seccion')
        .optional()
        .isInt({ min: 1 }).withMessage('El número de sección debe ser un entero positivo.'),
    body('estado')
        .optional()
        .isIn(Object.values(EstadosMexico)).withMessage('El estado no es un valor válido.'),
    body('ubicacion')
        .optional()
        .isString().withMessage('La ubicación debe ser texto.')
        .isLength({ max: 255 }).withMessage('La ubicación no puede exceder los 255 caracteres.'),
    body('secretario')
        .optional({ nullable: true })
        .isString().withMessage('El secretario debe ser texto.')
        .isLength({ max: 255 }).withMessage('El nombre del secretario no puede exceder los 255 caracteres.')
];

const validarCreacionSeccion = [
    body('numero_seccion')
        .notEmpty().withMessage('El número de sección es obligatorio.')
        .isInt({ min: 1 }).withMessage('El número debe ser positivo.'),
    body('estado')
        .notEmpty().withMessage('El estado es obligatorio.')
        .isIn(Object.values(EstadosMexico)).withMessage('Estado no válido.'),
    body('ubicacion')
        .notEmpty().withMessage('La ubicación es obligatoria.')
        .isString().withMessage('Debe ser texto.')
        .isLength({ max: 255 }).withMessage('Máximo 255 caracteres.'),
    ...validarSeccion
];

// --- Controladores ---

const getAllSecciones = async (req, res) => {
    try {
        const secciones = await prisma.secciones.findMany({
            orderBy: { numero_seccion: 'asc' },
            include: {
                _count: {
                    select: { trabajadores: true }
                }
            }
        });

        const formatted = secciones.map(seccion => ({
            ...seccion,
            numero_trabajadores: seccion._count.trabajadores,
            _count: undefined
        }));

        sendResponse(res, true, 200, 'Secciones obtenidas exitosamente.', formatted);
    } catch (error) {
        console.error(error);
        sendResponse(res, false, 500, 'Error al obtener secciones.', null, error.message);
    }
};

const getSeccionById = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return sendResponse(res, false, 400, 'Datos inválidos.', null, errors.array());
    }

    try {
        const seccion = await prisma.secciones.findUnique({
            where: { id_seccion: parseInt(req.params.id) },
            include: {
                _count: { select: { trabajadores: true } }
            }
        });

        if (!seccion) {
            return sendResponse(res, false, 404, 'Sección no encontrada.');
        }

        sendResponse(res, true, 200, 'Sección obtenida exitosamente.', {
            ...seccion,
            numero_trabajadores: seccion._count.trabajadores,
            _count: undefined
        });
    } catch (error) {
        console.error(error);
        sendResponse(res, false, 500, 'Error al obtener sección.', null, error.message);
    }
};

const createSeccion = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return sendResponse(res, false, 400, 'Datos inválidos.', null, errors.array());
    }

    const { numero_seccion, estado, ubicacion, secretario } = req.body;

    try {
        const existe = await prisma.secciones.findUnique({
            where: { numero_seccion }
        });

        if (existe) {
            return sendResponse(res, false, 409, 'El número de sección ya existe.', null, [
                { msg: 'Número de sección duplicado.', param: 'numero_seccion' }
            ]);
        }

        const nueva = await prisma.secciones.create({
            data: {
                numero_seccion,
                estado,
                ubicacion,
                secretario: secretario || null
            }
        });

        const conDetalles = await prisma.secciones.findUnique({
            where: { id_seccion: nueva.id_seccion },
            include: {
                _count: { select: { trabajadores: true } }
            }
        });

        sendResponse(res, true, 201, 'Sección creada exitosamente.', {
            ...conDetalles,
            numero_trabajadores: conDetalles._count.trabajadores,
            _count: undefined
        });
    } catch (error) {
        console.error(error);
        sendResponse(res, false, 500, 'Error al crear sección.', null, error.message);
    }
};

const updateSeccion = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return sendResponse(res, false, 400, 'Datos inválidos.', null, errors.array());
    }

    const { id } = req.params;
    const { numero_seccion, estado, ubicacion, secretario } = req.body;

    const dataToUpdate = {};
    if (numero_seccion !== undefined) dataToUpdate.numero_seccion = numero_seccion;
    if (estado !== undefined) dataToUpdate.estado = estado;
    if (ubicacion !== undefined) dataToUpdate.ubicacion = ubicacion;
    if (secretario !== undefined) dataToUpdate.secretario = secretario;

    if (Object.keys(dataToUpdate).length === 0) {
        return sendResponse(res, false, 400, 'No hay datos para actualizar.');
    }

    try {
        const existente = await prisma.secciones.findUnique({
            where: { id_seccion: parseInt(id) }
        });

        if (!existente) {
            return sendResponse(res, false, 404, 'Sección no encontrada.');
        }

        if (
            dataToUpdate.numero_seccion &&
            dataToUpdate.numero_seccion !== existente.numero_seccion
        ) {
            const duplicado = await prisma.secciones.findUnique({
                where: { numero_seccion: dataToUpdate.numero_seccion }
            });
            if (duplicado) {
                return sendResponse(res, false, 409, 'Número de sección ya en uso.', null, [
                    { msg: 'Número duplicado.', param: 'numero_seccion' }
                ]);
            }
        }

        const actualizada = await prisma.secciones.update({
            where: { id_seccion: parseInt(id) },
            data: dataToUpdate,
            include: {
                _count: { select: { trabajadores: true } }
            }
        });

        sendResponse(res, true, 200, 'Sección actualizada exitosamente.', {
            ...actualizada,
            numero_trabajadores: actualizada._count.trabajadores,
            _count: undefined
        });
    } catch (error) {
        console.error(error);
        sendResponse(res, false, 500, 'Error al actualizar sección.', null, error.message);
    }
};

const deleteSeccion = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return sendResponse(res, false, 400, 'Datos inválidos.', null, errors.array());
    }

    const seccionId = parseInt(req.params.id);

    try {
        const seccion = await prisma.secciones.findUnique({
            where: { id_seccion: seccionId },
            include: { _count: { select: { trabajadores: true } } }
        });

        if (!seccion) {
            return sendResponse(res, false, 404, 'Sección no encontrada.');
        }

        if (seccion._count.trabajadores > 0) {
            return sendResponse(res, false, 400, 'La sección tiene trabajadores asignados.');
        }

        await prisma.secciones.delete({
            where: { id_seccion: seccionId }
        });

        sendResponse(res, true, 200, 'Sección eliminada exitosamente.');
    } catch (error) {
        console.error(error);
        sendResponse(res, false, 500, 'Error al eliminar sección.', null, error.message);
    }
};

module.exports = {
    validarSeccion,
    validarCreacionSeccion,
    getAllSecciones,
    getSeccionById,
    createSeccion,
    updateSeccion,
    deleteSeccion
};
