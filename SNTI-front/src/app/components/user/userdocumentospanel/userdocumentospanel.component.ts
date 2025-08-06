import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card'; // Importar Card Module
import { MatTooltipModule } from '@angular/material/tooltip'; // Importar Tooltip

import { DocumentosPanelService } from '../../../../../src/app/core/services/documentospanel.service';
import { DocumentoPanel } from '../../../../../src/app/core/models/documentopanel.model';
import { DialogoSubirDocumentoComponent } from '../dialogo-subir-documento/dialogo-subir-documento.component';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component'; // Importar el nuevo diálogo

@Component({
  selector: 'app-userdocumentospanel',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule, // Añadir
    MatTooltipModule, // Añadir
    DialogoSubirDocumentoComponent
  ],
  templateUrl: './userdocumentospanel.component.html',
  styleUrls: ['./userdocumentospanel.component.css'],
})
export class UserDocumentosPanelComponent implements OnInit {
  private documentosService = inject(DocumentosPanelService);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  documentos: DocumentoPanel[] = [];
  displayedColumns = ['tipo_documento', 'nombre_archivo', 'fecha_subida', 'acciones'];
  isLoading = true; // Añadir estado de carga

  ngOnInit() {
    this.cargarDocumentos();
  }

  cargarDocumentos() {
    this.isLoading = true;
    this.documentosService.getMisDocumentos().subscribe({
      next: (docs) => {
        this.documentos = docs;
        this.isLoading = false;
      },
      error: () => {
        this.snackBar.open('Error al cargar documentos', 'Cerrar', { duration: 3000 });
        this.isLoading = false;
      },
    });
  }

  descargar(doc: DocumentoPanel) {
    this.documentosService.descargarDocumento(doc.id_documento).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = doc.nombre_archivo;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      },
      error: () => this.snackBar.open('Error al descargar el documento', 'Cerrar', { duration: 3000 }),
    });
  }

  eliminar(doc: DocumentoPanel) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Confirmar Eliminación',
        message: `¿Estás seguro de que deseas eliminar el documento "${doc.tipo_documento.replace('_', ' ')}"?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { // Solo proceder si el usuario confirmó
        this.documentosService.eliminarDocumento(doc.id_documento).subscribe({
          next: () => {
            this.snackBar.open('Documento eliminado correctamente', 'Cerrar', { duration: 3000, panelClass: ['mat-toolbar', 'mat-primary'] });
            this.cargarDocumentos();
          },
          error: () => this.snackBar.open('Error al eliminar el documento', 'Cerrar', { duration: 3000, panelClass: ['mat-toolbar', 'mat-warn'] }),
        });
      }
    });
  }

  abrirDialogoSubida() {
    const dialogRef = this.dialog.open(DialogoSubirDocumentoComponent, {
      width: '500px', // Un poco más ancho para el nuevo diseño
      autoFocus: false,
      data: { documentos: this.documentos }
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado === 'subido') {
        this.cargarDocumentos();
      }
    });
  }
}