import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
// Importa servicio y modelo de trabajadores
import { TrabajadoresService } from '../../../core/services/trabajadores.service';
import { Trabajador } from '../../../core/models/trabajador.model';
import { NgClass, CommonModule } from '@angular/common';
// Importa servicio y modelo de secciones
import { SeccionesService } from '../../../core/services/secciones.service';
import { Seccion } from '../../../core/models/seccion.model';

import { AuthService } from '../../../core/services/auth.service';
import { Usuario } from '../../../core/models/usuario.model';

@Component({
  selector: 'app-trabajadores',
  standalone: true,
  imports: [MatIconModule, RouterLink, FormsModule, NgClass,CommonModule],
  templateUrl: './trabajadores.component.html',
  styleUrl: './trabajadores.component.css',
})
export class TrabajadoresComponent implements OnInit {
  trabajadores: Trabajador[] = [];
  trabajadoresFiltrados: Trabajador[] = [];
  secciones: Seccion[] = [];

  filtroBusqueda: string = '';
  filtroEstado: string = '';
  filtroSeccion: number | '' = '';
  usuarioActual: Usuario | null = null;

  constructor(
    private trabajadoresService: TrabajadoresService,
    private seccionesService: SeccionesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioActual = this.authService.currentUser;
    if (this.usuarioActual?.seccion?.estado) {
      this.filtroEstado = this.usuarioActual.seccion.estado;
    }
    if (this.usuarioActual?.seccion?.id_seccion) {
      this.filtroSeccion = this.usuarioActual.seccion.id_seccion;
    }
    this.cargarSecciones();
    this.cargarTrabajadores();
  }

  cargarSecciones(): void {
    this.seccionesService.getSecciones().subscribe({
      next: (resp) => {
        if (resp.success) {
          this.secciones = resp.data;
        }
      },
      error: (err) => console.error('Error cargando secciones', err),
    });
  }

  cargarTrabajadores(): void {
    this.trabajadoresService.getTrabajadores().subscribe({
      next: (trabajadores) => {
        this.trabajadores = trabajadores || [];
        this.filtrarTrabajadores();
      },
      error: (err) => {
        console.error('Error al obtener trabajadores:', err);
        this.trabajadores = [];
        this.trabajadoresFiltrados = [];
      },
    });
  }

  filtrarTrabajadores(): void {
    const filtroBusquedaLower = this.filtroBusqueda.toLowerCase().trim();

    this.trabajadoresFiltrados = this.trabajadores.filter((t) => {
      const coincideBusqueda =
        (t.nombre + ' ' + t.apellido_paterno + ' ' + (t.apellido_materno || ''))
          .toLowerCase()
          .includes(filtroBusquedaLower) ||
        t.email.toLowerCase().includes(filtroBusquedaLower) ||
        t.curp.toLowerCase().includes(filtroBusquedaLower) ||
        t.numero_empleado.toLowerCase().includes(filtroBusquedaLower) ||
        t.numero_plaza.toLowerCase().includes(filtroBusquedaLower);

      let coincideEstado = true;
      if (this.filtroEstado) {
        coincideEstado = t.seccion?.estado === this.filtroEstado;
      }

      let coincideSeccion = true;
      if (this.filtroSeccion) {
        coincideSeccion = t.id_seccion === Number(this.filtroSeccion);
      }

      return coincideBusqueda && coincideEstado && coincideSeccion;
    });
  }

  detalleTrabajador: Trabajador | null = null;
  verTrabajador(id: number) {
    this.trabajadoresService.getTrabajadorPorId(id).subscribe({
      next: (trabajador) => {
        this.detalleTrabajador = trabajador; // <- SIN .data
      },
      error: (err) => {
        this.detalleTrabajador = null;
        alert('No se pudo cargar el trabajador.');
      },
    });
  }

   puedeModificar(t: Trabajador): boolean {
    return this.usuarioActual?.seccion?.estado === t.seccion?.estado;
  }

  editarTrabajador(id: number) {
    const trabajador = this.trabajadores.find(t => t.id_trabajador === id);
    if (!trabajador || !this.puedeModificar(trabajador)) return;
    this.router.navigate(['/admin/editar-trabajador', id]);
  }

  eliminarTrabajador(id: number) {
    const trabajador = this.trabajadores.find(t => t.id_trabajador === id);
    if (!trabajador || !this.puedeModificar(trabajador)) return;
    if (!confirm('¿Estás seguro de que deseas eliminar este trabajador?')) {
      return;
    }
    this.trabajadoresService.eliminarTrabajador(id).subscribe({
      next: () => {
        this.trabajadores = this.trabajadores.filter(
          (t) => t.id_trabajador !== id
        );
        this.filtrarTrabajadores();
        alert('Trabajador eliminado exitosamente');
      },
      error: (err) => {
        console.error('Error al eliminar trabajador:', err);
        alert('No se pudo eliminar el trabajador. Intenta nuevamente.');
      },
    });
  }

  get estadosUnicos(): string[] {
    const set = new Set(this.secciones.map((s) => s.estado));
    return Array.from(set);
  }

  get seccionesFiltradasPorEstado(): Seccion[] {
    return this.filtroEstado
      ? this.secciones.filter((s) => s.estado === this.filtroEstado)
      : this.secciones;
  }

  onCambioEstado(): void {
    this.filtroSeccion = '';
    this.filtrarTrabajadores();
  }
}
