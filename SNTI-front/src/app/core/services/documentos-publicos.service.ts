
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentoPublico } from '../models/documento-publico.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentosPublicosService {
  private http = inject(HttpClient);

  // URL relativa que será interceptada por el proxy de Angular (proxy.conf.json)
  // La petición real irá a http://localhost:3000/publicpdfs
  private readonly baseUrl = 'http://localhost:3000/publicpdfs';

  /**
   * Obtiene la lista de documentos públicos desde el backend
   */
  getDocumentosPublicos(): Observable<DocumentoPublico[]> {
    return this.http.get<{ success: boolean; data: DocumentoPublico[] }>(this.baseUrl)
      .pipe(
        // Extrae solo la propiedad 'data' del objeto de respuesta
        map(response => response.data)
      );
  }
}