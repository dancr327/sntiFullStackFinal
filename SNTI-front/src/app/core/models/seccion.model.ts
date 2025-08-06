export interface Seccion {
    id_seccion: number;
    numero_seccion: number;
    estado: string; // si usas enum también cámbialo a ese tipo
    ubicacion: string;
    secretario?: string;
    numero_trabajadores?: number;
}
