import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Components
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
// Services
import { HttpService } from '../../../../shared/services/http/http.service';
// Material
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClientComponent implements OnInit {
  title: string = 'clientes';
  clientForm: FormGroup;
  states;
  docs: [];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;

  btn_add = { type: 'new', title: 'nuevo cliente' };
  clientTabs = [
    { name: 'active', title: 'Activos' },
    { name: 'inactive', title: 'Inactivos' },
    { name: 'recycleBin', title: 'Papelera' },
  ];
  dialogTabs = [
    { name: 'general', title: 'General' },
    { name: 'sell', title: 'Ventas' },
    { name: 'billing', title: 'Facturación' },
  ];
  itemList = {
    general: [
      {
        title: 'razón social *',
        type: 'text',
        name: 'business',
        attribute: 'required',
      },
      { title: 'página web', type: 'text', name: 'web' },
      { title: 'nombre', type: 'text', name: 'name' },
      { title: 'direccion', type: 'text', name: 'address' },
      { title: 'apellido', type: 'text', name: 'surname' },
      { title: 'numero', type: 'number', name: 'number' },
      {
        title: 'departamento',
        type: 'text',
        name: 'department',
      },
      { title: 'telefono', type: 'text', name: 'phone' },
      { title: 'celular', type: 'text', name: 'mobile' },
      { title: 'provincia', type: 'select', name: 'state' },
      { title: 'codigo postal', type: 'text', name: 'code' },
      { title: 'email', type: 'email', name: 'email' },
      { title: 'localidad', type: 'select', name: 'city' },
    ],
    sell: [
      {
        title: 'categoria ventas',
        type: 'select',
        name: 'sell_category',
        attribute: '',
      },
      {
        title: 'descuento general',
        type: 'text',
        name: 'sell_discount',
        attribute: '',
      },
    ],
    billing: [
      {
        title: 'razón social',
        type: 'text',
        name: 'billing_business',
      },
      { title: 'página web', type: 'text', name: 'billing_web' },
      { title: 'nombre', type: 'text', name: 'billing_name' },
      {
        title: 'direccion',
        type: 'text',
        name: 'billing_address',
      },
      {
        title: 'apellido',
        type: 'text',
        name: 'billing_surname',
      },
      {
        title: 'numero',
        type: 'number',
        name: 'billing_number',
      },
      {
        title: 'departamento',
        type: 'text',
        name: 'billing_department',
      },
      { title: 'telefono', type: 'text', name: 'billing_phone' },
      { title: 'celular', type: 'text', name: 'billing_mobile' },
      {
        title: 'provincia',
        type: 'select',
        name: 'billing_state',
      },
      {
        title: 'codigo postal',
        type: 'text',
        name: 'billing_code',
      },
      { title: 'email', type: 'email', name: 'billing_email' },
      {
        title: 'localidad',
        type: 'select',
        name: 'billing_city',
      },
    ],
  };

  columns = [
    { name: 'ID' },
    { name: 'Razón Social' },
    { name: 'Cliente' },
    { name: 'Contacto' },
    { name: 'Domicilio' },
    { name: 'Ubicación' },
    { name: 'Acciones' },
  ];

  constructor(
    private _httpService: HttpService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.getClient();
  }

  private getClient() {
    this._httpService.get('/client').subscribe(
      (res) => {
        this.docs = res.client.docs;
        this.totalDocs = res.client.totalDocs;
        this.limit = res.client.limit;
        this.totalPages = res.client.totalPages;
        this.page = res.client.page;
        this.pagingCounter = res.client.pagingCounter;
        this.hasPrevPage = res.client.hasPrevPage;
        this.hasNextPage = res.client.hasNextPage;
        this.prevPage = res.client.prevPage;
        this.nextPage = res.client.nextPage;
      },
      (err) => {}
    );
  }

  private getStates() {
    this._httpService.get('/state').subscribe((res) => {
       this.states = res.states;
    });
  }

  openDialog(): void {
    this.getStates();
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.data = {
      title: 'nuevo cliente',
      tabs: this.dialogTabs,
      form: this.clientForm,
      itemList: this.itemList,
      state: this.states,
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
      sell_category: '',
      sell_discount: '',
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
