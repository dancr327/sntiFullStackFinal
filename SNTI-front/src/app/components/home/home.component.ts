import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importa los módulos de animación de Angular
import { trigger, transition, style, animate } from '@angular/animations';

// Define una interfaz para una mejor organización y tipado de los datos de los colaboradores.
interface Colaborador {
  id: number;
  nombre: string;
  cargo: string;
  email: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    // Animación para que los elementos de las secciones aparezcan desde abajo.
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(25px)' }),
        animate('800ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    
    // Nueva animación para que el título de la sección del equipo aparezca desde arriba.
    trigger('fadeInDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))  
      ])
    ])
  ]
})
export class HomeComponent {

   // Arreglo con los datos de los miembros del Comité Ejecutivo Nacional (CEN).
  // Tener los datos aquí facilita su mantenimiento y mantiene el HTML limpio.
  cen: Colaborador[] = [
    { id: 1, nombre: 'ING. JESUS ENRIQUE ESCALANTE IBARRA', cargo: 'Secretario General', email: 'secretariageneral1313@gmail.com' },
    { id: 2, nombre: 'C. JUAN VIDAL SANCHEZ VELASCO', cargo: 'Secretario de Trabajo, Conflictos y Acción Política', email: 'trabajo.conflictos.25@gmail.com' },
    { id: 3, nombre: 'ING. ISABEL HERNANDEZ MONTIEL', cargo: 'Secretaria de Organización, Actas y Acuerdos', email: 'organizacionsnti@gmail.com' },
    { id: 4, nombre: 'C.P. HYOBANA NATALY SEVILLA MONROY', cargo: 'Secretaria de Finanzas', email: 'cenfinanzas22.25@gmail.com' },
    { id: 5, nombre: 'L.A.F. ILIANA TOMASA MARTINEZ MOLINA', cargo: 'Secretaria de Prestaciones Económicas, Fomento Deportivo, Cultural, y Previsión Social', email: 'prestaciones.cen@hotmail.com' },
    { id: 6, nombre: 'LIC. VIRGINIA MONTOYA APARICIO', cargo: 'Secretaria de Escalafón', email: 'sntiescalafon.2225@gmail.com' },
    { id: 7, nombre: 'LIC. MARIA TERESA HERNANDEZ CASTRO', cargo: 'Secretaria de Formación y Capacitación Sindical', email: 'snti.capacitacion9@gmail.com' }
  ];

  // Arreglo con los datos de los miembros de las Comisiones Nacionales.
  comisiones: Colaborador[] = [
    { id: 8, nombre: 'C. LUZ MARIA ALONSO VARGAS', cargo: 'Presidenta de la Comisión Nacional de Vigilancia', email: 'pcvigilancia24.25@gmail.com' },
    { id: 9, nombre: 'C. YOLANDA GIL NOH', cargo: 'Primer Vocal (Vigilancia)', email: 'yoligil1802@hotmail.com' },
    { id: 10, nombre: 'T.A.E. MERCEDES GUADALUPE CALDERON RODRIGUEZ', cargo: 'Segundo Vocal (Vigilancia)', email: 'mercedes.calderonr@outlook.com' },
    { id: 11, nombre: 'L.A. ANTONIO VAZQUEZ GOMEZ', cargo: 'Presidente de la Comisión Nacional de Honor y Justicia', email: 'vazquezgomeza.cen.pcnhj22.25@gmail.com' },
    { id: 12, nombre: 'LIC. BERTHA ANGELICA GUZMAN CASTRO', cargo: 'Primer Vocal (Honor y Justicia)', email: 'primeravocal.cnhj@gmail.com' },
    { id: 13, nombre: 'C. VIRGEN MARIA OZUA MOROYOQUI', cargo: 'Segundo Vocal (Honor y Justicia)', email: 'ozuamoroyaquivirgen@gmail.com' }
  ];

  /**
   * Función de seguimiento para *ngFor. Mejora el rendimiento al evitar que Angular
   * vuelva a renderizar todos los elementos de la lista cuando esta cambia.
   * @param index El índice del elemento en el arreglo.
   * @param item El objeto del colaborador actual.
   * @returns El ID único del colaborador.
   */
  trackById(index: number, item: Colaborador): number {
    return item.id;
  }

}
