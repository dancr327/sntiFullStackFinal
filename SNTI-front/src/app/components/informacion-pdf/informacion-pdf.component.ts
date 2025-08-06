import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor, DatePipe } from '@angular/common';
import { DocumentoPublico } from '../../core/models/documento-publico.model';
import { DocumentosPublicosService } from '../../core/services/documentos-publicos.service';

// Imports de Angular Material para un diseño mejorado
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-informacion-pdf',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    NgFor,
    DatePipe,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  templateUrl: './informacion-pdf.component.html',
  styleUrls: ['./informacion-pdf.component.css']
})
export class InformacionPdfComponent implements OnInit {
displayFecha(arg0: string) {
throw new Error('Method not implemented.');
}
  documentos: DocumentoPublico[] = [];
  cargando = true; // Iniciar en true para mostrar el spinner al cargar
  error: string | null = null;

  constructor(private documentosService: DocumentosPublicosService) {}

  ngOnInit(): void {
    this.obtenerDocumentos();
  }

  obtenerDocumentos(): void {
    this.cargando = true;
    this.error = null;
    this.documentosService.getDocumentosPublicos().subscribe({
      next: (docs) => {
        this.documentos = docs;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Ocurrió un error al cargar los documentos. Por favor, inténtelo de nuevo más tarde.';
        console.error('Error al obtener documentos:', err);
        this.cargando = false;
      }
    });
  }

  /**
   * Convierte los bytes a un string legible (KB, MB, etc.)
   */
  convertirTamanio(bytesStr: string): string {
    const bytes = parseInt(bytesStr, 10);
    if (isNaN(bytes) || bytes === 0) return '0 B';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }
}