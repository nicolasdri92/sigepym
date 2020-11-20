import { NgModule } from '@angular/core';

// Modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [MatDialogModule, MatSnackBarModule],
})
export class MaterialModule {}
