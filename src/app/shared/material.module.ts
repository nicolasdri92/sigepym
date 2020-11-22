import { NgModule } from '@angular/core';

// Modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

const Material = [MatDialogModule, MatSnackBarModule, MatTooltipModule];

@NgModule({
  exports: [Material],
})
export class MaterialModule {}
