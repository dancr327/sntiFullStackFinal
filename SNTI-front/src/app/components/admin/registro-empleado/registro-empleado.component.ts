import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { TrabajadoresService } from '../../../core/services/trabajadores.service';
import { Trabajador } from '../../../core/models/trabajador.model';

import { SeccionesService } from '../../../core/services/secciones.service';
import { Seccion } from '../../../core/models/seccion.model';
import { AuthService } from '../../../core/services/auth.service';

// Validadores personalizados
function emailsIgualesValidator(group: AbstractControl): ValidationErrors | null {
  const email = group.get('email')?.value;
  const email2 = group.get('email2')?.value;
  return (email && email2 && email !== email2) ? { emailsNoCoinciden: true } : null;
}
function passwordsIgualesValidator(group: AbstractControl): ValidationErrors | null {
  const pass = group.get('contrasena')?.value;
  const pass2 = group.get('contrasena2')?.value;
  return (pass && pass2 && pass !== pass2) ? { passwordsNoCoinciden: true } : null;
}

function mayorDeEdadValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;
  const fecha = new Date(value);
  const hoy = new Date();
  let edad = hoy.getFullYear() - fecha.getFullYear();
  const m = hoy.getMonth() - fecha.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < fecha.getDate())) {
    edad--;
  }
  return edad >= 18 ? null : { menorDeEdad: true };
}

@Component({
  selector: 'app-registro-empleado',
  standalone: true,
  templateUrl: './registro-empleado.component.html',
  styleUrl: './registro-empleado.component.css',
  imports: [CommonModule, ReactiveFormsModule],
  providers: [TrabajadoresService]
})
export class RegistroEmpleadoComponent implements OnInit {
  loading = false;
  mensajeExito = '';
  mensajeError = '';
  certificadoNombre: string = '';
  secciones: Seccion[] = [];
  mensajeErroresCampos: { [key: string]: string } = {};
  trabajadorEdit: Trabajador | null = null;

  formEmpleado = this.fb.group({
    emailGroup: this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
      email2: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
    }, { validators: emailsIgualesValidator }),

    passwordGroup: this.fb.group({
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      contrasena2: ['', [Validators.required, Validators.minLength(6)]],
    }, { validators: passwordsIgualesValidator }),

    rol: ['USUARIO', [Validators.required]],
    nombre: ['', [Validators.required, Validators.maxLength(100)]],
    apellido_paterno: ['', [Validators.required, Validators.maxLength(100)]],
    apellido_materno: ['', [Validators.required, Validators.maxLength(100)]],
    fecha_nacimiento: ['', [Validators.required, mayorDeEdadValidator]],
    sexo: ['', Validators.required],
    curp: ['', [
      Validators.required,
      Validators.pattern(/^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/),
      Validators.minLength(18), 
      Validators.maxLength(18)
    ]],
    rfc: ['', [
      Validators.required,
      Validators.pattern(/^[A-Z]{4}\d{6}[0-9A-Z]{3}$/),
      Validators.minLength(13), 
      Validators.maxLength(13)
    ]],
    situacion_sentimental: ['', Validators.required],
    numero_hijos: [0, [Validators.required, Validators.min(0)]],
    numero_empleado: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    numero_plaza: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    fecha_ingreso: ['', Validators.required],
    fecha_ingreso_gobierno: ['', Validators.required],
    nivel_puesto: ['', [Validators.required, Validators.maxLength(50)]],
    nombre_puesto: ['', [Validators.required, Validators.maxLength(100)]],
    puesto_inpi: ['', [Validators.required, Validators.maxLength(100)]],
    adscripcion: ['', [Validators.required, Validators.maxLength(100)]],
    id_seccion: this.fb.control<number | null>(null, { validators: [Validators.required] }),
    nivel_estudios: ['', [Validators.required, Validators.maxLength(100)]],
    institucion_estudios: ['', [Validators.required, Validators.maxLength(200)]],
    certificado_estudios: [false],
    plaza_base: ['', [Validators.required, Validators.maxLength(10)]]
  });

  // Getters
  get email() { return this.formEmpleado.get('emailGroup.email'); }
  get email2() { return this.formEmpleado.get('emailGroup.email2'); }
  get contrasena() { return this.formEmpleado.get('passwordGroup.contrasena'); }
  get contrasena2() { return this.formEmpleado.get('passwordGroup.contrasena2'); }
  get emailGroup() { return this.formEmpleado.get('emailGroup'); }
  get passwordGroup() { return this.formEmpleado.get('passwordGroup'); }

  constructor(
    private fb: FormBuilder, 
    private trabajadoresService: TrabajadoresService,
    private route: ActivatedRoute,
    private seccionesService: SeccionesService,
    private authService: AuthService
  ) {}

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.certificadoNombre = event.target.files[0].name;
      this.formEmpleado.get('certificado_estudios')?.setValue(true);
    } else {
      this.certificadoNombre = '';
      this.formEmpleado.get('certificado_estudios')?.setValue(false);
    }
  }

  private mostrarErroresValidacion(): boolean {
    if (this.emailGroup?.errors?.['emailsNoCoinciden']) {
      this.mensajeError = 'Los emails no coinciden.';
      return false;
    }
    if (this.passwordGroup?.errors?.['passwordsNoCoinciden']) {
      this.mensajeError = 'Las contraseñas no coinciden.';
      return false;
    }
    if (this.formEmpleado.invalid) {
      this.mensajeError = 'Por favor revisa los campos marcados con errores.';
      this.marcarTodosTocados();
      return false;
    }
    return true;
  }

  private marcarTodosTocados() {
    Object.keys(this.formEmpleado.controls).forEach(key => {
      const control = this.formEmpleado.get(key);
      if (control) {
        control.markAsTouched();
        if (control instanceof FormGroup) {
          Object.keys(control.controls).forEach(subKey => {
            control.get(subKey)?.markAsTouched();
          });
        }
      }
    });
  }

  private limpiarMensajes() {
    this.mensajeExito = '';
    this.mensajeError = '';
    this.mensajeErroresCampos = {};
  }

  onSubmit() {
    this.limpiarMensajes();
    if (this.loading) return;
    if (!this.mostrarErroresValidacion()) return;

    this.loading = true;
    const emailValue = this.email?.value;

    const data: any = {
      identificador: emailValue ?? '',
      email: emailValue ?? '',
      contraseña: this.contrasena?.value ?? '',
      nombre: this.formEmpleado.value.nombre ?? '',
      apellido_paterno: this.formEmpleado.value.apellido_paterno ?? '',
      apellido_materno: this.formEmpleado.value.apellido_materno ?? '',
      fecha_nacimiento: this.formEmpleado.value.fecha_nacimiento ?? '',
      sexo: this.formEmpleado.value.sexo ?? '',
      curp: this.formEmpleado.value.curp ?? '',
      rfc: this.formEmpleado.value.rfc ?? '',
      situacion_sentimental: this.formEmpleado.value.situacion_sentimental ?? '',
      numero_hijos: this.formEmpleado.value.numero_hijos ?? 0,
      numero_empleado: this.formEmpleado.value.numero_empleado ?? '',
      numero_plaza: this.formEmpleado.value.numero_plaza ?? '',
      fecha_ingreso: this.formEmpleado.value.fecha_ingreso ?? '',
      fecha_ingreso_gobierno: this.formEmpleado.value.fecha_ingreso_gobierno ?? '',
      nivel_puesto: this.formEmpleado.value.nivel_puesto ?? '',
      nombre_puesto: this.formEmpleado.value.nombre_puesto ?? '',
      puesto_inpi: this.formEmpleado.value.puesto_inpi ?? '',
      adscripcion: this.formEmpleado.value.adscripcion ?? '',
      id_seccion: this.formEmpleado.value.id_seccion,
      nivel_estudios: this.formEmpleado.value.nivel_estudios ?? '',
      institucion_estudios: this.formEmpleado.value.institucion_estudios ?? '',
      certificado_estudios: this.formEmpleado.value.certificado_estudios ?? false,
      plaza_base: this.formEmpleado.value.plaza_base ?? '',
    };

    if (!this.trabajadorEdit) {
      data.rol = this.formEmpleado.get('rol')?.value ?? 'USUARIO';
    }

    const password = this.contrasena?.value?.trim();
    if (password && password.length >= 6) {
      data.contraseña = password;
    }

    // --- EDICIÓN ---
    if (this.trabajadorEdit) {
      const id = this.trabajadorEdit.id_trabajador;
      this.trabajadoresService.actualizarTrabajador(id, data).subscribe({
        next: () => {
          this.mensajeExito = '¡Trabajador actualizado exitosamente!';
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          this.mensajeError = err.error?.message || 'Error al actualizar el trabajador.';
        }
      });
    } else {
      // --- CREACIÓN ---
      this.trabajadoresService.crearTrabajador(data).subscribe({
        next: (trabajador) => {
          this.mensajeExito = '¡Trabajador registrado exitosamente!';
          this.resetearFormulario();
          this.loading = false;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        error: (err) => {
          this.loading = false;
          if (err.error?.errors) {
            this.mensajeErroresCampos = err.error.errors;
            this.mensajeError = 'Se encontraron errores en el formulario. Revisa los campos marcados.';
          } else {
            this.mensajeError = err.error?.message || 'Error al registrar el trabajador. Intenta nuevamente.';
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  }

  private resetearFormulario() {
    this.formEmpleado.reset({
      rol: 'USUARIO',
      id_seccion: null,
      numero_hijos: 0,
      certificado_estudios: false
    });
    this.certificadoNombre = '';
    this.mensajeErroresCampos = {};
  }

  setFormForEdit(trabajador: Trabajador) {
    this.formEmpleado.patchValue({
      emailGroup: {
        email: trabajador.email,
        email2: trabajador.email,
      },
      passwordGroup: {
        contrasena: '',
        contrasena2: '',
      },
      rol: trabajador.rol,
      nombre: trabajador.nombre,
      apellido_paterno: trabajador.apellido_paterno,
      apellido_materno: trabajador.apellido_materno,
      fecha_nacimiento: trabajador.fecha_nacimiento ? trabajador.fecha_nacimiento.slice(0, 10) : '',
      sexo: trabajador.sexo,
      curp: trabajador.curp,
      rfc: trabajador.rfc,
      situacion_sentimental: trabajador.situacion_sentimental,
      numero_hijos: trabajador.numero_hijos,
      numero_empleado: trabajador.numero_empleado,
      numero_plaza: trabajador.numero_plaza,
      fecha_ingreso: trabajador.fecha_ingreso ? trabajador.fecha_ingreso.slice(0, 10) : '',
      fecha_ingreso_gobierno: trabajador.fecha_ingreso_gobierno ? trabajador.fecha_ingreso_gobierno.slice(0, 10) : '',
      nivel_puesto: trabajador.nivel_puesto,
      nombre_puesto: trabajador.nombre_puesto,
      puesto_inpi: trabajador.puesto_inpi,
      adscripcion: trabajador.adscripcion,
      id_seccion: trabajador.id_seccion,
      nivel_estudios: trabajador.nivel_estudios,
      institucion_estudios: trabajador.institucion_estudios,
      certificado_estudios: trabajador.certificado_estudios,
      plaza_base: trabajador.plaza_base,
    });
    this.formEmpleado.get('emailGroup.email')?.disable();
    this.formEmpleado.get('emailGroup.email2')?.disable();
    this.formEmpleado.get('rol')?.disable();
  }

  ngOnInit() {
    const estadoAdmin = this.authService.currentUser?.seccion.estado;
    this.seccionesService.getSecciones().subscribe({
      next: resp => {
        if (resp.success) {
          this.secciones = resp.data
            .filter(s => !estadoAdmin || s.estado === estadoAdmin)
            .sort((a, b) =>
              a.estado.localeCompare(b.estado) ||
              a.numero_seccion - b.numero_seccion
            );
        }
      },
      error: err => console.error('Error cargando secciones', err)
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.formEmpleado.get('passwordGroup.contrasena')?.clearValidators();
      this.formEmpleado.get('passwordGroup.contrasena2')?.clearValidators();
      this.formEmpleado.get('passwordGroup')?.updateValueAndValidity();

      this.trabajadoresService.getTrabajadorPorId(+id).subscribe({
        next: (trabajador) => {
          this.trabajadorEdit = trabajador;
          if (this.trabajadorEdit) {
            this.setFormForEdit(this.trabajadorEdit);
          }
        },
        error: err => {
          // Redirige o muestra mensaje si no existe el trabajador
        }
      });
    }
    else {
      this.formEmpleado.get('passwordGroup.contrasena')?.setValidators([Validators.required, Validators.minLength(6)]);
      this.formEmpleado.get('passwordGroup.contrasena2')?.setValidators([Validators.required, Validators.minLength(6)]);
      this.formEmpleado.get('passwordGroup')?.updateValueAndValidity();
    }
  }
}
