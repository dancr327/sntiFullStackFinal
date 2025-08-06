import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Component, OnInit } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
// Importar el interceptor de autenticación
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { inject as angularInject } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideAnimations(), 
    provideHttpClient(), 
    provideAnimationsAsync(), 
    provideAnimationsAsync(),
    provideHttpClient(),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    importProvidersFrom(MatDialogModule),

     {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
};

