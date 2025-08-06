import { Component, OnInit } from '@angular/core';
import { CommonModule, NumberFormatStyle } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TrabajadoresService } from '../../../core/services/trabajadores.service';
import { Trabajador } from '../../../core/models/trabajador.model';

@Component({
  selector: 'app-userperfil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './userperfil.component.html',
  styleUrl: './userperfil.component.css'
})
export class UserperfilComponent {
  perfilForm: FormGroup;
  editMode = false;
  perfil: Trabajador | null = null; // Inicializa como null para evitar errores antes de cargar el perfil

  constructor(
    private trabajadoresService: TrabajadoresService,
    private fb: FormBuilder,
  ) {
    this.perfilForm = this.fb.group({
  nombre: [{ value: '', disabled: true }, Validators.required],
  apellido_paterno: [{ value: '', disabled: true }, Validators.required],
  apellido_materno: [{ value: '', disabled: true }, Validators.required],
  fecha_nacimiento: [{ value: '', disabled: true }, Validators.required],
  email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
  curp: [{ value: '', disabled: true }, Validators.required],
  numero_plaza: [{ value: '', disabled: true }, Validators.required],
  numero_empleado: [{ value: '', disabled: true }, Validators.required],
  nombre_puesto: [{ value: '', disabled: true }, Validators.required],
  puesto_inpi: [{ value: '', disabled: true }],
    });
  }

  

  ngOnInit(): void {
  this.trabajadoresService.getMiPerfil().subscribe({
    next: (perfil: Trabajador) => {
      this.perfil = perfil;
      // Ajustar formato de fecha si es necesario:
      let perfilAjustado = { ...this.perfil };
      if (perfilAjustado.fecha_nacimiento) {
        perfilAjustado.fecha_nacimiento = perfilAjustado.fecha_nacimiento.substring(0, 10); // yyyy-mm-dd
      }
      this.perfilForm.patchValue(perfilAjustado);
    },
    error: (err) => {
      console.error('Error al obtener perfil:', err);
    }
  });
}

}
