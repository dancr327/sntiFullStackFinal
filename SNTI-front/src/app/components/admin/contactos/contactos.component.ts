import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ContactosService } from '../../../core/services/contactos.service';
import { Contacto } from '../../../core/models/contacto.model';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent implements OnInit {
  contactos: Contacto[] = [];
  nuevoContacto: Partial<Contacto> = { nombre: '', ocupacion: '', correo: '' };
  contactoSeleccionado: Contacto | null = null;

  constructor(private contactosService: ContactosService) {}

  ngOnInit(): void {
    this.cargarContactos();
  }

  cargarContactos(): void {
    this.contactosService.getContactos().subscribe({
      next: resp => this.contactos = resp.data,
      error: err => console.error('Error al cargar contactos', err)
    });
  }

  guardarContacto(): void {
    this.contactosService.crearContacto(this.nuevoContacto).subscribe({
      next: () => {
        this.cargarContactos();
        this.resetForm();
        const m = document.getElementById('contactoModal');
        if (m) (window as any).bootstrap?.Modal.getInstance(m)?.hide();
      },
      error: err => {
        console.error(err);
        alert('No se pudo crear el contacto');
      }
    });
  }

  editar(contacto: Contacto): void {
    this.contactoSeleccionado = { ...contacto };
    const m = document.getElementById('editarModal');
    if (m) (window as any).bootstrap?.Modal.getOrCreateInstance(m).show();
  }

  actualizarContacto(): void {
    if (!this.contactoSeleccionado) return;
    this.contactosService.actualizarContacto(
      this.contactoSeleccionado.id_contacto,
      this.contactoSeleccionado
    ).subscribe({
      next: () => {
        this.cargarContactos();
        const m = document.getElementById('editarModal');
        if (m) (window as any).bootstrap?.Modal.getInstance(m)?.hide();
        this.contactoSeleccionado = null;
      },
      error: err => {
        console.error(err);
        alert('No se pudo actualizar el contacto');
      }
    });
  }

  eliminarContacto(id: number): void {
    if (!confirm('¿Eliminar este contacto?')) return;
    this.contactosService.eliminarContacto(id).subscribe({
      next: () => this.cargarContactos(),
      error: err => {
        console.error(err);
        alert('No se pudo eliminar el contacto');
      }
    });
  }

  resetForm(): void {
    this.nuevoContacto = { nombre: '', ocupacion: '', correo: '' };
  }
}