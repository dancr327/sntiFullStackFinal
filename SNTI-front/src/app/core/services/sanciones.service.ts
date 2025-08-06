import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sancion } from '../models/sancion.model';

@Injectable({ providedIn: 'root' })
export class SancionesService {
  private apiUrl = 'http://localhost:3000/sanciones';

  constructor(private http: HttpClient) {}

  getSanciones(): Observable<{ success: boolean; data: Sancion[] }> {
    return this.http.get<{ success: boolean; data: Sancion[] }>(this.apiUrl);
  }

  crearSancion(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  getSancionesPorTrabajador(id: number): Observable<{ success: boolean; data: Sancion[] }> {
    return this.http.get<{ success: boolean; data: Sancion[] }>(`${this.apiUrl}/trabajador/${id}`);
  }

  getMisSanciones(estatus?: string): Observable<{ success: boolean; data: Sancion[] }> {
    const params = estatus && estatus !== 'Todas' ? { params: { estatus } } : {};
    return this.http.get<{ success: boolean; data: Sancion[] }>(`${this.apiUrl}/mi-sancion`, params);
  } // Obtener sanciones del usuario autenticado, (pequeño cambio en el endpoint Hecho por Daniel)

  eliminarSancion(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}