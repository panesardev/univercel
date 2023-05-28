import { Routes } from '@angular/router';
import HomeComponent from './routes/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    loadComponent: () => import('./routes/about/about.component'),
  }
];
