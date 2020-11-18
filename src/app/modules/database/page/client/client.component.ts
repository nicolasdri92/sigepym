import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Components
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
// Material
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  title: string = 'clientes';
  clientForm: FormGroup;
  btn_add = { type: 'new', title: 'nuevo cliente' };
  tabs = [
    { title: 'Todos', count: 47 },
    { title: 'Activos', count: 32 },
    { title: 'Inactivos', count: 15 },
  ];
  tabList = [{ title: 'General' }, { title: 'Ventas y Facturación' }];
  itemList = {
    general: [
      { title: 'razón social *', type: 'text', name: 'business' },
      { title: 'página web', type: 'text', name: 'web' },
      { title: 'nombre', type: 'text', name: 'name' },
      { title: 'direccion', type: 'text', name: 'address' },
      { title: 'apellido', type: 'text', name: 'surname' },
      { title: 'numero', type: 'number', name: 'number' },
      { title: 'departamento', type: 'text', name: 'department' },
      { title: 'telefono', type: 'text', name: 'phone' },
      { title: 'celular', type: 'text', name: 'mobile' },
      { title: 'provincia', type: 'select', name: 'state' },
      { title: 'codigo postal', type: 'text', name: 'code' },
      { title: 'email', type: 'email', name: 'email' },
      { title: 'localidad', type: 'select', name: 'city' },
    ],
    salesAndBilling: {
      partOne: [
        { title: 'categoria ventas', type: 'select', name: 'sales_category' },
        { title: 'descuento general', type: 'text', name: 'sales_discount' },
        { title: 'razón social', type: 'text', name: 'billing_business' },
        { title: 'página web', type: 'text', name: 'billing_web' },
        { title: 'nombre', type: 'text', name: 'billing_name' },
        { title: 'direccion', type: 'text', name: 'billing_address' },
        { title: 'apellido', type: 'text', name: 'billing_surname' },
        { title: 'numero', type: 'number', name: 'billing_number' },
        { title: 'departamento', type: 'text', name: 'billing_department' },
      ],
      partTwo: [   
        { title: 'telefono', type: 'text', name: 'billing_phone' },
        { title: 'celular', type: 'text', name: 'billing_mobile' },
        { title: 'provincia', type: 'select', name: 'billing_state' },
        { title: 'codigo postal', type: 'text', name: 'billing_code' },
        { title: 'email', type: 'email', name: 'billing_email' },
        { title: 'localidad', type: 'select', name: 'billing_city' },
      ],
    },
  };
  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.buildForm();
  }

  ngOnInit(): void {}

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      form: this.clientForm,
      tab: this.tabList,
      itemList: this.itemList,
    };

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {});
  }

  private buildForm(): void {
    this.clientForm = this.formBuilder.group({
      business: ['', Validators.required],
      name: '',
      surname: '',
      phone: null,
      mobile: null,
      email: ['', Validators.email],
      web: '',
      address: '',
      number: null,
      department: '',
      state: '',
      code: '',
      city: '',
      sales_category: '',
      sales_discount: '',
      billing_business: '',
      billing_name: '',
      billing_surname: '',
      billing_phone: null,
      billing_mobile: null,
      billing_email: ['', Validators.email],
      billing_web: '',
      billing_address: '',
      billing_number: null,
      billing_department: '',
      billing_state: '',
      billing_code: '',
      billing_city: '',
    });
  }
}
