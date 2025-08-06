import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TrabajadoresService } from '../../../core/services/trabajadores.service';
import { HijosService } from '../../../core/services/hijos.service';
import { Trabajador } from '../../../core/models/trabajador.model';
import { Hijo } from '../../../core/models/hijo.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-hijos',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './hijos.component.html',
  styleUrl: './hijos.component.css'
})
export class HijosComponent implements OnInit {
  trabajadores: Trabajador[] = [];
  trabajadoresFiltrados: Trabajador[] = [];
  filtroBusqueda = '';
  trabajadorSeleccionado: Trabajador | null = null;
  hijos: Hijo[] = [];

  constructor(
    private trabajadoresService: TrabajadoresService,
    private hijosService: HijosService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.cargarTrabajadores();
  }

  cargarTrabajadores(): void {
    this.trabajadoresService.getTrabajadores().subscribe({
      next: (todos: Trabajador[]) => {
        const seccion = this.auth.currentUser?.seccion?.id_seccion;
        this.trabajadores = seccion ? todos.filter(t => t.id_seccion === seccion) : todos;
        this.filtrarTrabajadores();
      },
      error: () => {
        this.trabajadores = [];
        this.trabajadoresFiltrados = [];
      }
    });
  }

  filtrarTrabajadores(): void {
    const txt = this.filtroBusqueda.toLowerCase().trim();
    this.trabajadoresFiltrados = this.trabajadores.filter(t =>
      (t.nombre + ' ' + t.apellido_paterno + ' ' + (t.apellido_materno || '')).toLowerCase().includes(txt) ||
      t.email.toLowerCase().includes(txt) ||
      t.curp.toLowerCase().includes(txt) ||
      t.numero_empleado.toLowerCase().includes(txt)
    );
  }

  verHijos(t: Trabajador): void {
    this.trabajadorSeleccionado = t;
    this.hijosService.getHijos(t.id_trabajador).subscribe({
      next: resp => this.hijos = resp.data || [],
      error: () => this.hijos = []
    });
    const modalEl = document.getElementById('hijosModal');
    if (modalEl) (window as any).bootstrap?.Modal.getOrCreateInstance(modalEl).show();
  }

  descargarActa(h: Hijo): void {
    this.hijosService.descargarActa(h.id_hijo).subscribe({
      next: blob => {
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
}