import { Documento } from './documento.model';

export interface TrabajadorCurso {
  id_trabajador_curso: number;
  id_trabajador: number;
  id_curso: number;
  fecha_inscripcion: string;
  calificacion?: string;
  completado?: boolean;
  fecha_completado?: string;
  documentoInvitacion?: Documento;
  documentoConclusion?: Documento;
  documentoCertificado?: Documento;
  trabajadores?: {
    nombre: string;
    apellido_paterno: string;
    apellido_materno?: string;
    identificador: string;
  };
  cursos?: {
    id_curso: number;
    nombre_curso: string;
  };
}