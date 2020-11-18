import { NgModule } from '@angular/core';

// Modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  exports: [MatDialogModule, MatSnackBarModule, MatTabsModule],
})
export class MaterialModule {}
