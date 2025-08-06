import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
export const roleGuard: CanActivateFn = (route : ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRole = route.data['expectedRole'];
  const userRole = authService.getUserRole();

  if (authService.isLoggedIn() && userRole === expectedRole) {
    return true;
  }

  if (authService.isLoggedIn()) {
    if (userRole === 'ADMINISTRADOR') return router.parseUrl('/admin');
    if (userRole === 'USUARIO') return router.parseUrl('/user');
  }
  return router.parseUrl('/login');
};
