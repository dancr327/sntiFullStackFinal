import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SeccionesService } from '../../../core/services/secciones.service';
import { Seccion } from '../../../core/models/seccion.model';
import { EstadosMexico } from '../../../core/enums/estados.enum';
@Component({
  selector: 'app-secciones-sindicales',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './secciones-sindicales.component.html',
  styleUrl: './secciones-sindicales.component.css'
})
export class SeccionesSindicalesComponent implements OnInit{
  secciones: Seccion[] = [];
  nuevaSeccion: Partial<Seccion> = {
    numero_seccion: 0,
    estado: '',
    ubicacion: '',
    secretario: ''
  };
  seccionSeleccionada: Seccion | null = null;
  estados = Object.values(EstadosMexico);

  getEstadoNombre(e: unknown): string {
    return typeof e === 'string' ? e.replaceAll('_', ' ') : '';
  }
  constructor(private seccionesService: SeccionesService) {}

  ngOnInit(): void {
    this.cargarSecciones();
  }
  cargarSecciones(): void {
    this.seccionesService.getSecciones().subscribe({
      next: resp => this.secciones = resp.data,
      error: err => console.error('Error al cargar secciones', err)
    });
  }

  guardarSeccion(): void {

    this.seccionesService.crearSeccion(this.nuevaSeccion).subscribe({
      next: () => {
        this.cargarSecciones();
        this.resetForm();
        const m = document.getElementById('seccionModal');
        if (m) (window as any).bootstrap?.Modal.getInstance(m)?.hide();
      },
      error: err => {
        console.error(err);
        alert('No se pudo crear la sección');
      }
    });
  }

  editar(seccion: Seccion): void {
    this.seccionSeleccionada = { ...seccion };
    const m = document.getElementById('editarModal');
    if (m) (window as any).bootstrap?.Modal.getOrCreateInstance(m).show();
  }

  actualizarSeccion(): void {
    if (!this.seccionSeleccionada) return;
    this.seccionesService.actualizarSeccion(this.seccionSeleccionada.id_seccion, this.seccionSeleccionada).subscribe({
      next: () => {
        this.cargarSecciones();
        const m = document.getElementById('editarModal');
        if (m) (window as any).bootstrap?.Modal.getInstance(m)?.hide();
        this.seccionSeleccionada = null;
      },
      error: err => {
        console.error(err);
        alert('No se pudo actualizar la sección');
      }
    });
  }

  eliminarSeccion(id: number): void {
    if (!confirm('¿Eliminar esta sección?')) return;
    this.seccionesService.eliminarSeccion(id).subscribe({
      next: () => this.cargarSecciones(),
      error: err => {
        console.error(err);
        alert('No se pudo eliminar la sección');
      }
    });
  }

  resetForm(): void {
    this.nuevaSeccion = { numero_seccion: 0, estado: '', ubicacion: '', secretario: '' };
  }
}
