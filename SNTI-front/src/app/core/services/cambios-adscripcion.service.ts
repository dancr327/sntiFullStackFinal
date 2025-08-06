import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CambioAdscripcion } from '../models/cambio-adscripcion.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CambiosAdscripcionService {
  private readonly apiUrl = `${environment.apiUrl}/cambios-adscripcion`;

  constructor(private http: HttpClient) {}

  /**
   * Obtener todos los cambios de adscripción (admin).
   */
  getCambiosAdscripcion(): Observable<CambioAdscripcion[]> {
    return this.http.get<{ success: boolean; data: CambioAdscripcion[] }>(this.apiUrl).pipe(
      map(resp => resp.data),
      catchError(this.handleError)
    );
  }

  /**
   * Registrar un nuevo cambio de adscripción con documentos.
   * @param formData FormData con todos los campos y archivos
   */
  crearCambioAdscripcion(formData: FormData): Observable<CambioAdscripcion> {
    return this.http.post<{ success: boolean; data: CambioAdscripcion }>(this.apiUrl, formData).pipe(
      map(resp => resp.data),
      catchError(this.handleError)
    );
  }

  /**
   * Eliminar un cambio de adscripción por su id.
   * @param id_cambio ID del cambio a eliminar
   */
  eliminarCambioAdscripcion(id_cambio: number): Observable<any> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${id_cambio}`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Descargar documento de cambio de adscripción (comprobatorio o nombramiento).
   * @param tipo "comprobatorio" | "nombramiento"
   * @param id_cambio ID del cambio de adscripción
   */
  descargarDocumento(tipo: 'comprobatorio' | 'nombramiento', id_cambio: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/descargar/${tipo}/${id_cambio}`, { responseType: 'blob' }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Manejo genérico de errores HTTP
   */
  private handleError(error: HttpErrorResponse) {
    let mensaje = 'Ocurrió un error. Intenta de nuevo.';
    if (error.error?.message) mensaje = error.error.message;
    else if (error.status === 0) mensaje = 'No hay conexión con el servidor.';
    return throwError(() => new Error(mensaje));
  }
}
