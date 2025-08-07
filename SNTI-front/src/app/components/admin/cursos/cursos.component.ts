import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosService } from '../../../core/services/cursos.service';
import { TrabajadoresCursosService } from '../../../core/services/trabajadores-cursos.service';
import { TrabajadoresService } from '../../../core/services/trabajadores.service';
import { AuthService } from '../../../core/services/auth.service';
import { Curso } from '../../../core/models/curso.model';
import { Trabajador } from '../../../core/models/trabajador.model';
import { TrabajadorCurso } from '../../../core/models/trabajador-curso.model';
import { Usuario } from '../../../core/models/usuario.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];
  trabajadores: Trabajador[] = [];
  inscripciones: TrabajadorCurso[] = [];

  cursoSeleccionado: Curso | null = null;
  inscripcionEditar: TrabajadorCurso | null = null;
  editCalificacion = '';
  docTipo: 'CONCLUSION_CURSO' | 'CERTIFICADO_CURSO' | 'INCONCLUSO' = 'CONCLUSION_CURSO';
  docArchivo: File | null = null;
  filtroBusqueda = '';
  filtroSeccion = '';
  trabajadoresAgregar: number[] = [];
  archivoInvitacion: File | null = null;

  usuarioActual: Usuario | null = null;

  nuevoCurso = { codigo_curso: '', nombre_curso: '', horas_duracion: 1 };
  archivoConstancia: File | null = null;

  constructor(
    private cursosService: CursosService,
    private trabajadoresCursosService: TrabajadoresCursosService,
    private trabajadoresService: TrabajadoresService,
    private authService: AuthService
  ) {}

   ngOnInit(): void {
    this.usuarioActual = this.authService.currentUser;
    this.cargarCursos();
    this.cargarTrabajadores();
    this.cargarInscripciones();
  }

  cargarCursos(): void {
    this.cursosService.getCursos().subscribe({
      next: resp => (this.cursos = resp.data || []),
      error: () => (this.cursos = [])
    });
  }

  cargarTrabajadores(): void {
    this.trabajadoresService.getTrabajadores().subscribe({
      next: (todos: Trabajador[]) => {
        if (this.usuarioActual?.seccion?.id_seccion) {
          this.trabajadores = todos.filter(t => t.id_seccion === this.usuarioActual!.seccion.id_seccion);
        } else if (this.usuarioActual?.seccion?.estado) {
          this.trabajadores = todos.filter(t => t.seccion?.estado === this.usuarioActual!.seccion.estado);
        } else {
          this.trabajadores = todos;
        }
      },
      error: () => (this.trabajadores = [])
    });
  }

  cargarInscripciones(): void {
    this.trabajadoresCursosService.getInscripciones().subscribe({
      next: resp => (this.inscripciones = resp.data || []),
      error: () => (this.inscripciones = [])
    });
  }

  trabajadoresDelCurso(id_curso: number): TrabajadorCurso[] {
    return this.inscripciones.filter(i => i.id_curso === id_curso);
  }

  abrirDetalle(curso: Curso) {
    this.cursoSeleccionado = curso;
    const modalEl = document.getElementById('detalleModal');
    if (modalEl) (window as any).bootstrap?.Modal.getOrCreateInstance(modalEl).show();
  }

  abrirAgregarTrabajador(curso: Curso) {
    this.cursoSeleccionado = curso;
    this.trabajadoresAgregar = [];
    this.filtroBusqueda = '';
    this.filtroSeccion = '';
    this.archivoInvitacion = null;
    const modalEl = document.getElementById('agregarModal');
    if (modalEl) (window as any).bootstrap?.Modal.getOrCreateInstance(modalEl).show();
  }

  filtrarTrabajadores(): Trabajador[] {
    return this.trabajadores
      .filter(t =>
        this.filtroSeccion ? String(t.seccion?.numero_seccion) === this.filtroSeccion : true
      )
      .filter(t => {
        const term = this.filtroBusqueda.toLowerCase();
        if (!term) return true;
        return (
          t.nombre.toLowerCase().includes(term) ||
          t.apellido_paterno.toLowerCase().includes(term) ||
          (t.apellido_materno || '').toLowerCase().includes(term) ||
          t.numero_empleado.toLowerCase().includes(term)
        );
      });
  }

  toggleTrabajador(id: number, event: any) {
    if (event.target.checked) {
      if (!this.trabajadoresAgregar.includes(id)) {
        this.trabajadoresAgregar.push(id);
      }
    } else {
      this.trabajadoresAgregar = this.trabajadoresAgregar.filter(t => t !== id);
    }
  }

  agregarTrabajadores() {
    if (this.trabajadoresAgregar.length === 0 || !this.cursoSeleccionado) return;
    if (!this.archivoInvitacion) {
      alert('Debes subir la invitación del curso.');
      return;
    }
    const peticiones = this.trabajadoresAgregar.map(id => {
      const formData = new FormData();
      formData.append('id_trabajador', String(id));
      formData.append('id_curso', String(this.cursoSeleccionado!.id_curso));
      formData.append('tipo_documento', 'INVITACION_CURSO');
      formData.append('documento', this.archivoInvitacion!);
      return this.trabajadoresCursosService.crearInscripcionAdmin(formData);
    });

    forkJoin(peticiones).subscribe({
      next: () => {
        this.cargarInscripciones();
        this.archivoInvitacion = null;
        const modalEl = document.getElementById('agregarModal');
        if (modalEl) (window as any).bootstrap?.Modal.getInstance(modalEl)?.hide();
      },
      error: () => alert('No se pudo agregar el trabajador')
    });
  }

  prepararNuevoCurso() {
    this.nuevoCurso = { codigo_curso: '', nombre_curso: '', horas_duracion: 1 };
    this.archivoConstancia = null;
  }

  onInvSelected(event: any) {
    this.archivoInvitacion = event.target.files[0];
  }

  onFileSelected(event: any) {
    this.archivoConstancia = event.target.files[0];
  }

  crearCurso(): void {
    if (this.cursos.some(c => c.codigo_curso === this.nuevoCurso.codigo_curso)) {
      alert('El código del curso ya existe');
      return;
    }
    if (this.cursos.some(c => c.nombre_curso === this.nuevoCurso.nombre_curso)) {
      alert('El nombre del curso ya existe');
      return;
    }
    if (!this.archivoConstancia) {
      alert('Debes subir la constancia del curso.');
      return;
    }
    const formData = new FormData();
    formData.append('codigo_curso', this.nuevoCurso.codigo_curso);
    formData.append('nombre_curso', this.nuevoCurso.nombre_curso);
    formData.append('horas_duracion', String(this.nuevoCurso.horas_duracion));
    formData.append('documento_constancia', this.archivoConstancia);
    this.cursosService.crearCurso(formData).subscribe({
      next: () => {
        this.cargarCursos();
        this.prepararNuevoCurso();
        const modalEl = document.getElementById('cursoModal');
        if (modalEl) (window as any).bootstrap?.Modal.getInstance(modalEl)?.hide();
      },
      error: () => alert('No se pudo crear el curso')
    });
  }

  eliminarInscripcion(id: number): void {
    if (!confirm('Eliminar trabajador del curso?')) return;
    this.trabajadoresCursosService.eliminarInscripcion(id).subscribe(() => {
      this.cargarInscripciones();
    });
  }

  abrirEditarInscripcion(ins: TrabajadorCurso) {
    this.inscripcionEditar = ins;
    this.editCalificacion = ins.calificacion || '';
    this.docArchivo = null;
    if (ins.documentoCertificado) this.docTipo = 'CERTIFICADO_CURSO';
    else if (ins.documentoConclusion) this.docTipo = 'CONCLUSION_CURSO';
    else this.docTipo = 'INCONCLUSO';
    const modalEl = document.getElementById('editarModal');
    if (modalEl) (window as any).bootstrap?.Modal.getOrCreateInstance(modalEl).show();
  }

  actualizarInscripcion() {
    if (!this.inscripcionEditar) return;
    const data: any = { calificacion: this.editCalificacion, completado: this.docTipo !== 'INCONCLUSO' };
    this.trabajadoresCursosService
      .actualizarInscripcionAdmin(this.inscripcionEditar.id_trabajador_curso, data)
      .subscribe({
        next: () => {
          this.cargarInscripciones();
          const modalEl = document.getElementById('editarModal');
          if (modalEl) (window as any).bootstrap?.Modal.getInstance(modalEl)?.hide();
        },
        error: () => alert('No se pudo actualizar la inscripción')
      });
  }

  onDocSelected(event: any) {
    this.docArchivo = event.target.files[0];
  }

  onDocTypeChange() {
    if (this.docTipo === 'INCONCLUSO') this.docArchivo = null;
  }

  subirDocumento() {
    if (!this.inscripcionEditar || !this.docArchivo || this.docTipo === 'INCONCLUSO') return;
    const form = new FormData();
    form.append('tipo_documento', this.docTipo);
    form.append('documento', this.docArchivo);
    this.trabajadoresCursosService
      .subirDocumento(this.inscripcionEditar.id_trabajador_curso, form)
      .subscribe({
        next: () => {
          this.cargarInscripciones();
          this.docArchivo = null;
        },
        error: () => alert('No se pudo subir el documento')
      });
  }

  eliminarCursoPassword(curso: Curso) {
    const pwd = prompt('Ingresa tu contraseña para eliminar el curso');
    if (!pwd) return;
    this.cursosService.eliminarCursoConPassword(curso.id_curso, pwd).subscribe({
      next: () => {
        this.cargarCursos();
        const modalEl = document.getElementById('detalleModal');
        if (modalEl) (window as any).bootstrap?.Modal.getInstance(modalEl)?.hide();
      },
      error: () => alert('No se pudo eliminar el curso')
    });
  }

  descargarConstancia() {
    if (!this.cursoSeleccionado) return;
    this.cursosService.descargarConstancia(this.cursoSeleccionado.id_curso).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const nombre = this.cursoSeleccionado?.documentoConstancia?.nombre_archivo || 'constancia.pdf';
      a.download = nombre;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}