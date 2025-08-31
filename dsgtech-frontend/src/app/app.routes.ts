import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'politicas-de-privacidad',
    loadComponent: () =>
      import('./politicas/politicas-de-privacidad/politicas-de-privacidad.component')
        .then(m => m.PoliticasDePrivacidadComponent),
  },
  {
    path: 'terminos-condiciones',
    loadComponent: () =>
      import('./politicas/terminos-condiciones/terminos-condiciones.component')
        .then(m => m.TerminosCondicionesComponent),
  },

  // si alguien escribe cualquier otra cosa rara:
  { path: '**', redirectTo: '' },
];


