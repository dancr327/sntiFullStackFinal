import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Trabajador } from '../models/trabajador.model';
import { environment } from './../../../../src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrabajadoresService {
  private readonly apiUrl = `${environment.apiUrl}/trabajadores`;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene los trabajadores de la sección del administrador autenticado.
   */
  getTrabajadoresDeMiSeccion(): Observable<Trabajador[]> {
    return this.http.get<{ success: boolean; data: Trabajador[] }>(`${this.apiUrl}/seccion`).pipe(
      map(resp => resp.data),
      catchError(this.handleError)
    );
  }

  /**
   * Manejo genérico de errores HTTP.
   */
  private handleError(error: HttpErrorResponse) {
    let mensaje = 'Ocurrió un error al obtener los trabajadores.';
    if (error.error?.message) mensaje = error.error.message;
    else if (error.status === 0) mensaje = 'No hay conexión con el servidor.';
    return throwError(() => new Error(mensaje));
  }
}
