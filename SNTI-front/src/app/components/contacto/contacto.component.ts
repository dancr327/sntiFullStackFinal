import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Contacto } from '../../core/models/contacto.model';
import { ContactosService } from '../../core/services/contactos.service';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {
  contactos: Contacto[] = [];

  constructor(private contactosService: ContactosService) {}

  ngOnInit(): void {
    this.cargarContactos();
  }

  cargarContactos(): void {
    this.contactosService.getContactos().subscribe({
      next: (resp) => {
        if (resp.success) {
          this.contactos = resp.data;
        }
      },
      error: (err) => {
        console.error('Error cargando contactos', err);
      }
    });
  }
}
