import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { DanielSidebarComponent } from './daniel-sidebar/daniel-sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HomeComponent, MatIconModule,DanielSidebarComponent, CommonModule, RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

sidebarActive = false;
  toggleSidebar() { this.sidebarActive = !this.sidebarActive; }
  closeSidebar() { this.sidebarActive = false; }
}
