import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    title: 'Inicio',
    loadComponent: () => import('./components/pages/page/page.component')
  },
  {
    path: 'publicaciones',
    title: 'Publicaciones',
    loadComponent: () => import('./components/pages/publicaciones/publicaciones.component'),
  },
  {
    path: 'portafolio',
    title: 'portafolio',
    loadComponent: () => import('./components/pages/portafolio/portafolio.component'),
  },
  {
    path: 'publicaciones/:term',
    title: 'Publicaciones',
    loadComponent: () => import('./components/pages/publicaciones/publicacion-por-id/publicacion-por-id.component'),
  },
  {
    path: 'proyecto/:id',
    title: 'proyectos por id',
    loadComponent: () => import('./components/pages/portafolio/proyecto-por-id/proyecto-por-id.component'),
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];
