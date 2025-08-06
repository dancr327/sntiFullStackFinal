// src/app/core/services/galeria.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ImagenGaleria {
  id: number;
  url: string;
  urlWebp: string; // URL para formato WebP
  alt: string;
  title: string;
  size?: 'normal' | 'large-v' | 'large-h'; // Para el layout masonry
  featured?: boolean; // Para el carrusel
}

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  // Simulación de una base de datos de imágenes
  private imagenes: ImagenGaleria[] = [
    { id: 1, url: 'https://placehold.co/1200x500/1A3D63/FFFFFF/png?text=Evento+SNTI+2024', urlWebp: 'https://placehold.co/1200x500/1A3D63/FFFFFF/webp?text=Evento+SNTI+2024', alt: 'Imagen destacada de un evento del sindicato', title: 'Evento Anual SNTI', featured: true },
    { id: 2, url: 'https://placehold.co/1200x500/4A7FA7/FFFFFF/png?text=Asamblea+General', urlWebp: 'https://placehold.co/1200x500/4A7FA7/FFFFFF/webp?text=Asamblea+General', alt: 'Asamblea general de miembros', title: 'Asamblea General', featured: true },
    { id: 3, url: 'https://placehold.co/1200x500/0A1931/FFFFFF/png?text=Logros+Sindicales', urlWebp: 'https://placehold.co/1200x500/0A1931/FFFFFF/webp?text=Logros+Sindicales', alt: 'Celebración de logros sindicales', title: 'Nuestros Logros', featured: true },
    { id: 4, url: 'https://placehold.co/600x400/B3CFE5/333333/webp', urlWebp: 'https://placehold.co/600x400/B3CFE5/333333/webp', alt: 'Compañeros trabajando en equipo', title: 'Trabajo en Equipo', size: 'normal' },
    { id: 5, url: 'https://placehold.co/600x800/1A3D63/FFFFFF/webp', urlWebp: 'https://placehold.co/600x800/1A3D63/FFFFFF/webp', alt: 'Retrato de un miembro del sindicato', title: 'Nuestro Compromiso', size: 'large-v' },
    { id: 6, url: 'https://placehold.co/800x600/4A7FA7/FFFFFF/webp', urlWebp: 'https://placehold.co/800x600/4A7FA7/FFFFFF/webp', alt: 'Instalaciones modernas', title: 'Nuevas Instalaciones', size: 'large-h' },
    { id: 7, url: 'https://placehold.co/600x400/0A1931/FFFFFF/webp', urlWebp: 'https://placehold.co/600x400/0A1931/FFFFFF/webp', alt: 'Firma de convenio', title: 'Acuerdos Importantes', size: 'normal' },
    { id: 8, url: 'https://placehold.co/600x400/1A3D63/FFFFFF/webp', urlWebp: 'https://placehold.co/600x400/1A3D63/FFFFFF/webp', alt: 'Capacitación para miembros', title: 'Capacitación Continua', size: 'normal' },
    { id: 9, url: 'https://placehold.co/800x600/B3CFE5/333333/webp', urlWebp: 'https://placehold.co/800x600/B3CFE5/333333/webp', alt: 'Convivencia sindical', title: 'Convivencia y Deporte', size: 'large-h' },
    { id: 10, url: 'https://placehold.co/600x800/4A7FA7/FFFFFF/webp', urlWebp: 'https://placehold.co/600x800/4A7FA7/FFFFFF/webp', alt: 'Proyectos futuros', title: 'Mirando al Futuro', size: 'large-v' },
    { id: 11, url: 'https://placehold.co/600x400/0A1931/FFFFFF/webp', urlWebp: 'https://placehold.co/600x400/0A1931/FFFFFF/webp', alt: 'Miembros participando en un taller', title: 'Talleres Productivos', size: 'normal' },
    { id: 12, url: 'https://placehold.co/600x400/1A3D63/FFFFFF/webp', urlWebp: 'https://placehold.co/600x400/1A3D63/FFFFFF/webp', alt: 'Detalle de un evento', title: 'Momentos', size: 'normal' },
  ];

  constructor() { }

  getImagenes(): Observable<ImagenGaleria[]> {
    return of(this.imagenes).pipe(delay(500));
  }
}