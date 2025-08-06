import { Trabajador } from './trabajador.model';
import { Documento } from './documento.model';

export interface CambioAdscripcion {
  id_cambio: number;
  id_trabajador: number;
  adscripcion_anterior: string;
  adscripcion_nueva: string;
  motivo: string;
  fecha_cambio: string; // formato ISO (ej: 2024-08-01)
  documento_comprobatorio_id: number;
  documento_nombramiento_id: number;
  usuario_registro: string;
  trabajadores: Trabajador; // información resumida del trabajador
  documentoComprobatorio?: Documento;
  documentoNombramiento?: Documento;
}