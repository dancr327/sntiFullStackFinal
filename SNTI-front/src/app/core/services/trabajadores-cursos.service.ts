import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrabajadorCurso } from '..//models/trabajador-curso.model';

@Injectable({ providedIn: 'root' })
export class TrabajadoresCursosService {
  private apiUrl = 'http://localhost:3000/trabajadores-cursos';

  constructor(private http: HttpClient) {}

  getInscripciones(): Observable<{ success: boolean; data: TrabajadorCurso[] }> {
    return this.http.get<{ success: boolean; data: TrabajadorCurso[] }>(this.apiUrl);
  }

  crearInscripcionAdmin(formData: FormData) {
    return this.http.post(`${this.apiUrl}/admin`, formData);
  }

  actualizarInscripcionAdmin(id: number, data: any) {
    return this.http.patch(`${this.apiUrl}/${id}/admin`, data);
  }

  eliminarInscripcion(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  misInscripciones(): Observable<{ success: boolean; data: TrabajadorCurso[] }> {
    return this.http.get<{ success: boolean; data: TrabajadorCurso[] }>(`${this.apiUrl}/mis-cursos`);
  }

  subirDocumento(id: number, formData: FormData) {
    return this.http.patch(`${this.apiUrl}/${id}/documento`, formData);
  }

  descargarDocumento(id: number, tipo: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/descargar/${tipo}`, { responseType: 'blob' });
  }
}