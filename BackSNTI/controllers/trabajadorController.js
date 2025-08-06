// controllers/trabajadorController.js
const { PrismaClient } = require('@prisma/client');
const { body, param, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
const Roles = require('../enums/roles.enum'); // Asegúrate de que esta ruta sea correcta

// --- Middleware para validar datos de entrada de un trabajador ---
// Validaciones para campos que pueden ser opcionales en una actualización (PUT)
const validarTrabajador = [
    body('identificador')
        .optional()
        .isLength({ max: 150 }).withMessage('El identificador no puede exceder 150 caracteres'),
    body('contraseña')
        .optional()
        .custom(value => {
    // Si viene como undefined o null, o string vacía, es válido (no se actualiza la contraseña)
    if (value === undefined || value === null || value === '') return true;
    // Si tiene valor, debe tener al menos 6 caracteres
    if (value.length < 6) throw new Error('La contraseña debe tener al menos 6 caracteres');
    return true;
  }),
    body('rol').optional().isIn([Roles.ADMINISTRADOR, Roles.USUARIO]).withMessage('Rol no válido. Debe ser ADMINISTRADOR o USUARIO.'),
    body('nombre').optional().isLength({ max: 100 }).withMessage('El nombre no puede exceder 100 caracteres.'),
    body('apellido_paterno').optional().isLength({ max: 100 }).withMessage('El apellido paterno no puede exceder 100 caracteres.'),
    body('apellido_materno').optional().isLength({ max: 100 }).withMessage('El apellido materno no puede exceder 100 caracteres.'),
    body('fecha_nacimiento').optional().isISO8601().withMessage('Formato de fecha de nacimiento inválido (YYYY-MM-DD).'),
    body('sexo').optional().isIn(['M', 'F']).withMessage('Valor de sexo no válido. Debe ser M o F.'),
    body('curp').optional()
        .isLength({ min: 18, max: 18 }).withMessage('El CURP debe tener 18 caracteres.')
        .matches(/^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9A-Z]\d$/).withMessage('Formato de CURP inválido.'),
    body('rfc').optional()
        .isLength({ min: 13, max: 13 }).withMessage('El RFC debe tener 13 caracteres.')
        .matches(/^[A-Z]{4}\d{6}[0-9A-Z]{3}$/).withMessage('Formato de RFC inválido.'),
    body('email').optional().isEmail().withMessage('Formato de email inválido.').isLength({ max: 150 }).withMessage('El email no puede exceder 150 caracteres.'),
    body('situacion_sentimental').optional()
        .isIn(['Soltero', 'Casado', 'Divorciado', 'Viudo', 'Union_Libre']).withMessage('Valor de situación sentimental no válido.'),
    body('numero_hijos').optional().isInt({ min: 0 }).withMessage('Número de hijos inválido. Debe ser un número entero positivo.'),
    body('numero_empleado').optional()
        .isLength({ min: 10, max: 10 }).withMessage('El número de empleado debe tener 10 caracteres.'),
    body('numero_plaza').optional()
        .isLength({ min: 8, max: 8 }).withMessage('El número de plaza debe tener 8 caracteres.'),
    body('fecha_ingreso').optional().isISO8601().withMessage('Formato de fecha de ingreso inválido (YYYY-MM-DD).'),
    body('fecha_ingreso_gobierno').optional().isISO8601().withMessage('Formato de fecha de ingreso al gobierno inválido (YYYY-MM-DD).'),
    body('nivel_puesto').optional().isLength({ max: 50 }).withMessage('El nivel de puesto no puede exceder 50 caracteres.'),
    body('nombre_puesto').optional().isLength({ max: 100 }).withMessage('El nombre del puesto no puede exceder 100 caracteres.'),
    body('puesto_inpi').optional().isLength({ max: 100 }).withMessage('El puesto INPI no puede exceder 100 caracteres.'),
    body('adscripcion').optional().isLength({ max: 100 }).withMessage('La adscripción no puede exceder 100 caracteres.'),
    body('id_seccion')
        .optional()
        .isInt().withMessage('ID de sección inválido. Debe ser un número entero.')
        .toInt(), // Convierte a entero, ajuste hecho para que se pueda usar en el formulario
    body('nivel_estudios').optional().isLength({ max: 100 }).withMessage('El nivel de estudios no puede exceder 100 caracteres.'),
    body('institucion_estudios').optional().isLength({ max: 200 }).withMessage('La institución de estudios no puede exceder 200 caracteres.'),
    body('certificado_estudios').optional().isBoolean().withMessage('Valor de certificado inválido. Debe ser true o false.'),
    body('plaza_base').optional().isLength({ max: 10 }).withMessage('La plaza base no puede exceder 10 caracteres.')
];

// Validaciones específicas para la creación de un trabajador (POST)
const validarCreacionTrabajador = [
    // Campos obligatorios para la creación
    body('identificador').notEmpty().withMessage('El identificador es obligatorio.'),
    body('contraseña').notEmpty().withMessage('La contraseña es obligatoria.').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.'),
    body('nombre').notEmpty().withMessage('El nombre es obligatorio.'),
    body('apellido_paterno').notEmpty().withMessage('El apellido paterno es obligatorio.'),
    body('fecha_nacimiento').notEmpty().withMessage('La fecha de nacimiento es obligatoria.'),
    body('sexo').notEmpty().withMessage('El sexo es obligatorio.'),
    body('curp').notEmpty().withMessage('El CURP es obligatorio.'),
    body('rfc').notEmpty().withMessage('El RFC es obligatorio.'),
    body('email').notEmpty().withMessage('El email es obligatorio.'),
    body('numero_empleado').notEmpty().withMessage('El número de empleado es obligatorio.'),
    body('numero_plaza').notEmpty().withMessage('El número de plaza es obligatorio.'),
    body('fecha_ingreso').notEmpty().withMessage('La fecha de ingreso es obligatoria.'),
    body('fecha_ingreso_gobierno').notEmpty().withMessage('La fecha de ingreso al gobierno es obligatoria.'),
    body('nivel_puesto').notEmpty().withMessage('El nivel de puesto es obligatorio.'),
    body('nombre_puesto').notEmpty().withMessage('El nombre del puesto es obligatorio.'),
    body('adscripcion').notEmpty().withMessage('La adscripción es obligatoria.'),
    body('id_seccion')
        .notEmpty().withMessage('La sección es obligatoria.')
        .isInt().withMessage('ID de sección inválido.')
        .toInt(), // Convierte a entero, ajuste hecho para que se pueda usar en el formulario
    ...validarTrabajador // Combina con las validaciones de formato de los campos ya definidos
];

/**
 * Función auxiliar para verificar campos duplicados antes de crear o actualizar.
 * @param {object} data - Objeto con los datos a verificar.
 * @param {number} excludeId - ID del trabajador a excluir de la búsqueda (para el caso de actualización).
 * @returns {Array<string>} - Un array de nombres de campos duplicados.
 */
const verificarDuplicados = async (data, excludeId = null) => {
    const whereConditions = [];
    if (data.identificador) whereConditions.push({ identificador: data.identificador });
    if (data.curp) whereConditions.push({ curp: data.curp });
    if (data.rfc) whereConditions.push({ rfc: data.rfc });
    if (data.email) whereConditions.push({ email: data.email });
    if (data.numero_empleado) whereConditions.push({ numero_empleado: data.numero_empleado });
    if (data.numero_plaza) whereConditions.push({ numero_plaza: data.numero_plaza });

    if (whereConditions.length === 0) {
        return []; // No hay campos para verificar duplicados
    }

    const existente = await prisma.trabajadores.findFirst({
        where: {
            OR: whereConditions,
            NOT: excludeId ? { id_trabajador: excludeId } : undefined, // Excluye el ID si se está actualizando
        }
    });

    if (!existente) {
        return [];
    }

    let camposDuplicados = [];
    if (existente.identificador === data.identificador && data.identificador) camposDuplicados.push('Identificador');
    if (existente.curp === data.curp && data.curp) camposDuplicados.push('CURP');
    if (existente.rfc === data.rfc && data.rfc) camposDuplicados.push('RFC');
    if (existente.email === data.email && data.email) camposDuplicados.push('Email');
    if (existente.numero_empleado === data.numero_empleado && data.numero_empleado) camposDuplicados.push('Número de empleado');
    if (existente.numero_plaza === data.numero_plaza && data.numero_plaza) camposDuplicados.push('Número de plaza');

    return camposDuplicados;
};


/**
 * @function listarTrabajadores
 * @description Lista todos los trabajadores del sistema. Solo accesible para ADMINISTRADORES.
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 */
const listarTrabajadores = async (req, res) => {
    try {
        const trabajadores = await prisma.trabajadores.findMany({
            select: {
                id_trabajador: true,
                identificador: true,
                rol: true,
                nombre: true,
                apellido_paterno: true,
                apellido_materno: true,
                fecha_nacimiento: true,
                sexo: true,
                curp: true,
                rfc: true,
                email: true,
                situacion_sentimental: true,
                numero_hijos: true,
                numero_empleado: true,
                numero_plaza: true,
                fecha_ingreso: true,
                fecha_ingreso_gobierno: true,
                nivel_puesto: true,
                nombre_puesto: true,
                puesto_inpi: true,
                adscripcion: true,
                id_seccion: true,
                nivel_estudios: true,
                institucion_estudios: true,
                certificado_estudios: true,
                plaza_base: true,
                fecha_creacion: true,
                ultimo_login: true,
                fecha_actualizacion: true,
                // Incluir la relación de sección si es necesario mostrar el nombre de la sección, etc.
                seccion: {
                    select: {
                        numero_seccion: true,
                        estado: true,
                        ubicacion: true,
                        secretario: true
                    }
                }
            }
        });

        return res.status(200).json({
            success: true,
            message: 'Lista de trabajadores obtenida exitosamente.',
            data: trabajadores
        });

    } catch (error) {
        console.error('Error al listar trabajadores:', error);
        return res.status(500).json({ success: false, message: 'Error del servidor', error: error.message });
    }
};

/**
 * @function crearTrabajador
 * @description Crea un nuevo trabajador en el sistema. Solo accesible para ADMINISTRADORES.
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 */
const crearTrabajador = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, message: 'Error de validación', errors: errors.array() });
        }

        const {
            identificador, contraseña, rol,
            nombre, apellido_paterno, apellido_materno, fecha_nacimiento, sexo, curp, rfc,
            email, situacion_sentimental, numero_hijos, numero_empleado, numero_plaza,
            fecha_ingreso, fecha_ingreso_gobierno, nivel_puesto, nombre_puesto, puesto_inpi,
            adscripcion, id_seccion, nivel_estudios, institucion_estudios, certificado_estudios,
            plaza_base
        } = req.body;

        const idSeccionInt = parseInt(id_seccion, 10); // Asegurarse de que id_seccion sea un entero

        // Verificar duplicados antes de la creación
        const camposDuplicados = await verificarDuplicados({
            identificador, curp, rfc, email, numero_empleado, numero_plaza
        });

        if (camposDuplicados.length > 0) {
            return res.status(409).json({
                success: false,
                message: `Ya existe un trabajador con los siguientes datos: ${camposDuplicados.join(', ')}.`,
                errors: [{ msg: `Los campos ${camposDuplicados.join(', ')} ya están registrados.` }]
            });
        }

        // Convertir fechas (asegurarse de que el formato sea correcto para new Date())
        const fechaNacimientoDate = new Date(fecha_nacimiento);
        const fechaIngresoDate = new Date(fecha_ingreso);
        const fechaIngresoGobiernoDate = new Date(fecha_ingreso_gobierno);

        // Encriptar contraseña
        const saltRounds = 12;
        const contraseñaHash = await bcrypt.hash(contraseña, saltRounds);

        const nuevoTrabajador = await prisma.trabajadores.create({
            data: {
                identificador,
                //contraseña_hash: contraseñaHash,
                password_hash: contraseñaHash,
                intentos_fallidos: 0,
                bloqueado: false,
                rol: rol || Roles.USUARIO, // Asigna 'USUARIO' por defecto si no se especifica
                nombre,
                apellido_paterno,
                apellido_materno,
                fecha_nacimiento: fechaNacimientoDate,
                sexo,
                curp,
                rfc,
                email,
                situacion_sentimental,
                numero_hijos: numero_hijos || 0, // Asegura un valor por defecto si es opcional en la entrada
                numero_empleado,
                numero_plaza,
                fecha_ingreso: fechaIngresoDate,
                fecha_ingreso_gobierno: fechaIngresoGobiernoDate,
                nivel_puesto,
                nombre_puesto,
                puesto_inpi,
                adscripcion,
                // Conectar con la sección existente
                seccion: {
                    connect: {
                         id_seccion: idSeccionInt
                    }
                },
                nivel_estudios,
                institucion_estudios,
                certificado_estudios,
                plaza_base,
                fecha_actualizacion: new Date(), // Asignar fecha de creación/actualización
            }
        });

        // Omitir contraseña_hash en la respuesta por seguridad
        // const { contraseña_hash, ...trabajadorSinPassword } = nuevoTrabajador;
        // Omitir password_hash _hash en la respuesta por seguridad
        const { password_hash , ...trabajadorSinPassword } = nuevoTrabajador;

        return res.status(201).json({
            success: true,
            message: 'Trabajador creado exitosamente.',
            data: trabajadorSinPassword
        });

    } catch (error) {
        console.error('Error al crear el trabajador:', error);
        // Manejo específico para errores de clave foránea (ej. id_seccion no existe)
        if (error.code === 'P2025') { // Código de error de Prisma para "record not found" en `connect`
            return res.status(400).json({ success: false, message: 'La sección especificada no existe.', error: error.message });
        }
        return res.status(500).json({ success: false, message: 'Error del servidor.', error: error.message });
    }
};

/**
 * @function miPerfil
 * @description Obtiene el perfil del trabajador autenticado. Accesible para ADMINISTRADORES y USUARIOS.
 * @param {object} req - Objeto de solicitud de Express (req.user contiene el ID del usuario autenticado).
 * @param {object} res - Objeto de respuesta de Express.
 */
const miPerfil = async (req, res) => {
    try {
        const userId = req.user.id; // El ID del usuario se adjunta desde verifyToken

        const trabajador = await prisma.trabajadores.findUnique({
            where: {
                id_trabajador: userId
            },
            select: {
                id_trabajador: true,
                identificador: true,
                rol: true,
                nombre: true,
                apellido_paterno: true,
                apellido_materno: true,
                fecha_nacimiento: true,
                sexo: true,
                curp: true,
                rfc: true,
                email: true,
                situacion_sentimental: true,
                numero_hijos: true,
                numero_empleado: true,
                numero_plaza: true,
                fecha_ingreso: true,
                fecha_ingreso_gobierno: true,
                nivel_puesto: true,
                nombre_puesto: true,
                puesto_inpi: true,
                adscripcion: true,
                id_seccion: true,
                nivel_estudios: true,
                institucion_estudios: true,
                certificado_estudios: true,
                plaza_base: true,
                fecha_creacion: true,
                ultimo_login: true,
                fecha_actualizacion: true,
                seccion: {
                    select: {
                        numero_seccion: true,
                        estado: true,
                        ubicacion: true,
                        // secretario: true
                    }
                }
            }
        });

        if (!trabajador) {
            return res.status(404).json({ success: false, message: 'Perfil de trabajador no encontrado.' });
        }

        return res.status(200).json({
            success: true,
            message: 'Perfil de trabajador obtenido exitosamente.',
            data: trabajador
        });

    } catch (error) {
        console.error('Error al obtener el perfil del trabajador:', error);
        return res.status(500).json({ success: false, message: 'Error del servidor.', error: error.message });
    }
};

/**
 * @function obtenerTrabajadorPorId
 * @description Obtiene un trabajador por su ID. Solo accesible para ADMINISTRADORES.
 * @param {object} req - Objeto de solicitud de Express (req.params.id).
 * @param {object} res - Objeto de respuesta de Express.
 */
const obtenerTrabajadorPorId = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, message: 'Error de validación', errors: errors.array() });
        }

        const trabajadorId = parseInt(req.params.id);

        const trabajador = await prisma.trabajadores.findUnique({
            where: {
                id_trabajador: trabajadorId
            },
            select: {
                id_trabajador: true,
                identificador: true,
                rol: true,
                nombre: true,
                apellido_paterno: true,
                apellido_materno: true,
                fecha_nacimiento: true,
                sexo: true,
                curp: true,
                rfc: true,
                email: true,
                situacion_sentimental: true,
                numero_hijos: true,
                numero_empleado: true,
                numero_plaza: true,
                fecha_ingreso: true,
                fecha_ingreso_gobierno: true,
                nivel_puesto: true,
                nombre_puesto: true,
                puesto_inpi: true,
                adscripcion: true,
                id_seccion: true,
                nivel_estudios: true,
                institucion_estudios: true,
                certificado_estudios: true,
                plaza_base: true,
                fecha_creacion: true,
                ultimo_login: true,
                fecha_actualizacion: true,
                seccion: {
                    select: {
                        numero_seccion: true,
                        estado: true,
                        ubicacion: true,
                        // secretario: true
                    }
                }
            }
        });

        if (!trabajador) {
            return res.status(404).json({ success: false, message: 'Trabajador no encontrado.' });
        }

        return res.status(200).json({
            success: true,
            message: 'Trabajador obtenido exitosamente.',
            data: trabajador
        });

    } catch (error) {
        console.error('Error al obtener trabajador por ID:', error);
        return res.status(500).json({ success: false, message: 'Error del servidor.', error: error.message });
    }
};

/**
 * @function actualizarTrabajador
 * @description Actualiza completamente un trabajador por su ID. Solo accesible para ADMINISTRADORES.
 * @param {object} req - Objeto de solicitud de Express (req.params.id, req.body).
 * @param {object} res - Objeto de respuesta de Express.
 */
const actualizarTrabajador = async (req, res) => {

    console.log('Body recibido:', req.body); //cada vez que te llegue una petición PUT/PATCH, verás el contenido real de lo que llega.

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, message: 'Error de validación', errors: errors.array() });
        }

        const trabajadorId = parseInt(req.params.id);
        const {
            identificador, contraseña, rol,
            nombre, apellido_paterno, apellido_materno, fecha_nacimiento, sexo, curp, rfc,
            email, situacion_sentimental, numero_hijos, numero_empleado, numero_plaza,
            fecha_ingreso, fecha_ingreso_gobierno, nivel_puesto, nombre_puesto, puesto_inpi,
            adscripcion, id_seccion, nivel_estudios, institucion_estudios, certificado_estudios,
            plaza_base
        } = req.body;

        const trabajadorExistente = await prisma.trabajadores.findUnique({
            where: {
                id_trabajador: trabajadorId
            }
        });

        if (!trabajadorExistente) {
            return res.status(404).json({ success: false, message: 'Trabajador no encontrado para actualizar.' });
        }

        // Verificar duplicados para campos que se están actualizando
        const camposDuplicados = await verificarDuplicados({
            identificador, curp, rfc, email, numero_empleado, numero_plaza
        }, trabajadorId);

        if (camposDuplicados.length > 0) {
            return res.status(409).json({
                success: false,
                message: `Los siguientes datos ya existen para otro trabajador: ${camposDuplicados.join(', ')}.`,
                errors: [{ msg: `Los campos ${camposDuplicados.join(', ')} ya están registrados.` }]
            });
        }

        const dataToUpdate = {};

        if (identificador !== undefined) dataToUpdate.identificador = identificador;
        
        if (contraseña !== undefined && contraseña.trim() !== '') {
    const saltRounds = 12;
    // dataToUpdate.contraseña_hash = await bcrypt.hash(contraseña, saltRounds);
    dataToUpdate.password_hash  = await bcrypt.hash(contraseña, saltRounds);
}
        if (rol !== undefined) dataToUpdate.rol = rol;
        if (nombre !== undefined) dataToUpdate.nombre = nombre;
        if (apellido_paterno !== undefined) dataToUpdate.apellido_paterno = apellido_paterno;
        if (apellido_materno !== undefined) dataToUpdate.apellido_materno = apellido_materno;
        if (fecha_nacimiento !== undefined) dataToUpdate.fecha_nacimiento = new Date(fecha_nacimiento);
        if (sexo !== undefined) dataToUpdate.sexo = sexo;
        if (curp !== undefined) dataToUpdate.curp = curp;
        if (rfc !== undefined) dataToUpdate.rfc = rfc;
        if (email !== undefined) dataToUpdate.email = email;
        if (situacion_sentimental !== undefined) dataToUpdate.situacion_sentimental = situacion_sentimental;
        if (numero_hijos !== undefined) dataToUpdate.numero_hijos = numero_hijos;
        if (numero_empleado !== undefined) dataToUpdate.numero_empleado = numero_empleado;
        if (numero_plaza !== undefined) dataToUpdate.numero_plaza = numero_plaza;
        if (fecha_ingreso !== undefined) dataToUpdate.fecha_ingreso = new Date(fecha_ingreso);
        if (fecha_ingreso_gobierno !== undefined) dataToUpdate.fecha_ingreso_gobierno = new Date(fecha_ingreso_gobierno);
        if (nivel_puesto !== undefined) dataToUpdate.nivel_puesto = nivel_puesto;
        if (nombre_puesto !== undefined) dataToUpdate.nombre_puesto = nombre_puesto;
        if (puesto_inpi !== undefined) dataToUpdate.puesto_inpi = puesto_inpi;
        if (adscripcion !== undefined) dataToUpdate.adscripcion = adscripcion;
        if (id_seccion !== undefined) {
            const idSeccionIntUpdate = parseInt(id_seccion, 10);
            dataToUpdate.seccion = {
                connect: {
                    id_seccion: idSeccionIntUpdate
                }
            };
        }
        if (nivel_estudios !== undefined) dataToUpdate.nivel_estudios = nivel_estudios;
        if (institucion_estudios !== undefined) dataToUpdate.institucion_estudios = institucion_estudios;
        if (certificado_estudios !== undefined) dataToUpdate.certificado_estudios = certificado_estudios;
        if (plaza_base !== undefined) dataToUpdate.plaza_base = plaza_base;

        dataToUpdate.fecha_actualizacion = new Date(); // Actualizar la fecha de modificación

        const trabajadorActualizado = await prisma.trabajadores.update({
            where: {
                id_trabajador: trabajadorId
            },
            data: dataToUpdate,
            select: { // Selecciona los campos que quieres devolver
                id_trabajador: true,
                identificador: true,
                rol: true,
                nombre: true,
                apellido_paterno: true,
                apellido_materno: true,
                fecha_nacimiento: true,
                sexo: true,
                curp: true,
                rfc: true,
                email: true,
                situacion_sentimental: true,
                numero_hijos: true,
                numero_empleado: true,
                numero_plaza: true,
                fecha_ingreso: true,
                fecha_ingreso_gobierno: true,
                nivel_puesto: true,
                nombre_puesto: true,
                puesto_inpi: true,
                adscripcion: true,
                id_seccion: true,
                nivel_estudios: true,
                institucion_estudios: true,
                certificado_estudios: true,
                plaza_base: true,
                fecha_creacion: true,
                ultimo_login: true,
                fecha_actualizacion: true,
                seccion: {
                    select: {
                        numero_seccion: true,
                        estado: true,
                        ubicacion: true,
                    }
                }
            }
        });

        return res.status(200).json({
            success: true,
            message: 'Trabajador actualizado exitosamente.',
            data: trabajadorActualizado
        });

    } catch (error) {
        console.error('Error al actualizar el trabajador:', error);
        if (error.code === 'P2025') {
            return res.status(400).json({ success: false, message: 'La sección especificada no existe.', error: error.message });
        }
        return res.status(500).json({ success: false, message: 'Error del servidor.', error: error.message });
    }
};


/**
 * @function listarTrabajadoresPorSeccion
 * @description Devuelve todos los trabajadores de la misma sección del administrador autenticado.
 * Solo accesible para ADMINISTRADORES.
 * @param {object} req - Objeto de solicitud de Express (req.user debe contener id_seccion y rol).
 * @param {object} res - Objeto de respuesta de Express.
 */
const listarTrabajadoresPorSeccion = async (req, res) => {
    try {
        // Validar que el usuario sea ADMINISTRADOR y tenga id_seccion
        if (!req.user || req.user.rol !== Roles.ADMINISTRADOR) {
            return res.status(403).json({ success: false, message: 'Acceso no autorizado. Solo administradores pueden consultar trabajadores por sección.' });
        }
        const id_seccion = req.user.id_seccion;
        if (!id_seccion) {
            return res.status(400).json({ success: false, message: 'El usuario autenticado no tiene sección asignada.' });
        }

        // Obtener trabajadores de la misma sección
        const trabajadores = await prisma.trabajadores.findMany({
            where: { id_seccion },
            select: {
                id_trabajador: true,
                identificador: true,
                nombre: true,
                apellido_paterno: true,
                apellido_materno: true,
                adscripcion: true,
                rol: true,
                email: true,
                puesto_inpi: true,
                nombre_puesto: true,
                fecha_ingreso: true,
                seccion: {
                    select: {
                        id_seccion: true,
                        numero_seccion: true,
                        estado: true,
                        ubicacion: true,
                        secretario: true
                    }
                }
            }
        });

        // Si no hay trabajadores en la sección
        if (!trabajadores || trabajadores.length === 0) {
            return res.status(404).json({ success: false, message: 'No se encontraron trabajadores en la sección.' });
        }

        return res.status(200).json({
            success: true,
            message: 'Trabajadores de la sección obtenidos exitosamente.',
            data: trabajadores
        });
    } catch (error) {
        console.error('Error al obtener trabajadores por sección:', error);
        return res.status(500).json({
            success: false,
            message: 'Error del servidor al obtener trabajadores por sección.',
            error: error.message
        });
    }
};



/**
 * @function eliminarTrabajador
 * @description Elimina un trabajador por su ID. Solo accesible para ADMINISTRADORES.
 * @param {object} req - Objeto de solicitud de Express (req.params.id).
 * @param {object} res - Objeto de respuesta de Express.
 */
const eliminarTrabajador = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, message: 'Error de validación', errors: errors.array() });
        }

        const trabajadorId = parseInt(req.params.id);

        const trabajadorExistente = await prisma.trabajadores.findUnique({
            where: {
                id_trabajador: trabajadorId
            }
        });

        if (!trabajadorExistente) {
            return res.status(404).json({
                success: false,
                message: 'Trabajador no encontrado para eliminar.'
            });
        }

        await prisma.trabajadores.delete({
            where: {
                id_trabajador: trabajadorId
            }
        });

        return res.status(200).json({
            success: true,
            message: 'Trabajador eliminado exitosamente.'
        });

    } catch (error) {
        console.error('Error al eliminar el trabajador:', error);
        if (error.code === 'P2003') { // ForeignKeyConstraintViolation
            return res.status(400).json({
                success: false,
                message: 'No se puede eliminar el trabajador porque tiene registros relacionados (ej. sanciones, permisos, hijos).',
                error: error.message
            });
        }
        return res.status(500).json({ success: false, message: 'Error del servidor.', error: error.message });
    }
};

// Funciones para actualizar el último login y registrar intentos fallidos (si se necesitan)
// Estas funciones suelen ser internas o utilizadas por el controlador de autenticación
const actualizarUltimoLogin = async (trabajadorId) => {
    try {
        await prisma.trabajadores.update({
            where: { id_trabajador: trabajadorId },
            data: { ultimo_login: new Date() },
        });
    } catch (error) {
        console.error('Error al actualizar último login:', error);
        // Podrías loggear el error o manejarlo de otra forma, pero no se propaga a la respuesta del cliente
    }
};

const registrarIntentoFallido = async (identificador) => {
    try {
        const trabajador = await prisma.trabajadores.findUnique({
            where: { identificador },
        });

        if (trabajador) {
            const intentos = (trabajador.intentos_fallidos || 0) + 1;
            const bloqueado = intentos >= 5; // Ejemplo: bloquear después de 5 intentos
            await prisma.trabajadores.update({
                where: { identificador },
                data: {
                    intentos_fallidos: intentos,
                    bloqueado: bloqueado,
                },
            });
            return bloqueado;
        }
        return false;
    } catch (error) {
        console.error('Error al registrar intento fallido:', error);
        return false;
    }
};

module.exports = {
    validarTrabajador,
    validarCreacionTrabajador,
    listarTrabajadores,
    crearTrabajador,
    miPerfil,
    obtenerTrabajadorPorId,
    actualizarTrabajador,
    eliminarTrabajador,
    listarTrabajadoresPorSeccion,
};