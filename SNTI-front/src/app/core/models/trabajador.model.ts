// core/models/trabajador.model.ts
import { EstadosMexico } from '../enums/estados.enum';
export interface Trabajador {
  id_trabajador: number;
  identificador: string;
  contraseña: string; // sólo para crear/actualizar
  rol?: 'ADMINISTRADOR' | 'USUARIO';
  nombre: string;
  apellido_paterno: string;
  apellido_materno?: string;
  fecha_nacimiento: string; // formato YYYY-MM-DD
  sexo: 'M' | 'F';
  curp: string;
  rfc: string;
  email: string;
  situacion_sentimental?:
    | 'Soltero'
    | 'Casado'
    | 'Divorciado'
    | 'Viudo'
    | 'Union_Libre';
  numero_hijos?: number;
  numero_empleado: string;
  numero_plaza: string;
  fecha_ingreso: string;
  fecha_ingreso_gobierno: string;
  nivel_puesto: string;
  nombre_puesto: string;
  puesto_inpi?: string;
  adscripcion: string;
  id_seccion: number;
  nivel_estudios?: string;
  institucion_estudios?: string;
  certificado_estudios?: boolean;
  plaza_base?: string;
  //datos adicionales

  fecha_creacion?: string;
  ultimo_login?: string;
  fecha_actualizacion?: string;

  // ¡Esto es importante! Relación con secciones:
  seccion: {
    id_seccion: number;
    numero_seccion: number;
    estado: string; // si usas enum también cámbialo a ese tipo
    ubicacion: string;
    secretario?: string;
  };
}
