// controllers/bootstrapController.js
const bcrypt = require('bcrypt');
const { PrismaClient, rol_usuario } = require('@prisma/client');
const { validationResult } = require('express-validator');

const prisma = new PrismaClient();

/**
 * CREAR PRIMER ADMINISTRADOR - Solo para bootstrap inicial
 * Este endpoint se auto-desactiva después de crear el primer admin
 */
const crearPrimerAdmin = async (req, res) => {
  try {
    // 1. Verificar si ya existe un administrador
    const adminExistente = await prisma.trabajadores.findFirst({
      where: { rol: rol_usuario.ADMINISTRADOR }
    });

    if (adminExistente) {
      return res.status(403).json({
        success: false,
        message: 'Ya existe un administrador. Endpoint desactivado.',
        codigo: 'ADMIN_YA_EXISTE'
      });
    }

    // 2. Validar token de bootstrap si está configurado
    const bootstrapToken = req.headers['x-bootstrap-token'];
    const expectedToken = process.env.BOOTSTRAP_TOKEN;
    
    if (expectedToken && bootstrapToken !== expectedToken) {
      return res.status(401).json({
        success: false,
        message: 'Token de bootstrap inválido o faltante'
      });
    }

    // 3. Validar errores de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Datos inválidos',
        errors: errors.array()
      });
    }

    // 4. Extraer y normalizar datos
    const {
      identificador,
      contraseña,
      nombre,
      apellido_paterno,
      apellido_materno,
      fecha_nacimiento,
      sexo,
      curp,
      rfc,
      email,
      numero_empleado,
      numero_plaza,
      fecha_ingreso,
      fecha_ingreso_gobierno,
      nivel_puesto,
      nombre_puesto,
      adscripcion,
      id_seccion,
      situacion_sentimental,
      numero_hijos = 0,
      puesto_inpi,
      nivel_estudios,
      institucion_estudios,
      certificado_estudios,
      plaza_base
    } = req.body;

    // 5. Verificar existencia de la sección
    const seccionExiste = await prisma.secciones.findUnique({
      where: { id_seccion: Number(id_seccion) }
    });

    if (!seccionExiste) {
      return res.status(400).json({
        success: false,
        message: 'La sección especificada no existe'
      });
    }

    // 6. Hashear contraseña
    const saltRounds = 12;
    const contraseña_hash = await bcrypt.hash(contraseña, saltRounds);

    // 7. Crear administrador
    const nuevoAdmin = await prisma.trabajadores.create({
      data: {
        identificador: identificador.toLowerCase().trim(),
        contraseña_hash,
        rol: rol_usuario.ADMINISTRADOR,
        nombre: nombre.trim(),
        apellido_paterno: apellido_paterno.trim(),
        apellido_materno: apellido_materno?.trim(),
        fecha_nacimiento: new Date(fecha_nacimiento),
        sexo,
        curp: curp.trim().toUpperCase(),
        rfc: rfc.trim().toUpperCase(),
        email: email.toLowerCase().trim(),
        situacion_sentimental,
        numero_hijos: Number(numero_hijos),
        numero_empleado: numero_empleado.trim(),
        numero_plaza: numero_plaza.trim(),
        fecha_ingreso: new Date(fecha_ingreso),
        fecha_ingreso_gobierno: new Date(fecha_ingreso_gobierno),
        nivel_puesto: nivel_puesto.trim(),
        nombre_puesto: nombre_puesto.trim(),
        puesto_inpi: puesto_inpi?.trim(),
        adscripcion: adscripcion.trim(),
        id_seccion: Number(id_seccion),
        nivel_estudios: nivel_estudios?.trim(),
        institucion_estudios: institucion_estudios?.trim(),
        certificado_estudios: certificado_estudios || false,
        plaza_base: plaza_base?.trim(),
        bloqueado: false,
        fecha_creacion: new Date(),
        ultimo_cambio_password: new Date()
      },
      include: {
        seccion: {
          select: {
            nombre_seccion: true,
            descripcion: true
          }
        }
      }
    });

    // 8. Formatear respuesta
    const adminSinPassword = {
      ...nuevoAdmin,
      contraseña_hash: undefined, // Eliminar campo sensible
      fecha_nacimiento: nuevoAdmin.fecha_nacimiento.toISOString().split('T')[0],
      fecha_ingreso: nuevoAdmin.fecha_ingreso.toISOString().split('T')[0],
      fecha_ingreso_gobierno: nuevoAdmin.fecha_ingreso_gobierno.toISOString().split('T')[0],
      fecha_creacion: nuevoAdmin.fecha_creacion.toISOString(),
      ultimo_cambio_password: nuevoAdmin.ultimo_cambio_password.toISOString()
    };

    res.status(201).json({
      success: true,
      message: 'Administrador creado exitosamente',
      data: {
        trabajador: adminSinPassword,
        advertencia: 'Este endpoint ahora está desactivado'
      }
    });

  } catch (error) {
    console.error('Error creando administrador:', error);

    // Manejo de errores de Prisma
    if (error.code === 'P2002') {
      const campo = error.meta?.target?.[0] || 'campo';
      return res.status(409).json({
        success: false,
        message: `El ${campo} ya está registrado`,
        error_code: 'CAMPO_DUPLICADO'
      });
    }

    // Error general de base de datos
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return res.status(500).json({
        success: false,
        message: `Error de base de datos: ${error.message}`
      });
    }

    // Error genérico
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
};

/**
 * VERIFICAR ESTADO BOOTSTRAP
 * Permite saber si ya existe un administrador
 */
const verificarEstadoBootstrap = async (req, res) => {
  try {
    const adminExistente = await prisma.trabajadores.findFirst({
      where: { rol: rol_usuario.ADMINISTRADOR },
      select: { 
        id_trabajador: true,
        identificador: true,
        fecha_creacion: true,
        seccion: {
          select: {
            nombre_seccion: true
          }
        }
      }
    });

    const respuesta = {
      bootstrap_requerido: !adminExistente,
      admin_existente: !!adminExistente,
      info_admin: adminExistente ? {
        id: adminExistente.id_trabajador,
        identificador: adminExistente.identificador,
        fecha_creacion: adminExistente.fecha_creacion.toISOString(),
        seccion: adminExistente.seccion.nombre_seccion
      } : null
    };

    res.status(200).json({
      success: true,
      data: respuesta
    });

  } catch (error) {
    console.error('Error verificando bootstrap:', error);
    
    res.status(500).json({
      success: false,
      message: 'Error al verificar estado del sistema'
    });
  }
};

module.exports = {
  crearPrimerAdmin,
  verificarEstadoBootstrap
};