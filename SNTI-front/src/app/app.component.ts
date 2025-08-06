import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
//importo los componentes aunque ya no son necesarios porque los estoy importando en el app.routes.ts
import { ContactoComponent } from './components/contacto/contacto.component';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from "./components/home/home.component";


import { RouterOutlet } from '@angular/router'; //El router-outlet es el lugar donde el Router renderizará el componente asociado a la ruta actual.

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'frontSNTI';
}
