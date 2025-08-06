import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '..//models/contacto.model';

@Injectable({ providedIn: 'root' })
export class ContactosService {
  private apiUrl = 'http://localhost:3000/contactos';

  constructor(private http: HttpClient) {}

  getContactos(): Observable<{ success: boolean; data: Contacto[] }> {
    return this.http.get<{ success: boolean; data: Contacto[] }>(this.apiUrl);
  }
  crearContacto(contacto: Partial<Contacto>) {
    return this.http.post(this.apiUrl, contacto);
  }

  actualizarContacto(id: number, contacto: Partial<Contacto>) {
    return this.http.patch(`${this.apiUrl}/${id}`, contacto);
  }

  eliminarContacto(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}