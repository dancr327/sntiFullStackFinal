import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule, CommonModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMsg = '';
  
  loginForm = this.fb.group({
    identificador: ['', Validators.required],
    contraseña: ['', [Validators.required, Validators.minLength(6)]]
  });

constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}
onSubmit() {
    if (this.loginForm.invalid) return;
    const { identificador, contraseña } = this.loginForm.value;
    if (identificador == null || contraseña == null) {
      this.errorMsg = 'Por favor complete todos los campos.';
      return;
    }
    this.auth.login({ identificador: identificador as string, contraseña: contraseña as string }).subscribe({
      next: resp => {
        if (resp.success && resp.data?.token) {
          if (resp.data.usuario.rol === 'ADMINISTRADOR') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/user']);
          }
        }
      },
      error: err => {
        if (err.status === 401 || err.status === 423) {
          this.errorMsg = err.error?.message || 'Credenciales incorrectas o cuenta bloqueada';
        } else {
          this.errorMsg = 'Ocurrió un error inesperado.';
        }
      }
    });
    
  }

  //metodo uppercase para convertir el texto a mayusculas
toUppercase(controlName: string, event: Event) {
  const input = event.target as HTMLInputElement;
  const uppercaseValue = input.value.toUpperCase();
  this.loginForm.get(controlName)?.setValue(uppercaseValue);
}

}
