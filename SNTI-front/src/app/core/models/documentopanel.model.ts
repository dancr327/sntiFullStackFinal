export interface DocumentoPanel {
  id_documento: number;
  id_trabajador: number;
  tipo_documento: string;
  nombre_archivo: string;
  descripcion: string;
  hash_archivo: string;
  ruta_almacenamiento: string;
  fecha_subida: string; // formato ISO 8601
  tamano_bytes: string; // viene como string del backend
  mimetype: string;
  es_publico: boolean;
}

