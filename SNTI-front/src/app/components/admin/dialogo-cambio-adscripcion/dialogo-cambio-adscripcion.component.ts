import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TrabajadoresService } from '../../../core/services/trabajadores.service';
import { CambiosAdscripcionService } from '../../../core/services/cambios-adscripcion.service';
import { Trabajador } from '.../../../src/app/core/models/trabajador.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinner } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-dialogo-cambio-adscripcion',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatProgressSpinner
],
  templateUrl: './dialogo-cambio-adscripcion.component.html',
  styleUrls: ['./dialogo-cambio-adscripcion.component.css'],
})
export class DialogoCambioAdscripcionComponent {
  private fb = inject(FormBuilder);
  private trabajadoresService = inject(TrabajadoresService);
  private cambiosService = inject(CambiosAdscripcionService);
  private snackBar = inject(MatSnackBar);
  private dialogRef = inject(MatDialogRef<DialogoCambioAdscripcionComponent>);

  trabajadores: Trabajador[] = [];
  adscripciones = [
    'Dirección General',
    'Recursos Humanos',
    'Tecnologías de la Información',
    'Servicios Generales',
    'Planeación',
    'Jurídico',
    'Otra'
  ];

  form: FormGroup = this.fb.group({
    id_trabajador: [null, Validators.required],
    adscripcion_nueva: ['', Validators.required],
    motivo: ['', [Validators.required, Validators.maxLength(100)]],
    fecha_cambio: [new Date(), Validators.required]
  });

  archivoComprobatorio: File | null = null;
  archivoNombramiento: File | null = null;
  loading = false;
  dragOverComp = false;
  dragOverNom = false;
  property: any;

  ngOnInit() {
    this.trabajadoresService.getTrabajadoresDeMiSeccion().subscribe({
      next: (trabajadores: Trabajador[]) => {
        this.trabajadores = trabajadores;
      },
      error: (err: { message: string }) => {
        this.snackBar.open(err.message, 'Cerrar', { duration: 4000 });
      }
    });
  }

  onArchivoChange(event: Event, tipo: 'comprobatorio' | 'nombramiento') {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      if (tipo === 'comprobatorio') this.archivoComprobatorio = input.files[0];
      else this.archivoNombramiento = input.files[0];
    }
  }

  onDrop(event: DragEvent, tipo: 'comprobatorio' | 'nombramiento') {
    event.preventDefault(); // Fix: Prevent default behavior for drop event
    if (event.dataTransfer?.files?.length) {
      if (tipo === 'comprobatorio') this.archivoComprobatorio = event.dataTransfer.files[0];
      else this.archivoNombramiento = event.dataTransfer.files[0];
    }
    this.dragOverComp = this.dragOverNom = false;
  }

  onDragOver(event: DragEvent, tipo: 'comprobatorio' | 'nombramiento') {
    event.preventDefault(); // Fix: Prevent default behavior for dragover event
    if (tipo === 'comprobatorio') this.dragOverComp = true;
    else this.dragOverNom = true;
  }

  onDragLeave(event: DragEvent, tipo: 'comprobatorio' | 'nombramiento') {
    event.preventDefault(); // Fix: Prevent default behavior for dragleave event
    if (tipo === 'comprobatorio') this.dragOverComp = false;
    else this.dragOverNom = false;
  }

  removeFile(tipo: 'comprobatorio' | 'nombramiento') {
    if (tipo === 'comprobatorio') this.archivoComprobatorio = null;
    else this.archivoNombramiento = null;
  }

  enviarCambio() {
    if (!this.form.valid) {
      this.snackBar.open('Completa todos los campos del formulario.', 'Cerrar', { duration: 3500 });
      return;
    }
    if (!this.archivoComprobatorio || !this.archivoNombramiento) {
      this.snackBar.open('Sube ambos archivos requeridos.', 'Cerrar', { duration: 3500 });
      return;
    }

    this.loading = true;
    const formData = new FormData();
    formData.append('id_trabajador', String(this.form.value.id_trabajador));
    formData.append('adscripcion_nueva', String(this.form.value.adscripcion_nueva));
    formData.append('motivo', String(this.form.value.motivo));
    formData.append('fecha_cambio', (this.form.value.fecha_cambio instanceof Date ? this.form.value.fecha_cambio.toISOString().split('T')[0] : String(this.form.value.fecha_cambio)));
    if (this.archivoComprobatorio) formData.append('documento_comprobatorio', this.archivoComprobatorio);
    if (this.archivoNombramiento) formData.append('documento_nombramiento', this.archivoNombramiento);

    this.cambiosService.crearCambioAdscripcion(formData).subscribe({
      next: () => {
        this.snackBar.open('Cambio de adscripción registrado exitosamente', 'Cerrar', { duration: 3000 });
        this.loading = false;
        this.dialogRef.close('creado');
      },
      error: (err) => {
        this.snackBar.open(err.message, 'Cerrar', { duration: 5000 });
        this.loading = false;
      }
    });
  }
}
