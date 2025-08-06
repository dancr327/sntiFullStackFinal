import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service'; //importo el servicio de autenticación para cerrar sesión
import { Usuario } from '../../../core/models/usuario.model'; // importa tu modelo

@Component({
  selector: 'app-daniel-sidebar',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterLink],
  templateUrl: './daniel-sidebar.component.html',
  styleUrl: './daniel-sidebar.component.css',
})
export class DanielSidebarComponent {
  @Input() sidebarActive: boolean = false;
  @Output() closeSidebar = new EventEmitter<void>();

  onOverlayClick() {
    this.closeSidebar.emit();
  }

  constructor(private authService: AuthService) {}

  // Exponer usuario actual como propiedad pública
  get usuario(): Usuario | null {
    return this.authService.currentUser;
  }

  logout() {
    this.authService.logout();
  }
}
