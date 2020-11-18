import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseRouting } from './database.routing';

import { SharedModule } from 'src/app/shared/shared.module';

import { ClientComponent } from './page/client/client.component';
import { ProductComponent } from './page/product/product.component';
import { SupplierComponent } from './page/supplier/supplier.component';

@NgModule({
  declarations: [ClientComponent, ProductComponent, SupplierComponent],
  imports: [CommonModule, DatabaseRouting, SharedModule],
})
export class DatabaseModule {}
