import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CambiosAdscripcionService } from '../../../core/services/cambios-adscripcion.service';
import { CambioAdscripcion } from '../../../core/models/cambio-adscripcion.model';
import { DialogoCambioAdscripcionComponent } from '../dialogo-cambio-adscripcion/dialogo-cambio-adscripcion.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinner } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-cambio-adscripcion-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatProgressSpinner
],
  templateUrl: './cambio-adscripcion-panel.component.html',
  styleUrls: ['./cambio-adscripcion-panel.component.css'],
})
export class CambioAdscripcionPanelComponent {
  private cambiosAdscripcionService = inject(CambiosAdscripcionService);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  cambios: CambioAdscripcion[] = [];
  displayedColumns = [
    'trabajador',
    'adscripcion_anterior',
    'flecha',
    'adscripcion_nueva',
    'fecha_cambio',
    'motivo',
    'acciones'
  ];
  cargando = false;

  ngOnInit() {
    this.cargarCambios();
  }

  cargarCambios() {
    this.cargando = true;
    this.cambiosAdscripcionService.getCambiosAdscripcion().subscribe({
      next: (data) => {
        this.cambios = data;
        this.cargando = false;
      },
      error: (err) => {
        this.snackBar.open(err.message || 'Error al cargar cambios de adscripción', 'Cerrar', { duration: 3000 });
        this.cargando = false;
      }
    });
  }

  abrirDialogoNuevoCambio() {
    const dialogRef = this.dialog.open(DialogoCambioAdscripcionComponent, {
      width: '500px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'creado') {
        this.snackBar.open('Cambio registrado correctamente', 'Cerrar', { duration: 3000 });
        this.cargarCambios();
      }
    });
  }

  descargarDocumento(cambio: CambioAdscripcion, tipo: 'comprobatorio' | 'nombramiento') {
    this.cambiosAdscripcionService.descargarDocumento(tipo, cambio.id_cambio).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        const fileName =
          tipo === 'comprobatorio'
            ? cambio.documentoComprobatorio?.nombre_archivo || 'comprobatorio.pdf'
            : cambio.documentoNombramiento?.nombre_archivo || 'nombramiento.pdf';
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        this.snackBar.open(err.message || 'Error al descargar documento', 'Cerrar', { duration: 4000 });
      }
    });
  }

  eliminarCambio(cambio: CambioAdscripcion) {
    // Aquí puedes abrir un diálogo de confirmación personalizado con input de contraseña.
    if (!confirm('¿Estás seguro de eliminar este cambio de adscripción? Esta acción es irreversible.')) return;
    this.cambiosAdscripcionService.eliminarCambioAdscripcion(cambio.id_cambio).subscribe({
      next: () => {
        this.snackBar.open('Cambio eliminado correctamente', 'Cerrar', { duration: 3000 });
        this.cargarCambios();
      },
      error: (err) => {
        this.snackBar.open(err.message || 'Error al eliminar', 'Cerrar', { duration: 4000 });
      }
    });
  }
}
