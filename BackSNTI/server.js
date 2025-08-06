// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { PrismaClient } = require('@prisma/client');
const { errorHandler } = require('./middleware');
const path = require('path');
const fs = require('fs');

const publicPdfOnly = require('./middleware/publicPdfOnly');
const publicPdfsPath = path.join(__dirname, 'uploads/publicpdfs');

const indexRoutes = require('./routes'); // Aquí están agrupadas yaa

const seccionRoutes = require('./routes/seccionRoutes'); // Ajusta la ruta si es necesario
const documentosPanelRoutes = require('./routes/documentosPanelRoutes'); // Ajusta la ruta si es necesario
const hijosRoutes = require('./routes/hijosRoutes'); // Ajusta la ruta si es necesario
const authRoutes = require('./routes/authRoutes'); // Ajusta la ruta si es necesario
const sancionesRoutes = require('./routes/sancionesRoutes'); // Ajusta la ruta si es necesario
const permisosRoutes = require('./routes/permisosRoutes'); // Ajusta la ruta si es necesario
const contactosRoutes = require('./routes/contactosRoutes'); 
const cursosRoutes = require('./routes/cursosRoutes'); // Ajusta la ruta si es necesario
const trabajadoresCursosRoutes = require('./routes/trabajadoresCursosRoutes'); // Ajusta la ruta si es necesario
const documentosPublicosRoutes = require('./routes/documentosPublicosRoutes'); // Ajusta la ruta si es necesario
const cambioAdscripcionRoutes = require('./routes/cambioAdscripcionRoutes'); // Ajusta la ruta si es necesario

const galeriaRoutes = require('./routes/galeriaRoutes'); // Ajusta la ruta si es necesario
const trabajadorRoutes = require('./routes/trabajadorRoutes'); // Ajusta la ruta si es necesario
const authMiddleware = require('./middleware/auth'); // Ajusta la ruta si es necesario

// Inicializar app y prisma
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT ||4000;

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de SNTI',
      version: '1.0.0',
      description: 'Documentación de la API del Sistema Nacional de Trabajadores INPI',
      contact: {
        name: 'Equipo de Desarrollo',
        email: 'desarrollo@ejemplo.com',
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Servidor de desarrollo',
      },
    ],
    components: { // <-- Asegúrate de tener la sección 'components'
      securitySchemes: { // <-- Aquí va securitySchemes
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./controllers/*.js', './routes/*.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Middleware globales
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { explorer: true }));

// Rutas de la API
app.use('/api', indexRoutes,);
app.use('/api/auth', authRoutes); // Monta el enrutador con el prefijo /api/auth
app.use('/trabajadores', trabajadorRoutes);
app.use('/secciones', seccionRoutes); // Monta el enrutador con el prefijo /api/secciones
app.use('/documentos', documentosPanelRoutes); 
app.use('/hijos', hijosRoutes); // Monta el enrutador con el prefijo /api/hijos
app.use('/auth', authRoutes); // Monta el enrutador con el prefijo /api/auth
app.use('/sanciones', sancionesRoutes); // Monta el enrutador con el prefijo /api/sanciones
app.use('/permisos', permisosRoutes); // Monta el enrutador con el prefijo /api/permisos
app.use ('/contactos', contactosRoutes); // Monta el enrutador con el prefijo /api/contactos
app.use('/galeria', galeriaRoutes); // Monta el enrutador con el prefijo /api/galeria
app.use('/trabajadores-cursos', trabajadoresCursosRoutes); // Monta el enrutador con el prefijo /api/trabajadores-cursos
app.use('/cursos', cursosRoutes); // Monta el enrutador con el prefijo /api/cursos
app.use('/publicpdfs', documentosPublicosRoutes); // Monta el enrutador con el prefijo /api/documentos-publicos
app.use ('/cambios-adscripcion', cambioAdscripcionRoutes) // Monta el enrutador con el prefijo /api/cambios-adscripcion



// Manejo de errores
app.use(errorHandler);

// Manejo de rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada',
  });
});

// Iniciar servidor
app.listen(PORT, async () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
  console.log(`echale ganas `);
  try {
    await prisma.$connect();
    console.log('Conexión a la base de datos establecida');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  }
});

// Asegurar que la carpeta exista
if (!fs.existsSync(publicPdfsPath)) {
  fs.mkdirSync(publicPdfsPath, { recursive: true });
}

// Exponer carpeta solo para PDFs públicos con el middleware robusto
app.use('/publicpdfs', publicPdfOnly, express.static(publicPdfsPath));

// Manejar cierre limpio
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Conexión a la base de datos cerrada');
  process.exit(0);
});










