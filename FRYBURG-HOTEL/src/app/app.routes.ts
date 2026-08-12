import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
  },
  
   {
  path: 'hotel/:id',
  loadComponent: () =>
    import('./pages/hotel/hotel').then((m) => m.Hotel),
},
  {
    path: 'reservas',
    loadComponent: () =>
      import('./pages/reservas/reservas').then((m) => m.Reservas),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/adimin/adimin').then((m) => m.Adimin),
  },
];