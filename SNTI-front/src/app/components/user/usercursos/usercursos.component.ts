import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrabajadoresCursosService } from '../../../core/services/trabajadores-cursos.service';
import { TrabajadorCurso } from '../../../core/models/trabajador-curso.model';

@Component({
  selector: 'app-usercursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usercursos.component.html',
  styleUrl: './usercursos.component.css'
})
export class UsercursosComponent implements OnInit {
  inscripciones: TrabajadorCurso[] = [];
  inscripcionSel: TrabajadorCurso | null = null;

  constructor(private trabajadoresCursosService: TrabajadoresCursosService) {}

  ngOnInit(): void {
    this.trabajadoresCursosService.misInscripciones().subscribe({
      next: resp => this.inscripciones = resp.data || [],
      error: () => this.inscripciones = []
    });
  }
  abrirDetalle(i: TrabajadorCurso) {
    this.inscripcionSel = i;
    const modalEl = document.getElementById('detalleUserModal');
    if (modalEl) (window as any).bootstrap?.Modal.getOrCreateInstance(modalEl).show();
  }

  descargar(tipo: string) {
    if (!this.inscripcionSel) return;
    this.trabajadoresCursosService.descargarDocumento(this.inscripcionSel.id_trabajador_curso, tipo).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${this.inscripcionSel?.cursos?.nombre_curso || 'documento'}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
