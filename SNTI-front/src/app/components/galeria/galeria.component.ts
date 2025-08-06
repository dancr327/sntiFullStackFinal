// src/app/components/galeria/galeria.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { GaleriaService, ImagenGaleria } from '../../core/services/galeria.service';
import { ImagenModalComponent } from './imagen-modal/imagen-modal.component';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ImagenModalComponent // Importante para que el componente sea usable
  ],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css',
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
        ], { optional: true })
      ])
    ])
  ]
})
export class GaleriaComponent implements OnInit {
  imagenesDestacadas: ImagenGaleria[] = [];
  imagenesGaleria: ImagenGaleria[] = [];
  isLoading = true;

  constructor(
    private galeriaService: GaleriaService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cargarImagenes();
  }

  cargarImagenes(): void {
    this.isLoading = true;
    this.galeriaService.getImagenes().subscribe(imagenes => {
      this.imagenesDestacadas = imagenes.filter(img => img.featured);
      this.imagenesGaleria = imagenes.filter(img => !img.featured);
      this.isLoading = false;
    });
  }
  
  getGridClass(imagen: ImagenGaleria): string {
    switch (imagen.size) {
      case 'large-v': return 'grid-item--vertical';
      case 'large-h': return 'grid-item--horizontal';
      default: return '';
    }
  }

  abrirModal(index: number): void {
    this.dialog.open(ImagenModalComponent, {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      panelClass: 'mat-dialog-container-no-padding',
      data: {
        imagenes: this.imagenesGaleria,
        index: index
      }
    });
  }
  
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
