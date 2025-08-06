import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeccionesService } from '../../core/services/secciones.service';
import { Seccion } from '../../core/models/seccion.model';

@Component({
  selector: 'app-secciones-sindicales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secciones-sindicales.component.html',
  styleUrl: './secciones-sindicales.component.css'
})
export class SeccionesSindicalesComponent implements OnInit {

seccionesPorEstado: { [estado: string]: Seccion[] } = {};

constructor(private seccionesService: SeccionesService) {}

ngOnInit(): void {
    this.cargarSeccionesAgrupadas();
  }

  cargarSeccionesAgrupadas(): void {
    this.seccionesService.getSecciones().subscribe({
      next: (resp) => {
        const agrupadas: { [estado: string]: Seccion[] } = {};
        for (const sec of resp.data) {
          if (!agrupadas[sec.estado]) agrupadas[sec.estado] = [];
          agrupadas[sec.estado].push(sec);
        }
        this.seccionesPorEstado = agrupadas;
      },
      error: (err) => {
        console.error('Error al cargar las secciones:', err);
      },
    });
  }

  seccionesKeys(): string[] {
    return Object.keys(this.seccionesPorEstado || {});
  }

}
