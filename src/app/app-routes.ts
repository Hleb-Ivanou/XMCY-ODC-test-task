import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/all-photos/all-photos.component').then((mod) => mod.AllPhotosComponent),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./pages/favorite-photos/favorite-photos.component').then((mod) => mod.FavoritePhotosComponent),
  },
  {
    path: 'photos/:id',
    loadComponent: () =>
      import('./pages/photo-details/photo-details.component').then((mod) => mod.PhotoDetailsComponent),
  },
];
