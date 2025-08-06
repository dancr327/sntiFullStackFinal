import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';



@Component({
  selector: 'app-adminbarra',
  standalone: true,
  imports: [MatIconModule, RouterLink, MatTreeModule, MatExpansionModule, MatListModule],
  templateUrl: './adminbarra.component.html',
  styleUrl: './adminbarra.component.css'
})
export class AdminbarraComponent {
  sidebarActive = false;
  secretariasAbiertas = false;
usuario = {
    nombre: 'Nombre Usuario',
    rol: 'Rol Administrador'
  };
  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  toggleSecretarias() {
    this.secretariasAbiertas = !this.secretariasAbiertas;
  }

  closeSidebarOnMobile() {
    if (window.innerWidth < 992) {
      this.sidebarActive = false;
    }
  }

}
