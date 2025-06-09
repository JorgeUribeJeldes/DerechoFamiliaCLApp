import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' },
  { path: 'inicio-sesion', loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) 
  },
  { path: 'inicio', loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage) 
  },
  { path: 'conceptos', loadComponent: () => import('./pages/conceptos/conceptos.page').then(m => m.ConceptosPage) 
  },
  { path: 'preguntas-frecuentes', loadComponent: () => import('./pages/faq/faq.page').then(m => m.FaqPage) 
  },
  { path: 'contacto', loadComponent: () => import('./pages/contacto/contacto.page').then(m => m.ContactoPage) 
  },
];
