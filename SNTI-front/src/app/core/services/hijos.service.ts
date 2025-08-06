import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hijo } from '..//models/hijo.model';

@Injectable({ providedIn: 'root' })
export class HijosService {
  private apiUrl = 'http://localhost:3000/hijos';

  constructor(private http: HttpClient) {}

  crearHijo(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  getMisHijos(): Observable<{ success: boolean; data: Hijo[] }> {
    return this.http.get<{ success: boolean; data: Hijo[] }>(`${this.apiUrl}/mis-hijos`);
  }

  getHijos(trabajador?: number): Observable<{ success: boolean; data: Hijo[] }> {
    const options = trabajador ? { params: { trabajador } } : {};
    return this.http.get<{ success: boolean; data: Hijo[] }>(this.apiUrl, options);
  }

  descargarActa(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/descargar-acta`, { responseType: 'blob' });
  }

  actualizarHijo(id: number, formData: FormData): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, formData);
  }

  eliminarHijo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}