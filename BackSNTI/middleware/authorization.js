// martosam-backsnti/middleware/authorization.js
const Roles = require('../enums/roles.enum'); // Línea 2

const hasRole = (allowedRoles) => { // Línea 4
    // Línea 5 (vacía)
    // Línea 6 (vacía)
    // Línea 7 (vacía)
    // Línea 8 (vacía)

    // ...existing code...
if (!Array.isArray(allowedRoles)) {
    console.trace('TRACE: allowedRoles no es un array');
    console.error('ERROR: allowedRoles no es un array, su valor es:', allowedRoles);
    throw new Error('Los roles deben ser un array');
}

// ...existing code...
    return (req, res, next) => {
        const userRole = req.user?.role;

        if (!userRole) {
            return res.status(403).json({
                success: false,
                message: 'Acceso denegado. Rol no definido en el token'
            });
        }

        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({
                success: false,
                message: `Acceso prohibido. Rol requerido: ${allowedRoles.join(', ')}`
            });
        }

        next();
    };
};

module.exports = { hasRole };