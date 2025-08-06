import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatTreeModule } from '@angular/material/tree';
import { AuthService } from '../../../core/services/auth.service' //importo el servicio de autenticación para cerrar sesión
import { Usuario } from '../../../core/models/usuario.model'; 
@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [MatIconModule,MatTreeModule, CommonModule,RouterLink],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
openCambioAdscripcionDialog() {
throw new Error('Method not implemented.');
}
  @Input() sidebarActive: boolean = false;
  @Output() closeSidebar = new EventEmitter<void>();

    onOverlayClick() {
    this.closeSidebar.emit();
  }

  secretariasAbiertas = false;
    toggleSecretarias() {
    this.secretariasAbiertas = !this.secretariasAbiertas;
  }

  constructor(private authService: AuthService) {}

   get usuario(): Usuario | null {
    return this.authService.currentUser;
  }

  logout() {
    this.authService.logout();
  }

}
