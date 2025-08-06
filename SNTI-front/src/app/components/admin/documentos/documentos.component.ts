

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgForm } from '@angular/forms';
import { AdminbarraComponent } from '../adminbarra/adminbarra.component';




@Component({
  selector: 'app-documentos',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminbarraComponent],
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  documentos: any[] = [];
  archivoSeleccionado: File | null = null;
  
  nuevoDocumento = {
    nombre: '',
    archivo: null
  };

  ngOnInit(): void {
    // Cargar documentos existentes (simulado)
    this.documentos = [
      
    ];
  }

  onFileSelected(event: any): void {
    this.archivoSeleccionado = event.target.files[0];
  }

  subirDocumento(): void {
    if (this.archivoSeleccionado && this.nuevoDocumento.nombre) {
      const nuevoDoc = {
        id: this.documentos.length + 1,
        nombre: this.nuevoDocumento.nombre,
        tipo: this.archivoSeleccionado.name.split('.').pop()?.toUpperCase(),
        tamanio: Math.round(this.archivoSeleccionado.size / 1024), // KB
        fecha: new Date()
      };
      
      this.documentos.unshift(nuevoDoc);
      this.resetForm();
      
      // Cerrar modal (usando Bootstrap JS)
      document.getElementById('closeModal')?.click();
    }
  }

  eliminarDocumento(id: number): void {
    this.documentos = this.documentos.filter(doc => doc.id !== id);
  }

  resetForm(): void {
    this.nuevoDocumento = { nombre: '', archivo: null };
    this.archivoSeleccionado = null;
  }
}