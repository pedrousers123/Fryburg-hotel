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
      import('./pages/admin/adimin').then((m) => m.Admin),
  },

  {
    path: 'admin/dashboard',
    loadComponent: () =>
      import('./pages/admin/dashboard/dashboard').then(
        (m) => m.Dashboard,
      ),
  },

  {
    path: 'admin/despesas',
    loadComponent: () =>
      import('./pages/admin/despesas/despesas').then(
        (m) => m.Despesas,
      ),
  },

  {
    path: 'admin/funcionarios',
    loadComponent: () =>
      import('./pages/admin/funcionarios/funcionarios').then(
        (m) => m.Funcionarios,
      ),
  },

  {
    path: 'admin/manutencao',
    loadComponent: () =>
      import('./pages/admin/manutencao/manutencao').then(
        (m) => m.Manutencao,
      ),
  },

  {
    path: 'admin/marketing',
    loadComponent: () =>
      import('./pages/admin/marketintg/marketintg').then(
        (m) => m.Marketintg,
      ),
  },

  {
    path: 'admin/restaurante',
    loadComponent: () =>
      import('./pages/admin/restaurante/restaurante').then(
        (m) => m.Restaurante,
      ),
  },
];