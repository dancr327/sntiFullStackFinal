export interface Documento {
  id_documento: number;
  tipo_documento: string;
  nombre_archivo: string;
  descripcion?: string;
  ruta_almacenamiento: string;
  fecha_subida: string;
}