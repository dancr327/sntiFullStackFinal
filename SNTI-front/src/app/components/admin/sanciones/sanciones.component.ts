import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SancionesService } from '../../../core/services/sanciones.service';
import { TrabajadoresService } from '../../../core/services/trabajadores.service';
import { AuthService } from '../../../core/services/auth.service';

import { Sancion } from '../../../core/models/sancion.model';
import { Trabajador } from '../../../core/models/trabajador.model';
import { Usuario } from '../../../core/models/usuario.model';

@Component({
  selector: 'app-sanciones',
  standalone: true,
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './sanciones.component.html',
  styleUrl: './sanciones.component.css'
})
export class SancionesComponent implements OnInit {
  filtroBusqueda: string = '';
  filtroEstatus: string = 'Todas';
  sanciones: Sancion[] = [];
  sancionesActivas: Sancion[] = [];
  sancionesVencidas: Sancion[] = [];
  sancionesActivasFiltradas: Sancion[] = [];
  sancionesVencidasFiltradas: Sancion[] = [];
  trabajadores: Trabajador[] = [];
  sancionSeleccionada: Sancion | null = null;

  usuarioActual: Usuario | null = null;

  nuevaSancion: any = {
    id_trabajador: '',
    tipo_sancion: '',
    descripcion: '',
    fecha_aplicacion: '',
    fecha_fin: '',
    estatus: 'Activa'
  };

  constructor(
    private sancionesService: SancionesService,
    private trabajadoresService: TrabajadoresService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.usuarioActual = this.authService.currentUser;
    this.cargarTrabajadores();
    this.cargarSanciones();
  }

  cargarTrabajadores(): void {
    this.trabajadoresService.getTrabajadores().subscribe({
      next: (resp) => {
        const todos: Trabajador[] = resp || [];
        if (this.usuarioActual?.seccion?.id_seccion) {
          this.trabajadores = todos.filter(
            (t) => t.id_seccion === this.usuarioActual!.seccion.id_seccion
          );
        } else if (this.usuarioActual?.seccion?.estado) {
          this.trabajadores = todos.filter(
            (t) => t.seccion?.estado === this.usuarioActual!.seccion.estado
          );
        } else {
          this.trabajadores = todos;
        }
      },
      error: () => {
        this.trabajadores = [];
      }
    });
  }

  cargarSanciones(): void {
    this.sancionesService.getSanciones().subscribe({
      next: (resp) => {
        this.sanciones = resp.data || [];
        this.categorizarSanciones();
      },
      error: () => {
        this.sanciones = [];
        this.sancionesActivas = [];
        this.sancionesVencidas = [];
        this.sancionesActivasFiltradas = [];
        this.sancionesVencidasFiltradas = [];
      }
    });
  }

   categorizarSanciones(): void {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const ajustar = (fecha: string) => {
      const d = new Date(fecha);
      d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
      return d;
    };

    this.sancionesActivas = this.sanciones.filter(s => {
      if (!s.fecha_fin) return true;
      const fin = ajustar(s.fecha_fin);
      fin.setDate(fin.getDate() + 1);
      return fin.getTime() > hoy.getTime();
    });

    this.sancionesVencidas = this.sanciones.filter(s => {
      if (!s.fecha_fin) return false;
      const fin = ajustar(s.fecha_fin);
      fin.setDate(fin.getDate() + 1);
      return fin.getTime() <= hoy.getTime();
    });

    this.filtrarSanciones();
  }


  guardarSancion(): void {
    const inicio = new Date(this.nuevaSancion.fecha_aplicacion);
    const fin = new Date(this.nuevaSancion.fecha_fin);
    if (inicio > fin) {
      alert('La fecha de finalización no puede ser antes que la fecha de aplicación.');
      return;
    }

    this.sancionesService.crearSancion(this.nuevaSancion).subscribe({
      next: () => {
        this.cargarSanciones();
        this.resetForm();
        const modalEl = document.getElementById('sancionModal');
        if (modalEl) {
          (window as any).bootstrap?.Modal.getInstance(modalEl)?.hide();
        }
        alert('Sanción creada exitosamente.');
      },
      error: (err) => {
        alert('No se pudo guardar la sanción.');
        console.error(err);
      }
    });
  }

  eliminarSancion(id: number): void {
    if (confirm('¿Está seguro de eliminar esta sanción?')) {
      this.sancionesService.eliminarSancion(id).subscribe({
        next: () => this.cargarSanciones(),
        error: (err) => console.error(err)
      });
    }
  }

  verDetalles(sancion: Sancion): void {
    this.sancionSeleccionada = sancion;
    const modalEl = document.getElementById('detalleModal');
    if (modalEl) {
      (window as any).bootstrap?.Modal.getOrCreateInstance(modalEl).show();
    }
  }

  filtrarSanciones(): void {
    const termino = this.filtroBusqueda.toLowerCase();
      const filtrar = (lista: Sancion[]) =>
      lista.filter((s) => {
        const coincideBusqueda =
          !termino ||
          `${s.trabajadores.nombre} ${s.trabajadores.apellido_paterno} ${s.trabajadores.apellido_materno || ''}`
            .toLowerCase()
            .includes(termino) ||
          (s.tipo_sancion ?? '').toLowerCase().includes(termino) ||
          s.descripcion.toLowerCase().includes(termino) ||
          (s.estatus ?? '').toLowerCase().includes(termino);
        const coincideEstatus = this.filtroEstatus === 'Todas' || s.estatus === this.filtroEstatus;
        return coincideBusqueda && coincideEstatus;
      });

    this.sancionesActivasFiltradas = filtrar(this.sancionesActivas);
    this.sancionesVencidasFiltradas = filtrar(this.sancionesVencidas);
  }

  get minFechaAplicacion(): string {
    const hoy = new Date();
    hoy.setMonth(hoy.getMonth() - 3);
    const yyyy = hoy.getFullYear();
    const mm = String(hoy.getMonth() + 1).padStart(2, '0');
    const dd = String(hoy.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  get fechaFinInvalida(): boolean {
    const inicio = this.nuevaSancion.fecha_aplicacion;
    const fin = this.nuevaSancion.fecha_fin;
    return inicio && fin && fin < inicio;
  }

  resetForm(): void {
    this.nuevaSancion = {
      id_trabajador: '',
      tipo_sancion: '',
      descripcion: '',
      fecha_aplicacion: '',
      fecha_fin: '',
      estatus: 'Activa'
    };
  }
}