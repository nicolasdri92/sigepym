import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './layout/auth/auth.component';
import { ContentComponent } from './layout/content/content.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: ContentComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'base-de-datos',
        loadChildren: () =>
          import('./modules/database/database.module').then((m) => m.DatabaseModule),
      }
    ],
  },
  {
    path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRouting {}
