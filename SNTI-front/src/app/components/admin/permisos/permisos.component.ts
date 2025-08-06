import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PermisosService } from '../../../core/services/permisos.service';
import { TrabajadoresService } from '../../../core/services/trabajadores.service';
import { AuthService } from '../../../core/services/auth.service';

import { Permiso } from '../../../core/models/permiso.model';
import { Trabajador } from '../../../core/models/trabajador.model';
import { Usuario } from '../../../core/models/usuario.model';

@Component({
  selector: 'app-permisos',
  standalone: true,
  imports: [MatIconModule, MatCardModule, CommonModule, FormsModule],
  templateUrl: './permisos.component.html',
  styleUrl: './permisos.component.css',
})
export class PermisosComponent implements OnInit {
  filtroBusqueda: string = '';
  filtroEstatus: string = 'Todas';
  permisos: Permiso[] = [];
  permisosActivos: Permiso[] = [];
  permisosCaducados: Permiso[] = [];
  permisosActivosFiltrados: Permiso[] = [];
  permisosCaducadosFiltrados: Permiso[] = [];
  trabajadores: Trabajador[] = [];
  archivoSeleccionado: File | null = null;
  permisoSeleccionado: Permiso | null = null;
  permisoEnEdicion: Permiso | null = null;
  editando: boolean = false;

  usuarioActual: Usuario | null = null;

  nuevaPermiso: any = {
    id_trabajador: '',
    tipo_permiso: '',
    motivo: '',
    fecha_inicio: '',
    fecha_fin: '',
    estatus: 'Pendiente',
  };

  constructor(
    private permisosService: PermisosService,
    private trabajadoresService: TrabajadoresService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.usuarioActual = this.authService.currentUser;
    this.cargarPermisos();
    this.cargarTrabajadores();
  }

  prepararNuevoPermiso(): void {
    this.resetForm();
  }

  cargarTrabajadores(): void {
    this.trabajadoresService.getTrabajadores().subscribe({
      next: (trabajadores) => {
        if (this.usuarioActual?.seccion?.id_seccion) {
          this.trabajadores = trabajadores.filter(
            (t: Trabajador) => t.id_seccion === this.usuarioActual!.seccion.id_seccion
          );
        } else if (this.usuarioActual?.seccion?.estado) {
          this.trabajadores = trabajadores.filter(
            (t: Trabajador) => t.seccion?.estado === this.usuarioActual!.seccion.estado
          );
        } else {
          this.trabajadores = trabajadores;
        }
      },
      error: (err) => {
        this.trabajadores = [];
        console.error('Error al obtener trabajadores:', err);
      },
    });
  }

  cargarPermisos(): void {
 this.permisosService.getPermisos().subscribe({
      next: (permisos: Permiso[]) => {
        let todos = permisos || [];
        if (this.usuarioActual?.seccion?.id_seccion) {
          todos = todos.filter(
            (p) =>
              p.trabajadores &&
              p.trabajadores.seccion &&
              p.trabajadores.seccion.id_seccion === this.usuarioActual!.seccion.id_seccion
          );
        } else if (this.usuarioActual?.seccion?.estado) {
          todos = todos.filter(
            (p) =>
              p.trabajadores &&
              p.trabajadores.seccion &&
              p.trabajadores.seccion.estado === this.usuarioActual!.seccion.estado
          );
        }
        this.permisos = todos;
        this.categorizarPermisos();
      },
      error: (err) => {
        this.permisos = [];
        this.permisosActivos = [];
        this.permisosCaducados = [];
        this.permisosActivosFiltrados = [];
        this.permisosCaducadosFiltrados = [];
        console.error('Error al obtener permisos:', err);
      },
    });
  }

  categorizarPermisos(): void {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const ajustar = (fecha: string) => {
      const d = new Date(fecha);
      d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
      return d;
    };
    this.permisosActivos = this.permisos.filter(p => {
      const fin = ajustar(p.fecha_fin);
      fin.setDate(fin.getDate() + 1);
      return fin.getTime() > hoy.getTime();
    });
    this.permisosCaducados = this.permisos.filter(p => {
      const fin = ajustar(p.fecha_fin);
      fin.setDate(fin.getDate() + 1);
      return fin.getTime() <= hoy.getTime();
    });
    this.filtrarPermisos();
  }

  onFileSelected(event: any): void {
    this.archivoSeleccionado = event.target.files[0];
  }

  guardarPermiso(): void {
    if (this.editando) {
      this.actualizarPermiso();
      return;
    }

    const inicio = new Date(this.nuevaPermiso.fecha_inicio);
    const fin = new Date(this.nuevaPermiso.fecha_fin);
    if (inicio > fin) {
      alert('La fecha de finalizacion no puede ser antes que la fecha de inicio.');
      return;
    }
    if (!this.archivoSeleccionado) {
      alert('Debes subir un documento de aprobación.');
      return;
    }
    this.nuevaPermiso.id_trabajador = Number(this.nuevaPermiso.id_trabajador);
    const formData = new FormData();
    Object.entries(this.nuevaPermiso).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value as string);
      }
    });
    formData.append('aprobacion', this.archivoSeleccionado);

    this.permisosService.crearPermiso(formData).subscribe({
      next: () => {
        this.cargarPermisos();
        this.resetForm();
        const modalEl = document.getElementById('permisoModal');
        if (modalEl)
          (window as any).bootstrap?.Modal.getInstance(modalEl)?.hide();
        alert('Permiso creado exitosamente.');
      },
      error: (err) => {
        alert('No se pudo guardar el permiso. Intenta nuevamente.');
        console.error(err);
      },
    });
  }

  eliminarPermiso(id: number): void {
    if (confirm('¿Está seguro de eliminar este permiso?')) {
      this.permisosService.eliminarPermiso(id).subscribe({
        next: () => {
          this.cargarPermisos();
        },
        error: (err) => {
          alert('No se pudo eliminar el permiso. Intenta nuevamente.');
          console.error(err);
        },
      });
    }
  }

  verDetalles(permiso: Permiso): void {
    this.permisoSeleccionado = permiso;
    const modalEl = document.getElementById('detalleModal');
    if (modalEl)
      (window as any).bootstrap?.Modal.getOrCreateInstance(modalEl).show();
  }

  editarPermiso(permiso: Permiso): void {
    this.editando = true;
    this.permisoEnEdicion = permiso;
    this.nuevaPermiso = {
      id_trabajador: permiso.id_trabajador,
      tipo_permiso: permiso.tipo_permiso,
      motivo: permiso.motivo,
      fecha_inicio: permiso.fecha_inicio.substring(0, 10),
      fecha_fin: permiso.fecha_fin.substring(0, 10),
      estatus: permiso.estatus,
    };
    this.archivoSeleccionado = null;
    const modalEl = document.getElementById('permisoModal');
    if (modalEl)
      (window as any).bootstrap?.Modal.getOrCreateInstance(modalEl).show();
  }

  actualizarPermiso(): void {
    if (!this.permisoEnEdicion) return;
    const inicio = new Date(this.nuevaPermiso.fecha_inicio);
    const fin = new Date(this.nuevaPermiso.fecha_fin);
    if (inicio > fin) {
      alert('La fecha de finalizacion no puede ser antes que la fecha de inicio.');
      return;
    }

    if (!this.editando) {
      this.nuevaPermiso.id_trabajador = Number(this.nuevaPermiso.id_trabajador);
    }
    const formData = new FormData();
    Object.entries(this.nuevaPermiso).forEach(([key, value]) => {
      if (this.editando && key === 'id_trabajador') return;
      if (value !== undefined && value !== null && value !== '') {
        formData.append(key, value as string);
      }
    });
    if (this.archivoSeleccionado) {
      formData.append('aprobacion', this.archivoSeleccionado);
    }

    this.permisosService.actualizarPermiso(this.permisoEnEdicion.id_permiso, formData).subscribe({
      next: () => {
        this.cargarPermisos();
        this.resetForm();
        const modalEl = document.getElementById('permisoModal');
        if (modalEl)
          (window as any).bootstrap?.Modal.getInstance(modalEl)?.hide();
        alert('Permiso actualizado correctamente.');
      },
      error: (err) => {
        alert('No se pudo actualizar el permiso. Intenta nuevamente.');
        console.error(err);
      },
    });
  }

  descargarDocumento(permiso: Permiso): void {
    if (!permiso.documentos) {
      alert('No hay documento para descargar.');
      return;
    }
    const fileName = permiso.documentos.nombre_archivo || 'documento.pdf';
    this.permisosService
      .descargarDocumento(permiso.id_permiso)
      .subscribe({
        next: (blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        },
        error: (err) => {
          alert('No se pudo descargar el documento.');
          console.error(err);
        }
      });
  }

  filtrarPermisos(): void {
    const termino = this.filtroBusqueda.toLowerCase();
    const filtrar = (lista: Permiso[]) =>
      lista.filter((p) => {
        const coincideBusqueda =
          !termino ||
          `${p.trabajadores.nombre} ${p.trabajadores.apellido_paterno} ${p.trabajadores.apellido_materno}`
            .toLowerCase()
            .includes(termino) ||
          (p.tipo_permiso ?? '').toLowerCase().includes(termino) ||
          p.motivo.toLowerCase().includes(termino) ||
          (p.estatus ?? '').toLowerCase().includes(termino);
        const coincideEstatus = this.filtroEstatus === 'Todas' || p.estatus === this.filtroEstatus;
        return coincideBusqueda && coincideEstatus;
      });
    this.permisosActivosFiltrados = filtrar(this.permisosActivos);
    this.permisosCaducadosFiltrados = filtrar(this.permisosCaducados);
  }

  get minFechaInicio(): string {
    const hoy = new Date();
    hoy.setMonth(hoy.getMonth() - 3);
    const yyyy = hoy.getFullYear();
    const mm = String(hoy.getMonth() + 1).padStart(2, '0');
    const dd = String(hoy.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
  get fechaFinInvalida(): boolean {
    const inicio = this.nuevaPermiso.fecha_inicio;
    const fin = this.nuevaPermiso.fecha_fin;
    return inicio && fin && fin < inicio;
  }

  resetForm(): void {
    this.nuevaPermiso = {
      id_trabajador: '',
      tipo_permiso: '',
      motivo: '',
      fecha_inicio: '',
      fecha_fin: '',
      estatus: 'Pendiente',
    };
    this.archivoSeleccionado = null;
    this.permisoEnEdicion = null;
    this.editando = false;
  }
}
