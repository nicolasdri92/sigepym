import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @ViewChild('general') general;
  @ViewChild('salesAndBilling') salesAndBilling;
  title: string = 'nuevo cliente';
  template: TemplateRef<any>;
  tabSelected: string;
  RefsalesAndBilling: string;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data?: {
      form?: FormGroup;
      tab?: { title: any };
      itemList?: any;
    }
  ) {
    this.tabSelected = this.data.tab[0].title;
  }

  onTabClick(e: { innerText: string }) {
    this.tabSelected = e.innerText;
    this.template =
      this.tabSelected == this.data.tab[0].title
        ? this.general
        : this.salesAndBilling;
  }

  save(): void {
    console.log(this.data.form.value);
    this.dialogRef.close(this.data.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}
