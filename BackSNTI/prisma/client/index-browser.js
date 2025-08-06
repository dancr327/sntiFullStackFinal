
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AuditoriaScalarFieldEnum = {
  id_auditoria: 'id_auditoria',
  tabla_afectada: 'tabla_afectada',
  id_registro: 'id_registro',
  accion: 'accion',
  datos_anteriores: 'datos_anteriores',
  datos_nuevos: 'datos_nuevos',
  usuario: 'usuario',
  fecha_registro: 'fecha_registro'
};

exports.Prisma.CambiosadscripcionScalarFieldEnum = {
  id_cambio: 'id_cambio',
  id_trabajador: 'id_trabajador',
  adscripcion_anterior: 'adscripcion_anterior',
  adscripcion_nueva: 'adscripcion_nueva',
  fecha_cambio: 'fecha_cambio',
  motivo: 'motivo',
  documento_respaldo_id: 'documento_respaldo_id',
  usuario_registro: 'usuario_registro',
  fecha_registro: 'fecha_registro'
};

exports.Prisma.CursosScalarFieldEnum = {
  id_curso: 'id_curso',
  codigo_curso: 'codigo_curso',
  nombre_curso: 'nombre_curso',
  horas_duracion: 'horas_duracion',
  estatus: 'estatus'
};

exports.Prisma.DocumentosScalarFieldEnum = {
  id_documento: 'id_documento',
  id_trabajador: 'id_trabajador',
  tipo_documento: 'tipo_documento',
  metadata: 'metadata',
  hash_archivo: 'hash_archivo',
  nombre_archivo: 'nombre_archivo',
  descripcion: 'descripcion',
  tipo_archivo: 'tipo_archivo',
  ruta_almacenamiento: 'ruta_almacenamiento',
  fecha_subida: 'fecha_subida',
  tamano_bytes: 'tamano_bytes',
  es_publico: 'es_publico'
};

exports.Prisma.HijosScalarFieldEnum = {
  id_hijo: 'id_hijo',
  id_trabajador: 'id_trabajador',
  nombre_completo: 'nombre_completo',
  fecha_nacimiento: 'fecha_nacimiento',
  acta_nacimiento_id: 'acta_nacimiento_id',
  vigente: 'vigente'
};

exports.Prisma.PermisosScalarFieldEnum = {
  id_permiso: 'id_permiso',
  id_trabajador: 'id_trabajador',
  tipo_permiso: 'tipo_permiso',
  fecha_inicio: 'fecha_inicio',
  fecha_fin: 'fecha_fin',
  motivo: 'motivo',
  estatus: 'estatus',
  documento_aprobacion_id: 'documento_aprobacion_id',
  fecha_registro: 'fecha_registro'
};

exports.Prisma.SancionesScalarFieldEnum = {
  id_sancion: 'id_sancion',
  id_trabajador: 'id_trabajador',
  tipo_sancion: 'tipo_sancion',
  descripcion: 'descripcion',
  fecha_aplicacion: 'fecha_aplicacion',
  fecha_fin: 'fecha_fin',
  estatus: 'estatus',
  usuario_registro: 'usuario_registro',
  fecha_registro: 'fecha_registro'
};

exports.Prisma.SeccionesScalarFieldEnum = {
  id_seccion: 'id_seccion',
  nombre_seccion: 'nombre_seccion',
  descripcion: 'descripcion'
};

exports.Prisma.TrabajadoresScalarFieldEnum = {
  id_trabajador: 'id_trabajador',
  nombre: 'nombre',
  apellido_paterno: 'apellido_paterno',
  apellido_materno: 'apellido_materno',
  fecha_nacimiento: 'fecha_nacimiento',
  sexo: 'sexo',
  curp: 'curp',
  rfc: 'rfc',
  email: 'email',
  situacion_sentimental: 'situacion_sentimental',
  numero_hijos: 'numero_hijos',
  numero_empleado: 'numero_empleado',
  numero_plaza: 'numero_plaza',
  fecha_ingreso: 'fecha_ingreso',
  fecha_ingreso_gobierno: 'fecha_ingreso_gobierno',
  nivel_puesto: 'nivel_puesto',
  nombre_puesto: 'nombre_puesto',
  puesto_inpi: 'puesto_inpi',
  adscripcion: 'adscripcion',
  id_seccion: 'id_seccion',
  nivel_estudios: 'nivel_estudios',
  institucion_estudios: 'institucion_estudios',
  certificado_estudios: 'certificado_estudios',
  plaza_base: 'plaza_base',
  fecha_actualizacion: 'fecha_actualizacion'
};

exports.Prisma.Trabajadores_cursosScalarFieldEnum = {
  id_trabajador_curso: 'id_trabajador_curso',
  id_trabajador: 'id_trabajador',
  id_curso: 'id_curso',
  fecha_inscripcion: 'fecha_inscripcion',
  calificacion: 'calificacion',
  completado: 'completado',
  fecha_completado: 'fecha_completado',
  certificado_id: 'certificado_id'
};

exports.Prisma.UsuariosScalarFieldEnum = {
  id_usuario: 'id_usuario',
  id_trabajador: 'id_trabajador',
  identificador: 'identificador',
  contraseña_hash: 'contraseña_hash',
  intentos_fallidos: 'intentos_fallidos',
  bloqueado: 'bloqueado',
  fecha_creacion: 'fecha_creacion',
  ultimo_login: 'ultimo_login',
  ultimo_cambio_password: 'ultimo_cambio_password',
  rol: 'rol'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.rol_usuario = exports.$Enums.rol_usuario = {
  Administrador: 'Administrador',
  Recursos_Humanos: 'Recursos_Humanos',
  Empleado: 'Empleado'
};

exports.Prisma.ModelName = {
  auditoria: 'auditoria',
  cambiosadscripcion: 'cambiosadscripcion',
  cursos: 'cursos',
  documentos: 'documentos',
  hijos: 'hijos',
  permisos: 'permisos',
  sanciones: 'sanciones',
  secciones: 'secciones',
  trabajadores: 'trabajadores',
  trabajadores_cursos: 'trabajadores_cursos',
  usuarios: 'usuarios'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
