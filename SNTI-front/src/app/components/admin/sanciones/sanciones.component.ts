import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { SancionesService } from '../../../core/services/sanciones.service';
import { TrabajadoresService } from '../../../core/services/trabajadores.service';
import { AuthService } from '../../../core/services/auth.service';

import { Sancion } from '../../../core/models/sancion.model';
import { Trabajador } from '../../../core/models/trabajador.model';
import { Usuario } from '../../../core/models/usuario.model';

@Component({
  selector: 'app-sanciones',
  standalone: true,
  imports: [MatIconModule, MatCardModule, CommonModule, FormsModule],
  templateUrl: './sanciones.component.html',
  styleUrl: './sanciones.component.css',
})
export class SancionesComponent implements OnInit {
  filtroBusqueda: string = '';
  sanciones: Sancion[] = [];
  sancionesFiltradas: Sancion[] = [];
  trabajadores: Trabajador[] = [];
  sancionSeleccionada: Sancion | null = null;

  usuarioActual: Usuario | null = null;

  nuevaSancion: any = {
    id_trabajador: '',
    tipo_sancion: '',
    descripcion: '',
    fecha_aplicacion: '',
    fecha_fin: '',
    estatus: 'Activa',
  };

  constructor(
    private sancionesService: SancionesService,
    private trabajadoresService: TrabajadoresService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.usuarioActual = this.authService.currentUser;
    this.cargarSanciones();
    this.cargarTrabajadores();
  }

  cargarTrabajadores(): void {
    this.trabajadoresService.getTrabajadores().subscribe({
      next: (todos: Trabajador[]) => {
        if (this.usuarioActual?.seccion?.id_seccion) {
          this.trabajadores = todos.filter(
            (t: Trabajador) =>
              t.id_seccion === this.usuarioActual!.seccion.id_seccion
          );
        } else if (this.usuarioActual?.seccion?.estado) {
          this.trabajadores = todos.filter(
            (t: Trabajador) =>
              t.seccion?.estado === this.usuarioActual!.seccion.estado
          );
        } else {
          this.trabajadores = todos;
        }
        console.log('Trabajadores cargados:', this.trabajadores);
      },
      error: (err) => {
        this.trabajadores = [];
        console.error('Error al obtener trabajadores:', err);
      },
    });
  }

  cargarSanciones(): void {
    this.sancionesService.getSanciones().subscribe({
      next: (resp) => {
        console.log('Respuesta sanciones:', resp);
        let todos = resp.data || [];
        // Si el usuario es ADMINISTRADOR, mostrar todas las sanciones
        if (this.usuarioActual?.rol === 'ADMINISTRADOR') {
          this.sanciones = todos;
        } else if (this.usuarioActual?.seccion?.id_seccion) {
          this.sanciones = todos.filter(
            (s) =>
              s.trabajadores &&
              s.trabajadores.seccion &&
              s.trabajadores.seccion.id_seccion ===
                this.usuarioActual!.seccion.id_seccion
          );
        } else if (this.usuarioActual?.seccion?.estado) {
          this.sanciones = todos.filter(
            (s) =>
              s.trabajadores &&
              s.trabajadores.seccion &&
              s.trabajadores.seccion.estado ===
                this.usuarioActual!.seccion.estado
          );
        } else {
          // Si no hay filtro aplicable, mostrar todas
          this.sanciones = todos;
        }
        this.sancionesFiltradas = [...this.sanciones];
        console.log('Sanciones cargadas:', this.sanciones);
      },
      error: (err) => {
        this.sanciones = [];
        this.sancionesFiltradas = [];
        console.error('Error al obtener sanciones:', err);
      },
    });
  }

  guardarSancion(): void {
    // Forzar id_trabajador a number antes de enviar
    this.nuevaSancion.id_trabajador = Number(this.nuevaSancion.id_trabajador);
    this.sancionesService.crearSancion(this.nuevaSancion).subscribe({
      next: () => {
        this.cargarSanciones();
        this.resetForm();
        const modalEl = document.getElementById('sancionModal');
        if (modalEl)
          (window as any).bootstrap?.Modal.getInstance(modalEl)?.hide();
        alert('Sanción creada exitosamente.');
      },
      error: (err) => {
        alert('No se pudo guardar la sanción. Intenta nuevamente.');
        console.error(err);
      },
    });
  }

  verDetalles(sancion: Sancion): void {
    this.sancionSeleccionada = sancion;
    const modalEl = document.getElementById('detalleModal');
    if (modalEl)
      (window as any).bootstrap?.Modal.getOrCreateInstance(modalEl).show();
  }

  filtrarSanciones(): void {
    if (!this.filtroBusqueda) {
      this.sancionesFiltradas = [...this.sanciones];
      return;
    }

    const termino = this.filtroBusqueda.toLowerCase();
    this.sancionesFiltradas = this.sanciones.filter(
      (s) =>
        `${s.trabajadores.nombre} ${s.trabajadores.apellido_paterno} ${s.trabajadores.apellido_materno}`
          .toLowerCase()
          .includes(termino) ||
        (s.tipo_sancion ?? '').toLowerCase().includes(termino) ||
        s.descripcion.toLowerCase().includes(termino) ||
        (s.estatus ?? '').toLowerCase().includes(termino)
    );
  }

  resetForm(): void {
    this.nuevaSancion = {
      id_trabajador: '',
      tipo_sancion: '',
      descripcion: '',
      fecha_aplicacion: '',
      fecha_fin: '',
      estatus: 'Activa',
      documento: null,
      fecha_registro: new Date(),
    };
  }
}
