// validators/authValidator.js
const { body } = require('express-validator');

/**
 * Validaciones para el login
 */
const loginValidation = [
  body('identificador')
    .notEmpty()
    .withMessage('El identificador es requerido')
    .isLength({ min: 3, max: 150 })
    .withMessage('El identificador debe tener entre 3 y 150 caracteres')
    .trim(),
  
  body('contraseña')
    .notEmpty()
    .withMessage('La contraseña es requerida')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres')
];

/**
 * Validaciones para desbloquear cuenta
 */
const desbloquearCuentaValidation = [
  body('identificador')
    .notEmpty()
    .withMessage('El identificador es requerido')
    .isLength({ min: 3, max: 150 })
    .withMessage('El identificador debe tener entre 3 y 150 caracteres')
    .trim()
];

module.exports = {
  loginValidation,
  desbloquearCuentaValidation
};