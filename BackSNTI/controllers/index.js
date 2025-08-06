// controllers/index.js


import trabajadorController from './trabajadorController';
import {documentoController} from './documentosPanelController';
import seccionController from './seccionController';
import hijosController from './hijosController'; // Ajusta la ruta si es necesario
import authController from './authController'; // Ajusta la ruta si es necesario
import { permisosController } from './permisosController'; // Ajusta la ruta si es necesario
import {sancionesController} from './sancionesController'; // Ajusta la ruta si es necesario
import {contactosController} from './contactosController'; // Ajusta la ruta si es necesario
import { galeriaController}  from './galeriaController'; // Ajusta la ruta si es necesario
import {cursosController} from './cursosController'; // Ajusta la ruta si es necesario
import {trabajadoresCursosController} from './trabajadoresCursosController'; // Ajusta la ruta si es necesario
import {documentosPublicosController} from './documentosPublicosController'; // Ajusta la ruta si es necesario
import {cambioAdscripcionController} from './cambioAdscripcionController'; // Ajusta la ruta si es necesario



module.exports = {
  trabajadorController,
  userController,
  seccionController,
  documentoController,
  hijosController,
  authController,
  permisosController,
  sancionesController,
  contactosController,
  galeriaController,
  cursosController,
  trabajadoresCursosController,
  documentosPublicosController,
  cambioAdscripcionController
  
};