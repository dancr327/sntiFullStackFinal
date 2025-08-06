import { Component, HostListener, OnInit} from '@angular/core';

import { RouterModule, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, MatIconModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
sidebarActive = false;
  secretariasAbiertas = false;
  usuario = {
    nombre: 'Nombre Usuario',
    rol: 'Rol del Usuario'
  };

  

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }
  closeSidebarOnMobile() {
    if (window.innerWidth < 992) {
      this.sidebarActive = false;
    }
  }
 


  logout() {
    // Lógica para cerrar sesión
    console.log('Sesión cerrada');
  }

}