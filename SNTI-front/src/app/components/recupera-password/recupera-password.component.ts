import { Component } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recupera-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule],
  templateUrl: './recupera-password.component.html',
  styleUrl: './recupera-password.component.css',
})
export class RecuperaPasswordComponent {

  get email(){
    return this.formRecuperar.get('email') as FormControl;
  }
  get curp(){
    return this.formRecuperar.get('curp') as FormControl;
  }

  formRecuperar = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    'curp': new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z\d]{2}$/)]),
  });


  recuperar() {
    if (this.formRecuperar.valid) {
      alert('La nueva contraseña ha sido enviada a tu correo electrónico.');
      this.formRecuperar.reset(); // Opcional: limpiar el formulario después
    } else {
      this.formRecuperar.markAllAsTouched();
      alert('Por favor completa correctamente todos los campos.');
    }
  }
  



  toUppercase(controlName: string, event: Event) {
    const input = event.target as HTMLInputElement;
    const uppercaseValue = input.value.toUpperCase();
    this.formRecuperar.get(controlName)?.setValue(uppercaseValue);
  }
}
