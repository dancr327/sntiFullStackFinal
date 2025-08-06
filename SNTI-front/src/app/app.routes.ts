import { Routes, RouterModule } from '@angular/router';
import { roleGuard } from './core/guards/role.guard';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { AdminGuard } from './core/guards/admin.guard';
// Rutas principales de la aplicación
export const routes: Routes = [
  // Ruta raíz
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },

  // Rutas de administrador protegidas por roleGuard
  {
    path: 'admin',
    loadComponent: () => import('./components/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [roleGuard],
    data: { expectedRole: 'ADMINISTRADOR' },
    children: [
      { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
      { path: 'admindocumentos', loadComponent: () => import('./components/admin/documentos/documentos.component').then(m => m.DocumentosComponent) },
      { path: 'admintrabajadores', loadComponent: () => import('./components/admin/trabajadores/trabajadores.component').then(m => m.TrabajadoresComponent) },
      { path: 'registroempleado', loadComponent: () => import('./components/admin/registro-empleado/registro-empleado.component').then(m => m.RegistroEmpleadoComponent) },
      { path: 'editar-trabajador/:id', loadComponent: () => import('./components/admin/registro-empleado/registro-empleado.component').then(m => m.RegistroEmpleadoComponent) },
      { path: 'adminsanciones', loadComponent: () => import('./components/admin/sanciones/sanciones.component').then(m => m.SancionesComponent) },
      { path: 'adminpermisos', loadComponent: () => import('./components/admin/permisos/permisos.component').then(m => m.PermisosComponent) },
      { path: 'adminsecciones', loadComponent: () => import('./components/admin/secciones-sindicales/secciones-sindicales.component').then(m => m.SeccionesSindicalesComponent) },
      { path: 'adminauditorias', loadComponent: () => import('./components/admin/auditorias/auditorias.component').then(m => m.AuditoriasComponent) },
      // Secretarías
      { path: 'trabajoconflictos', loadComponent: () => import('./components/admin/trabajo-conflictos/trabajo-conflictos.component').then(m => m.TrabajoConflictosComponent) },
      { path: 'finanzas', loadComponent: () => import('./components/admin/finanzas/finanzas.component').then(m => m.FinanzasComponent) },
      { path: 'escalafon', loadComponent: () => import('./components/admin/escalafon/escalafon.component').then(m => m.EscalafonComponent) },
      { path: 'actasacuerdos', loadComponent: () => import('./components/admin/organizacion-actas-acuerdos/organizacion-actas-acuerdos.component').then(m => m.OrganizacionActasAcuerdosComponent) },
      { path: 'prestaciones', loadComponent: () => import('./components/admin/prestaciones/prestaciones.component').then(m => m.PrestacionesComponent) },
      { path: 'formacionC', loadComponent: () => import('./components/admin/formacion-capacitacion/formacion-capacitacion.component').then(m => m.FormacionCapacitacionComponent) },
      // Rutas preparadas para futuros componentes admin
      { path: 'admincursos', loadComponent: () => import('./components/admin/cursos/cursos.component').then(m => m.CursosComponent) },
      { path: 'admincontactos', loadComponent: () => import('./components/admin/contactos/contactos.component').then(m => m.ContactosComponent) },
      { path: 'adminhijos', loadComponent: () => import('./components/admin/hijos/hijos.component').then(m => m.HijosComponent) },
      // ...agrega aquí más rutas futuras de admin
      // Puedes agregar más rutas de admin aquí
{
  path: 'admincambiosadscripcion',
  loadComponent: () => import('./components/admin/cambio-adscripcion-panel/cambio-adscripcion-panel.component').then(m => m.CambioAdscripcionPanelComponent),
  canActivate: [AdminGuard], // Opcional, si usas guard para admins
}



    ]
  },

  // Rutas de usuario protegidas por roleGuard
  {
    path: 'user',
    loadComponent: () => import('./components/user/user.component').then(m => m.UserComponent),
    canActivate: [roleGuard],
    data: { expectedRole: 'USUARIO' },
    children: [
      { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
      { path: 'userpermiso', loadComponent: () => import('./components/user/userpermiso/userpermiso.component').then(m => m.UserpermisoComponent) },
      { path: 'usersanciones', loadComponent: () => import('./components/user/usersanciones/usersanciones.component').then(m => m.UsersancionesComponent) },
      { path: 'userhijos', loadComponent: () => import('./components/user/userhijos/userhijos.component').then(m => m.UserhijosComponent) },
      { path: 'userperfil', loadComponent: () => import('./components/user/userperfil/userperfil.component').then(m => m.UserperfilComponent) },
      { path: 'userdocumentospanel', loadComponent: () => import('./components/user/userdocumentospanel/userdocumentospanel.component').then(m => m.UserDocumentosPanelComponent) },
      // Rutas preparadas para futuros componentes usuario
      { path: 'usercursos', loadComponent: () => import('./components/user/usercursos/usercursos.component').then(m => m.UsercursosComponent) },
      // ...agrega aquí más rutas futuras de usuario
      // Puedes agregar más rutas de usuario aquí
    ]
  },

  // Rutas compartidas
  { path: 'secciones-sindicales', loadComponent: () => import('./components/secciones-sindicales/secciones-sindicales.component').then(m => m.SeccionesSindicalesComponent) },
  { path: 'contacto', loadComponent: () => import('./components/contacto/contacto.component').then(m => m.ContactoComponent) },
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
  { path: 'recuperaPassword', loadComponent: () => import('./components/recupera-password/recupera-password.component').then(m => m.RecuperaPasswordComponent) },
  { path: 'galeria', component: GaleriaComponent, title: 'SNTI - Galería' },
  {
    path: 'mas-informacion',
    loadComponent: () => import('./components/informacion-pdf/informacion-pdf.component').then(m => m.InformacionPdfComponent)
  }
];
