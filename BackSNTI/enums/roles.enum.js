
// enums/roles.enum.js
/**
 * Enumeración de roles de usuario
 */
const Roles = {
  ADMINISTRADOR: 'ADMINISTRADOR',
  USUARIO: 'USUARIO'
};

// Congelar el objeto para evitar modificaciones
Object.freeze(Roles);

module.exports = Roles;