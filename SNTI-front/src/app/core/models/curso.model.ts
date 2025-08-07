export interface Curso {
  id_curso: number;
  codigo_curso: string;
  nombre_curso: string;
  horas_duracion: number;
  estatus?: string;
  documento_constancia_id?: number;
  tipo_documento_curso?: string; // Este campo parece redundante si ya tienes documento_constancia_id
  documentoConstancia?: import('./documento.model').Documento; // Corregido el tipo de importación
  estado?: string;
}