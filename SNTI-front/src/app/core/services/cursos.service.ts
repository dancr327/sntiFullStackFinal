import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '..//models/curso.model';

@Injectable({ providedIn: 'root' })
export class CursosService {
  private apiUrl = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) {}

  getCursos(): Observable<{ success: boolean; data: Curso[] }> {
    return this.http.get<{ success: boolean; data: Curso[] }>(this.apiUrl);
  }

  crearCurso(formData: FormData) {
    return this.http.post(this.apiUrl, formData);
  }

  eliminarCursoConPassword(id: number, password: string) {
    return this.http.delete(`${this.apiUrl}/${id}/con-password`, { body: { password } });
  }

  descargarConstancia(id: number) {
    return this.http.get(`${this.apiUrl}/${id}/descargar-constancia`, { responseType: 'blob' });
  }
}