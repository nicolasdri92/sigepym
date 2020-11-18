import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouting } from './home.routing';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRouting],
})
export class HomeModule {}
