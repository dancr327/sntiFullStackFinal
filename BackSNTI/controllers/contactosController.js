// martosam-backsnti/controllers/contactosController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * @desc    Obtener todos los contactos (público)
 * @route   GET /api/contactos
 * @access  Public
 */
const getAllContactos = async (req, res, next) => {
    try {
        const contactos = await prisma.contactos.findMany();
        res.status(200).json({
            success: true,
            data: contactos
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Obtener un contacto por ID (solo ADMINISTRADOR)
 * @route   GET /api/contactos/:id
 * @access  Private (ADMINISTRADOR)
 */
const getContactoById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const contacto = await prisma.contactos.findUnique({
            where: {
                id_contacto: parseInt(id)
            }
        });

        if (!contacto) {
            return res.status(404).json({
                success: false,
                message: 'Contacto no encontrado'
            });
        }
        res.status(200).json({
            success: true,
            data: contacto
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Crear un nuevo contacto (solo ADMINISTRADOR)
 * @route   POST /api/contactos
 * @access  Private (ADMINISTRADOR)
 */
const createContacto = async (req, res, next) => {
    const { ocupacion, nombre, correo } = req.body;
    try {
        if (!ocupacion || !nombre || !correo) {
            return res.status(400).json({
                success: false,
                message: 'Todos los campos son obligatorios: ocupacion, nombre, correo'
            });
        }

        const newContacto = await prisma.contactos.create({
            data: {
                ocupacion,
                nombre,
                correo
            }
        });
        res.status(201).json({
            success: true,
            message: 'Contacto creado exitosamente',
            data: newContacto
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Actualizar un contacto existente (solo ADMINISTRADOR)
 * @route   PATCH /api/contactos/:id
 * @access  Private (ADMINISTRADOR)
 */
const updateContacto = async (req, res, next) => {
    const { id } = req.params;
    const { ocupacion, nombre, correo } = req.body;
    try {
        const updatedContacto = await prisma.contactos.update({
            where: {
                id_contacto: parseInt(id)
            },
            data: {
                ocupacion,
                nombre,
                correo
            }
        });
        res.status(200).json({
            success: true,
            message: 'Contacto actualizado exitosamente',
            data: updatedContacto
        });
    } catch (error) {
        if (error.code === 'P2025') { // Código de error de Prisma para 'record not found'
            return res.status(404).json({
                success: false,
                message: 'Contacto no encontrado para actualizar'
            });
        }
        next(error);
    }
};

/**
 * @desc    Eliminar un contacto (solo ADMINISTRADOR)
 * @route   DELETE /api/contactos/:id
 * @access  Private (ADMINISTRADOR)
 */
const deleteContacto = async (req, res, next) => {
    const { id } = req.params;
    try {
        await prisma.contactos.delete({
            where: {
                id_contacto: parseInt(id)
            }
        });
        res.status(200).json({
            success: true,
            message: 'Contacto eliminado exitosamente'
        });
    } catch (error) {
        if (error.code === 'P2025') { // Código de error de Prisma para 'record not found'
            return res.status(404).json({
                success: false,
                message: 'Contacto no encontrado para eliminar'
            });
        }
        next(error);
    }
};

module.exports = {
    getAllContactos,
    getContactoById,
    createContacto,
    updateContacto,
    deleteContacto
};