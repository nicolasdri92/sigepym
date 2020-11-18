import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './page/client/client.component';
import { ProductComponent } from './page/product/product.component';
import { SupplierComponent } from './page/supplier/supplier.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/base-de-datos/cliente',
    pathMatch: 'full',
  },
  {
    path: 'cliente',
    component: ClientComponent,
  },
  {
    path: 'producto',
    component: ProductComponent,
  },
  {
    path: 'proveedor',
    component: SupplierComponent,
  },
  {
    path: '**',
    redirectTo: '/base-de-datos/cliente',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatabaseRouting {}
