import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      tabs: any;
      form: FormGroup;
      firstTemplate;
      secondTemplate;
    }
  ) {}

  save(): void {
    console.log(this.data.form.value);
    this.reset();
    this.dialogRef.close(this.data.form.value);
  }

  reset(): void {
    this.data.form.reset();
  }

  close(): void {
    this.reset();
    this.dialogRef.close();
  }
}
