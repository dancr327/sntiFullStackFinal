import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AdminbarraComponent } from '../adminbarra/adminbarra.component';

@Component({
  selector: 'app-auditorias',
  standalone: true,
  imports: [MatIconModule, RouterLink, AdminbarraComponent],
  templateUrl: './auditorias.component.html',
  styleUrl: './auditorias.component.css'
})
export class AuditoriasComponent {

}
