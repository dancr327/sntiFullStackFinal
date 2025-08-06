import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { DocumentoPanel } from '../models/documentopanel.model';
import { environment } from '../../../../src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DocumentosPanelService {
  private apiUrl = 'http://localhost:3000/documentos'; 

  constructor(private http: HttpClient) {}

  /**
   * Obtiene los documentos del usuario autenticado
   */
  getMisDocumentos(): Observable<DocumentoPanel[]> {
    return this.http.get<{ success: boolean; data: DocumentoPanel[] }>(
      `${this.apiUrl}/mis-documentos`
    ).pipe(map((response: { data: any; }) => response.data));
  }

  /**
   * Sube o reemplaza un documento personal
   */
  uploadDocumento(tipoDocumento: string, archivo: File): Observable<DocumentoPanel> {
    const formData = new FormData();
    formData.append('tipo_documento', tipoDocumento);
    formData.append('archivo', archivo);

    return this.http.post<{ success: boolean; data: DocumentoPanel }>(
      `${this.apiUrl}`,
      formData
    ).pipe(map(response => response.data));
  }

  /**
   * Descarga un documento por su ID
   */
  descargarDocumento(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/descargar`, {
      responseType: 'blob',
    });
  }

  /**
   * Elimina un documento por su ID
   */
  eliminarDocumento(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  /**
   * (ADMIN) Obtiene documentos por ID de trabajador
   */
  getDocumentosPorTrabajador(idTrabajador: number): Observable<DocumentoPanel[]> {
    const params = new HttpParams().set('trabajador', idTrabajador);
    return this.http.get<{ success: boolean; data: DocumentoPanel[] }>(
      `${this.apiUrl}`,
      { params }
    ).pipe(map(response => response.data));
  }
}
