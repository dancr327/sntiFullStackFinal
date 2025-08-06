// scripts/createFirstAdmin.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const createFirstAdmin = async () => {
  try {
    console.log('🔍 Verificando si ya existe un administrador...');
    
    // Verificar si ya existe un administrador
    const adminExistente = await prisma.trabajadores.findFirst({
      where: { rol: 'ADMINISTRADOR' }
    });

    if (adminExistente) {
      console.log('❌ Ya existe un administrador en el sistema:');
      console.log(`   ID: ${adminExistente.id_trabajador}`);
      console.log(`   Identificador: ${adminExistente.identificador}`);
      console.log(`   Nombre: ${adminExistente.nombre} ${adminExistente.apellido_paterno}`);
      return;
    }

    console.log('✅ No se encontró ningún administrador. Procediendo a crear...');

    // Datos del administrador inicial (PERSONALIZA ESTOS DATOS)
    const adminData = {
      identificador: 'admin@tuempresa.com',
      contraseña: 'AdminSeguro12345', // ⚠️ CAMBIAR por una contraseña segura
      nombre: 'Administrador',
      apellido_paterno: 'Principal',
      apellido_materno: 'Sistema',
      fecha_nacimiento: '1985-01-01',
      sexo: 'M',
      curp: 'ADPR850101HDFRND01', // ⚠️ CURP ficticio pero válido - CAMBIAR
      rfc: 'ADPR850101A1B', // ⚠️ RFC ficticio pero válido - CAMBIAR
      email: 'admin@tuempresa.com',
      situacion_sentimental: 'Soltero',
      numero_hijos: 0,
      numero_empleado: '0000000001', // ⚠️ CAMBIAR por formato real
      numero_plaza: '00000001', // ⚠️ CAMBIAR por formato real
      fecha_ingreso: '2024-01-01',
      fecha_ingreso_gobierno: '2024-01-01',
      nivel_puesto: 'DIRECTOR GENERAL',
      nombre_puesto: 'Administrador del Sistema',
      puesto_inpi: 'Director de Sistemas',
      adscripcion: 'Dirección General de Sistemas',
      id_seccion: 1, // ⚠️ ASEGÚRATE de que existe esta sección en tu BD
      nivel_estudios: 'Licenciatura en Sistemas',
      institucion_estudios: 'Universidad Tecnológica',
      certificado_estudios: true,
      plaza_base: 'Permanente'
    };

    console.log('🔒 Encriptando contraseña...');
    // Encriptar contraseña
    const saltRounds = 12;
    const contraseñaHash = await bcrypt.hash(adminData.contraseña, saltRounds);

    console.log('👤 Creando administrador...');
    const nuevoAdmin = await prisma.trabajadores.create({
      data: {
        // Campos de autenticación
        identificador: adminData.identificador,
        password_hash: contraseñaHash, // ← cambio aquí
        intentos_fallidos: 0,
        bloqueado: false,
        rol: 'ADMINISTRADOR',
        
        // Datos personales/laborales
        nombre: adminData.nombre,
        apellido_paterno: adminData.apellido_paterno,
        apellido_materno: adminData.apellido_materno,
        fecha_nacimiento: new Date(adminData.fecha_nacimiento),
        sexo: adminData.sexo,
        curp: adminData.curp,
        rfc: adminData.rfc,
        email: adminData.email,
        situacion_sentimental: adminData.situacion_sentimental,
        numero_hijos: adminData.numero_hijos,
        numero_empleado: adminData.numero_empleado,
        numero_plaza: adminData.numero_plaza,
        fecha_ingreso: new Date(adminData.fecha_ingreso),
        fecha_ingreso_gobierno: new Date(adminData.fecha_ingreso_gobierno),
        nivel_puesto: adminData.nivel_puesto,
        nombre_puesto: adminData.nombre_puesto,
        puesto_inpi: adminData.puesto_inpi,
        adscripcion: adminData.adscripcion,
        id_seccion: adminData.id_seccion,
        nivel_estudios: adminData.nivel_estudios,
        institucion_estudios: adminData.institucion_estudios,
        certificado_estudios: adminData.certificado_estudios,
        plaza_base: adminData.plaza_base
      }
    });

    console.log('');
    console.log('🎉 ¡Administrador inicial creado exitosamente!');
    console.log('==========================================');
    console.log(`📋 ID: ${nuevoAdmin.id_trabajador}`);
    console.log(`👤 Identificador: ${nuevoAdmin.identificador}`);
    console.log(`🔑 Contraseña: ${adminData.contraseña}`);
    console.log(`🎭 Rol: ${nuevoAdmin.rol}`);
    console.log(`📧 Email: ${nuevoAdmin.email}`);
    console.log(`📅 Creado: ${nuevoAdmin.fecha_creacion}`);
    console.log('==========================================');
    console.log('');
    console.log('⚠️  IMPORTANTE:');
    console.log('   • Guarda estas credenciales en un lugar seguro');
    console.log('   • Cambia la contraseña después del primer login');
    console.log('   • Este script se puede ejecutar solo una vez');

  } catch (error) {
    console.error('❌ Error al crear el administrador inicial:');
    
    // Errores específicos más comunes
    if (error.code === 'P2002') {
      console.error('   💥 Error de duplicados: Ya existe un registro con esos datos únicos');
      console.error('      Verifica: CURP, RFC, Email, Número de empleado, etc.');
    } else if (error.code === 'P2003') {
      console.error('   💥 Error de relación: La sección especificada no existe');
      console.error('      Verifica que existe la sección con id_seccion:', adminData.id_seccion);
    } else {
      console.error('   💥 Error:', error.message);
    }
    
    console.error('');
    console.error('🔧 Soluciones posibles:');
    console.error('   1. Verifica que la base de datos esté corriendo');
    console.error('   2. Ejecuta las migraciones de Prisma: npx prisma migrate dev');
    console.error('   3. Verifica que existan las secciones: npx prisma studio');
    console.error('   4. Modifica los datos únicos en el script');
    
  } finally {
    await prisma.$disconnect();
    console.log('🔌 Conexión a la base de datos cerrada');
  }
};

// Ejecutar el script
console.log('🚀 Iniciando creación del administrador inicial...');
createFirstAdmin();