export interface Hijo {
  id_hijo: number;
  id_trabajador: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  fecha_nacimiento: string;
  vigente: boolean;
  acta_nacimiento_id: number;
  documentos?: {
    id_documento: number;
    nombre_archivo: string;
    ruta_almacenamiento: string;
    mimetype?: string;
    fecha_subida?: string;
  };
}