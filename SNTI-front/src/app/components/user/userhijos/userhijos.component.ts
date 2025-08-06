import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HijosService } from '../../../core/services/hijos.service';
import { Hijo } from '../../../core/models/hijo.model';

@Component({
  selector: 'app-userhijos',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './userhijos.component.html',
  styleUrl: './userhijos.component.css'
})
export class UserhijosComponent implements OnInit {
  hijos: Hijo[] = [];
  hijoSeleccionado: Hijo | null = null;
  editando = false;
  hijoEnEdicion: Hijo | null = null;
  archivo: File | null = null;

  nuevoHijo: any = {
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    fecha_nacimiento: ''
  };

  constructor(private hijosService: HijosService) {}

  ngOnInit(): void {
    this.cargarHijos();
  }

  cargarHijos(): void {
    this.hijosService.getMisHijos().subscribe({
      next: resp => this.hijos = resp.data || [],
      error: () => this.hijos = []
    });
  }

  prepararNuevoHijo(): void {
    this.editando = false;
    this.hijoEnEdicion = null;
    this.nuevoHijo = {
      nombre: '',
      apellido_paterno: '',
      apellido_materno: '',
      fecha_nacimiento: ''
    };
    this.archivo = null;
  }

  onFileSelected(event: any): void {
    this.archivo = event.target.files[0] || null;
  }

  guardarHijo(): void {
    const form = new FormData();
    form.append('nombre', this.nuevoHijo.nombre);
    form.append('apellido_paterno', this.nuevoHijo.apellido_paterno);
    form.append('apellido_materno', this.nuevoHijo.apellido_materno);
    form.append('fecha_nacimiento', this.nuevoHijo.fecha_nacimiento);
    if (this.archivo) form.append('acta', this.archivo);

    const modal = document.getElementById('hijoModal');
    const hide = () => (window as any).bootstrap?.Modal.getOrCreateInstance(modal!).hide();

    if (this.editando && this.hijoEnEdicion) {
      this.hijosService.actualizarHijo(this.hijoEnEdicion.id_hijo, form).subscribe({
        next: () => { hide(); this.cargarHijos(); },
        error: () => alert('No se pudo actualizar el hijo')
      });
    } else {
      this.hijosService.crearHijo(form).subscribe({
        next: () => { hide(); this.cargarHijos(); },
        error: () => alert('No se pudo registrar el hijo')
      });
    }
  }

  editar(h: Hijo): void {
    this.editando = true;
    this.hijoEnEdicion = h;
    this.nuevoHijo = {
      nombre: h.nombre,
      apellido_paterno: h.apellido_paterno,
      apellido_materno: h.apellido_materno,
      fecha_nacimiento: h.fecha_nacimiento
    };
    this.archivo = null;
  }

  verDetalles(h: Hijo): void {
    this.hijoSeleccionado = h;
  }

  descargarActa(h: Hijo): void {
    this.hijosService.descargarActa(h.id_hijo).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = h.documentos?.nombre_archivo || 'acta.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: () => alert('No se pudo descargar el acta')
    });
  }

  eliminar(id: number): void {
    if (!confirm('¿Seguro de eliminar este hijo?')) return;
    this.hijosService.eliminarHijo(id).subscribe({
      next: () => this.cargarHijos(),
      error: () => alert('No se pudo eliminar')
    });
  }
}
