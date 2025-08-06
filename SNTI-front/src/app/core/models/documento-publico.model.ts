// src/app/core/models/documento-publico.model.ts

/**
 * Modelo que representa un documento público descargable.
 * Este tipo se alinea con la respuesta del backend en /publicpdfs.
 */
export interface DocumentoPublico {
  id_documento: number;
  nombre_archivo: string;
  descripcion: string;
  tamano_bytes: string;
  fecha_subida: string;
  mimetype: string;
  url_descarga: string;
}
