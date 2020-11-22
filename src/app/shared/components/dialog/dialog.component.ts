import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @ViewChild('general') general: TemplateRef<any>;
  @ViewChild('salesAndBillingPartOne') salesAndBillingPartOne: TemplateRef<any>;
  @ViewChild('salesAndBillingPartTwo') salesAndBillingPartTwo: TemplateRef<any>;

  title: string = 'nuevo cliente';
  tabSelected: string;
  template: TemplateRef<any>;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data?: {
      title: string;
      template: TemplateRef<any>;
      form: FormGroup;
    }
  ) {}

  save(): void {
    this.dialogRef.close(this.data.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}
