import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

// Components
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { ButtonComponent } from './components/button/button.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { TabComponent } from './components/tab/tab.component';

const Components = [
  ControlMessagesComponent,
  ButtonComponent,
  DialogComponent,
  InputComponent,
  SelectComponent,
  TabComponent,
];

@NgModule({
  declarations: [Components],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    ControlMessagesComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
