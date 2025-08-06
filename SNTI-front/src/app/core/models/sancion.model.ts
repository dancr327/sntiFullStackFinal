export interface Sancion {
  id_sancion: number;
  id_trabajador: number;
  tipo_sancion: string;
  descripcion: string;
  fecha_aplicacion: string; // YYYY-MM-DD
  fecha_fin?: string; // YYYY-MM-DD
  estatus?: string;
  usuario_registro?: string;
  fecha_registro?: string;
  trabajadores: {
    nombre: string;
    apellido_paterno: string;
    apellido_materno?: string;
    identificador: string;
    id_seccion: number;
    seccion?: {
      id_seccion: number;
      estado: string;
      numero_seccion: number;
      ubicacion: string;
      secretario?: string;
    };
  };
}