import { Component } from '@angular/core';
// import { AdminbarraComponent } from './adminbarra/adminbarra.component';

import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatIconModule,AdminSidebarComponent, CommonModule, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  //uso los metodos de admin-sidebar aqui
sidebarActive = false;
  toggleSidebar() { this.sidebarActive = !this.sidebarActive; }
  closeSidebar() { this.sidebarActive = false; }
}
