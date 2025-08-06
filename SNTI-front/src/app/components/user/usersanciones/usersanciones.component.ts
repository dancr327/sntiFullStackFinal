import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SidebarComponent } from '../sidebar/sidebar.component'; // Importación directa
import { AuthService } from '../../../core/services/auth.service';
import { SancionesService } from '../../../core/services/sanciones.service';
import { Sancion } from '../../../core/models/sancion.model';

@Component({
  selector: 'app-usersanciones',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SidebarComponent // Añadido correctamente
  ],
  templateUrl: './usersanciones.component.html',
  styleUrls: ['./usersanciones.component.css']
})
export class UsersancionesComponent implements OnInit {
  sanciones: Sancion[] = [];
  sancionesFiltradas: Sancion[] = [];
  sancionSeleccionada: Sancion | null = null;
  filtroEstatus: string = 'Todas';
  paginaActual: number = 1;
  itemsPorPagina: number = 10;

  constructor(
    private sancionesService: SancionesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.cargarSanciones();
  }

  cargarSanciones(): void {
    const usuario = this.authService.currentUser;
    if (!usuario) {
      this.sanciones = [];
      this.sancionesFiltradas = [];
      return;
    }
    // Usar el endpoint /sanciones/mi-sancion para el usuario autenticado
    this.sancionesService.getMisSanciones().subscribe({
      next: (resp) => {
        this.sanciones = resp.data || [];
        this.filtrarSanciones();
      },
      error: (err) => {
        this.sanciones = [];
        this.sancionesFiltradas = [];
        console.error('Error al cargar sanciones:', err);
      }
    });
  }

  filtrarSanciones(): void {
    if (this.filtroEstatus === 'Todas') {
      this.sancionesFiltradas = [...this.sanciones];
    } else {
      this.sancionesFiltradas = this.sanciones.filter(
        s => s.estatus === this.filtroEstatus
      );
    }
    this.paginaActual = 1;
  }

  recargarSanciones(): void {
    this.cargarSanciones();
  }

  verDetalles(sancion: Sancion): void {
    this.sancionSeleccionada = sancion;
    const modal = document.getElementById('detalleSancionModal');
    if (modal) (window as any).bootstrap?.Modal.getOrCreateInstance(modal).show();
  }

  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }

  paginaSiguiente(): void {
    if (this.sancionesFiltradas.length >= this.itemsPorPagina) {
      this.paginaActual++;
    }
  }

  get sancionesPaginadas(): Sancion[] {
    const startIndex = (this.paginaActual - 1) * this.itemsPorPagina;
    return this.sancionesFiltradas.slice(startIndex, startIndex + this.itemsPorPagina);
  }

  //metodos para la sidebar
  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  closeSidebar() {
    this.sidebarActive = false;
  }

  get totalActivas(): number {
    return this.sanciones ? this.sanciones.filter(s => s.estatus === 'Activa').length : 0;
  }
  get totalFinalizadas(): number {
    return this.sanciones ? this.sanciones.filter(s => s.estatus === 'Finalizada' || s.estatus === 'Inactiva').length : 0;
  }
  get totalPendientes(): number {
    return this.sanciones ? this.sanciones.filter(s => s.estatus === 'Pendiente').length : 0;
  }
}
