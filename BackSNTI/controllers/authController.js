const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { validationResult } = require('express-validator');

const prisma = new PrismaClient();

/**
 * @function generateToken
 * @description Genera un token JWT para el usuario autenticado.
 * @param {Object} userData - Objeto con los datos del usuario (id_trabajador, identificador, email, rol, nombre).
 * @returns {string} El token JWT generado.
 */
const generateToken = (userData) => {
  // Asegúrate de que los campos del payload existan en tu objeto userData
  const payload = {
    id: userData.id_trabajador,        // ID del trabajador
    identificador: userData.identificador, // Puede ser CURP o email
    email: userData.email,             // Email del trabajador
    role: userData.rol,                 // Rol del trabajador (ADMINISTRADOR, USUARIO, etc.)
    nombre: userData.nombre            // Nombre del trabajador
    // Puedes añadir más campos al payload si son necesarios para tu aplicación
  };

  // console.log("Payload para JWT:", payload); // Línea de depuración opcional
  // console.log("JWT_SECRET cargado:", process.env.JWT_SECRET ? "Sí" : "No"); // Línea de depuración opcional
  // console.log("JWT_EXPIRES_IN:", process.env.JWT_EXPIRES_IN || '24h'); // Línea de depuración opcional

  if (!process.env.JWT_SECRET) {
    console.error("ERROR: JWT_SECRET no está definido en las variables de entorno.");
    throw new Error("La clave secreta JWT no está configurada.");
  }

  return jwt.sign(
    payload,
    process.env.JWT_SECRET, // Asegúrate de que JWT_SECRET esté definido en tu .env
    { expiresIn: process.env.JWT_EXPIRES_IN || '24h' } // Tiempo de expiración del token
  );
};

/**
 * @function login
 * @description Autentica a un usuario y genera un token JWT si las credenciales son válidas.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 */
const login = async (req, res) => {
  try {
    // Validar errores de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Datos inválidos',
        errors: errors.array()
      });
    }

    const { identificador, contraseña } = req.body;

    // Buscar trabajador por identificador (puede ser email o lo que uses como identificador único)
    const trabajador = await prisma.trabajadores.findUnique({
  where: { identificador: identificador.toLowerCase() },
  include: {
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

    // Verificar si existe el trabajador
    if (!trabajador) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas'
      });
    }

    // Verificar si la cuenta está bloqueada
    if (trabajador.bloqueado) {
      return res.status(423).json({
        success: false,
        message: 'Cuenta bloqueada. Contacte al administrador.',
        codigo: 'CUENTA_BLOQUEADA'
      });
    }

    // Depuración de contraseñas (solo para desarrollo, ¡eliminar en producción!)
    // console.log("Contraseña recibida (sin hashear):", contraseña);
    // console.log("Contraseña hasheada en DB:", trabajador.password_hash);
    // Verificar contraseña
    const contraseñaValida = await bcrypt.compare(contraseña, trabajador.password_hash );

    // console.log("Resultado de bcrypt.compare:", contraseñaValida); // Línea de depuración opcional

    if (!contraseñaValida) {
      // Incrementar intentos fallidos
      const nuevosIntentos = (trabajador.intentos_fallidos || 0) + 1;
      const cuentaBloqueada = nuevosIntentos >= 5; // Limite de 5 intentos fallidos

      await prisma.trabajadores.update({
        where: { id_trabajador: trabajador.id_trabajador },
        data: {
          intentos_fallidos: nuevosIntentos,
          bloqueado: cuentaBloqueada
        }
      });

      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas',
        intentos_restantes: Math.max(0, 5 - nuevosIntentos)
      });
    }

    // Login exitoso - actualizar datos del trabajador
    await prisma.trabajadores.update({
      where: { id_trabajador: trabajador.id_trabajador },
      data: {
        ultimo_login: new Date(),
        intentos_fallidos: 0,
        bloqueado: false
      }
    });

    // Generar token JWT
    const token = generateToken(trabajador);

    // Preparar datos del usuario para la respuesta (excluyendo información sensible)
    const userData = {
      id: trabajador.id_trabajador,
      identificador: trabajador.identificador,
      nombre: trabajador.nombre,
      apellido_paterno: trabajador.apellido_paterno,
      apellido_materno: trabajador.apellido_materno,
      email: trabajador.email,
      rol: trabajador.rol,
      numero_empleado: trabajador.numero_empleado,
      puesto: trabajador.nombre_puesto,
      seccion: trabajador.seccion, // Incluye la información de la sección
      ultimo_login: new Date()
    };

    res.status(200).json({
      success: true,
      message: 'Login exitoso',
      data: {
        token,
        usuario: userData,
        expires_in: process.env.JWT_EXPIRES_IN || '24h' // Informa el tiempo de expiración
      }
    });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
};

/**
 * @function verificarToken
 * @description Valida si el token JWT proporcionado es válido y devuelve la información del usuario.
 * Requiere el middleware verifyToken antes de ejecutarse.
 * @param {Object} req - Objeto de solicitud de Express (espera `req.user` del middleware).
 * @param {Object} res - Objeto de respuesta de Express.
 */
const verificarToken = async (req, res) => {
  try {
    // El middleware verifyToken ya validó el token y añadió req.user (payload decodificado)
    const usuario = await prisma.trabajadores.findUnique({
      where: { id_trabajador: req.user.id },
      select: {
        id_trabajador: true,
        identificador: true,
        nombre: true,
        apellido_paterno: true,
        apellido_materno: true,
        email: true,
        rol: true,
        numero_empleado: true,
        ultimo_login: true,
        bloqueado: true,
        seccion: {
          select: {
            nombre_seccion: true,
            descripcion: true
          }
        }
      }
    });

    if (!usuario) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    if (usuario.bloqueado) {
      return res.status(423).json({
        success: false,
        message: 'Cuenta bloqueada',
        codigo: 'CUENTA_BLOQUEADA'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Token válido',
      data: {
        usuario,
        token_info: {
          expires_at: new Date(req.user.exp * 1000) // Calcula la fecha de expiración
        }
      }
    });

  } catch (error) {
    console.error('Error al verificar token:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
};

/**
 * @function logout
 * @description Realiza el "logout" del lado del cliente para sesiones JWT.
 * En JWT, el logout efectivo se maneja eliminando el token del lado del cliente.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 */
const logout = async (req, res) => {
  try {
    // En JWT stateless, el logout es del lado del cliente (eliminando el token)
    // Opcionalmente, puedes registrar el logout en logs del servidor si es necesario.

    res.status(200).json({
      success: true,
      message: 'Logout exitoso',
      data: {
        mensaje: 'Sesión cerrada correctamente'
      }
    });

  } catch (error) {
    console.error('Error en logout:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
};

/**
 * @function generateTestToken
 * @description Genera un token JWT de prueba para un usuario específico.
 * **SOLO PARA USO EN DESARROLLO/PRUEBAS. DEBE DESHABILITARSE EN PRODUCCIÓN.**
 * @param {Object} req - Objeto de solicitud de Express (espera `id_trabajador` y `rol` en `req.body`).
 * @param {Object} res - Objeto de respuesta de Express.
 */
const generateTestToken = async (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({
      success: false,
      message: 'Esta funcionalidad no está disponible en producción.'
    });
  }

  const { id_trabajador, rol } = req.body; // Puedes pasar el rol deseado para el token de prueba

  if (!id_trabajador || !rol) {
    return res.status(400).json({
      success: false,
      message: 'Se requiere id_trabajador y rol para generar un token de prueba.'
    });
  }

  try {
    const trabajador = await prisma.trabajadores.findUnique({
      where: { id_trabajador: parseInt(id_trabajador) },
      select: {
        id_trabajador: true,
        identificador: true,
        email: true,
        rol: true,
        nombre: true
      }
    });

    if (!trabajador) {
      return res.status(404).json({
        success: false,
        message: 'Trabajador no encontrado para generar token de prueba.'
      });
    }

    // Sobrescribe el rol del usuario con el que se pasó en el cuerpo,
    // para poder generar tokens de diferentes roles para el mismo usuario.
    const userForToken = { ...trabajador, rol: rol };

    const token = generateToken(userForToken);

    res.status(200).json({
      success: true,
      message: 'Token de prueba generado exitosamente',
      data: {
        token,
        usuario: {
          id: userForToken.id_trabajador,
          identificador: userForToken.identificador,
          nombre: userForToken.nombre,
          email: userForToken.email,
          rol: userForToken.rol
        },
        expires_in: process.env.JWT_EXPIRES_IN || '24h'
      }
    });

  } catch (error) {
    console.error('Error al generar token de prueba:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor al generar token de prueba.'
    });
  }
};

/**
 * @function generateCustomTestToken
 * @description Genera un token JWT de prueba con datos personalizados.
 * **SOLO PARA USO EN DESARROLLO/PRUEBAS. DEBE DESHABILITARSE EN PRODUCCIÓN.**
 * @param {Object} req - Objeto de solicitud de Express (espera datos de usuario en `req.body`).
 * @param {Object} res - Objeto de respuesta de Express.
 */
const generateCustomTestToken = async (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({
      success: false,
      message: 'Esta funcionalidad no está disponible en producción.'
    });
  }

  // Datos por defecto para el token de prueba si no se proporcionan
  const defaultUserData = {
    id_trabajador: 9999, // ID de prueba
    identificador: `testuser_${Date.now()}@example.com`,
    nombre: 'Usuario',
    apellido_paterno: 'De',
    apellido_materno: 'Prueba',
    email: `testuser_${Date.now()}@example.com`,
    role: 'USUARIO', // Rol por defecto
    numero_empleado: 'TEST001',
    puesto: 'Ingeniero de Software',
    seccion: { nombre_seccion: 'Desarrollo', descripcion: 'Equipo de desarrollo' }
  };

  const {
    id, identificador, nombre, apellido_paterno, apellido_materno, email, rol,
    numero_empleado, puesto, seccion, expiresIn
  } = req.body;

  // Combinar datos por defecto con los personalizados
  const userDataForToken = {
    id_trabajador: id || defaultUserData.id_trabajador,
    identificador: identificador || defaultUserData.identificador,
    nombre: nombre || defaultUserData.nombre,
    apellido_paterno: apellido_paterno || defaultUserData.apellido_paterno,
    apellido_materno: apellido_materno || defaultUserData.apellido_materno,
    email: email || defaultUserData.email,
    rol: rol || defaultUserData.rol,
    numero_empleado: numero_empleado || defaultUserData.numero_empleado,
    puesto: puesto || defaultUserData.puesto,
    seccion: seccion || defaultUserData.seccion
  };

  try {
    // Generar token con los datos personalizados o por defecto
    const token = jwt.sign(
      {
        id: userDataForToken.id_trabajador,
        identificador: userDataForToken.identificador,
        email: userDataForToken.email,
        rol: userDataForToken.rol,
        nombre: userDataForToken.nombre
      },
      process.env.JWT_SECRET,
      { expiresIn: expiresIn || process.env.JWT_EXPIRES_IN || '24h' }
    );

    res.status(200).json({
      success: true,
      message: 'Token personalizado de prueba generado exitosamente',
      data: {
        token,
        usuario: userDataForToken,
        expires_in: expiresIn || process.env.JWT_EXPIRES_IN || '24h'
      }
    });

  } catch (error) {
    console.error('Error al generar token personalizado de prueba:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor al generar token personalizado de prueba.'
    });
  }
};

module.exports = {
  login,
  verificarToken,
  logout,
  generateTestToken,
  generateCustomTestToken // ¡Aquí está la exportación que faltaba!
};