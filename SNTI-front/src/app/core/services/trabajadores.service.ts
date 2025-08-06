import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trabajador } from '../models/trabajador.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TrabajadoresService {
  private apiUrl = `${environment.apiUrl}/trabajadores`;

  constructor(private http: HttpClient) {}

  /** Obtener trabajadores de mi sección (admin/user) */
  getTrabajadoresDeMiSeccion(): Observable<Trabajador[]> {
    return this.http.get<{ success: boolean; data: Trabajador[] }>(`${this.apiUrl}/seccion`).pipe(
      map(resp => resp.data)
    );
  }

  /** Crear un nuevo trabajador (admin) */
  crearTrabajador(trabajador: Trabajador): Observable<Trabajador> {
    return this.http.post<{ success: boolean; data: Trabajador }>(this.apiUrl, trabajador).pipe(
      map(resp => resp.data)
    );
  }

  /** Obtener todos los trabajadores (admin) */
  getTrabajadores(): Observable<Trabajador[]> {
    return this.http.get<{ success: boolean; data: Trabajador[] }>(this.apiUrl).pipe(
      map(resp => resp.data)
    );
  }

  /** Obtener el perfil del trabajador logeado (user) */
  getMiPerfil(): Observable<Trabajador> {
    return this.http.get<{ success: boolean; data: Trabajador }>(`${this.apiUrl}/mi-perfil`).pipe(
      map(resp => resp.data)
    );
  }

  /** Obtener un trabajador por ID (admin) */
  getTrabajadorPorId(id: number): Observable<Trabajador> {
    return this.http.get<{ success: boolean; data: Trabajador }>(`${this.apiUrl}/${id}`).pipe(
      map(resp => resp.data)
    );
  }

  /** Actualizar trabajador por ID (admin) */
  actualizarTrabajador(id: number, trabajador: Partial<Trabajador>): Observable<Trabajador> {
    return this.http.put<{ success: boolean; data: Trabajador }>(`${this.apiUrl}/${id}`, trabajador).pipe(
      map(resp => resp.data)
    );
  }

  /** Eliminar trabajador por ID (admin) */
  eliminarTrabajador(id: number): Observable<any> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${id}`);
  }
}
