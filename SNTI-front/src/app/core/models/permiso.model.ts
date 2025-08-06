// core/models/permiso.model.ts
export interface Permiso {
  id_permiso: number;
  id_trabajador: number;
  tipo_permiso: string;
  motivo: string;
  fecha_inicio: string;
  fecha_fin: string;
  estatus: string;
  // ...otros campos...
  trabajadores: {
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    identificador: string;
    id_seccion: number;
    seccion?: {         // 👈 OBLIGATORIO para que funcione el filtro
      id_seccion: number;
      estado: string;
      numero_seccion: number;
      ubicacion: string;
      secretario?: string;
    };
  };
  documentos?: {
    id_documento: number;
    nombre_archivo: string;
    ruta_almacenamiento: string;
    tipo_documento: string;
    fecha_subida: string;
  };

  // ...otros campos si tienes...
}
