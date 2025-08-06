export interface Usuario {
  id: number;
  identificador: string;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  email: string;
  rol: 'ADMINISTRADOR' | 'USUARIO';
  numero_empleado: string;
  puesto: string;
  seccion: {
    id_seccion: number;
    numero_seccion: number;
    estado: string;
    ubicacion: string;
    secretario?: string;
    // Si tienes más campos, agrégalos aquí
  };
  ultimo_login: string;
}