import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DocumentosPanelService } from '../../../../../src/app/core/services/documentospanel.service';
import { DocumentoPanel } from '../../../../../src/app/core/models/documentopanel.model';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Importar MatIconModule

@Component({
  selector: 'app-dialogo-subir-documento',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule // Añadir MatIconModule a los imports
  ],
  templateUrl: './dialogo-subir-documento.component.html',
  styleUrls: ['./dialogo-subir-documento.component.css']
})
export class DialogoSubirDocumentoComponent {
  tipos = ['CURP', 'RFC', 'INE', 'CERTIFICADO_ESTUDIO', 'OTRO_DOCUMENTO'];
  archivo: File | null = null;
  tipoYaExiste = false;
  form: FormGroup;
  documentos: DocumentoPanel[];
  isDragging = false; // Para controlar el estado de arrastre

  private documentosService = inject(DocumentosPanelService);
  private snackBar = inject(MatSnackBar);
  private dialogRef = inject(MatDialogRef<DialogoSubirDocumentoComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { documentos: DocumentoPanel[] }, private fb: FormBuilder) {
    this.documentos = data.documentos || [];
    this.form = this.fb.group({
      tipo_documento: ['', Validators.required]
    });
  }

  onTipoChange() {
    const tipo: string = this.form.value.tipo_documento;
    this.tipoYaExiste = this.documentos.some(doc => doc.tipo_documento === tipo);
    if (this.tipoYaExiste) {
      this.snackBar.open('Solo puedes subir un documento por tipo. Elimina el anterior para subir uno nuevo.', 'Cerrar', { duration: 4000 });
    }
  }

  onArchivoChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.handleFile(input.files?.[0]);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    this.handleFile(event.dataTransfer?.files[0]);
  }

  handleFile(file: File | null | undefined) {
    if (file) {
      // Opcional: puedes agregar validaciones de tipo de archivo o tamaño aquí
      this.archivo = file;
    }
  }

  removeFile() {
    this.archivo = null;
  }

  subirDocumento() {
    if (!this.archivo || this.tipoYaExiste) return;
    const tipo: string = this.form.value.tipo_documento;
    this.documentosService.uploadDocumento(tipo, this.archivo).subscribe({
      next: () => {
        this.snackBar.open('Documento subido correctamente', 'Cerrar', { duration: 3000, panelClass: ['mat-toolbar', 'mat-primary'] });
        this.dialogRef.close('subido');
      },
      error: () => {
        this.snackBar.open('Error al subir documento', 'Cerrar', { duration: 4000, panelClass: ['mat-toolbar', 'mat-warn'] });
      }
    });
  }
}