import { EmployeeService } from 'src/app/shared/services/clientDasboardServices/employeeService/employee.service';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
// import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';

import { TagModule } from 'primeng/tag';

import { ProductService, Product } from 'src/app/shared/services/product.service';
import { Customer, CustomerService, Representative } from 'src/app/shared/services/customer.service';

interface expandedRows {
  [key: string]: boolean;
}
@Component({
  selector: 'app-employer-liste',
  templateUrl: './employer-liste.component.html',
  styleUrls: ['./employer-liste.component.css'],
  providers: [ConfirmationService, MessageService, CustomerService, ProductService]
})
export class EmployerListeComponent implements OnInit {

  ajouterDialog: boolean= false;
  modifierDialog: boolean=false;

  ajouterDialogVisible: boolean = false;
  modifierDialogVisible: boolean = false;
  visible: boolean = false;

  header: string='Dialog';
  position: string = 'center';

  employerList: any = [];
  

  getEmployers(){
    this.employeservice.getEmployees().subscribe(data => {
      this.employerList = data;
      console.log('donnees des employés :', data);
    });
  }

  showAjouterDialog(position: string) { //Afficher le formulaire ajouter un employé
    this.position = position;
    this.ajouterDialogVisible = true;
    this.visible = true;

    this.ajouterDialog = true;
    this.modifierDialog = false;

    this.header="Ajouter un ticket";
    
}

showModifierDialog(position: string) { //Afficher le formulaire modifier un ticket
  this.position = position;
  this.modifierDialogVisible = true;
  this.visible = true;

  this.modifierDialog = true;
  this.ajouterDialog = false;
  this.header="Modifier un ticket";
  
}










customers1: Customer[] = [];

    customers2: Customer[] = [];

    customers3: Customer[] = [];

    selectedCustomers1: Customer[] = [];

    selectedCustomer: Customer = {};

    representatives: Representative[] = [];

    statuses: any[] = [];

    products: Product[] = [];

    rowGroupMetadata: any;

    expandedRows: expandedRows = {};

    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    balanceFrozen: boolean = false;

    loading: boolean = true;

    @ViewChild('filter') filter!: ElementRef;

    constructor(
        private customerService: CustomerService,
        private productService: ProductService,
        private employeservice: EmployeeService
    ) {}

    ngOnInit() {
      this.getEmployers();

      this.customerService.getCustomersLarge().then((customers) => {
          this.customers1 = customers;
          this.loading = false;

          // @ts-ignore
          this.customers1.forEach((customer) => (customer.date = new Date(customer.date)));
      });
      this.customerService.getCustomersMedium().then((customers) => (this.customers2 = customers));
      this.customerService.getCustomersLarge().then((customers) => (this.customers3 = customers));
      this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));

  }

  onSort() {
      this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
      this.rowGroupMetadata = {};

      if (this.customers3) {
          for (let i = 0; i < this.customers3.length; i++) {
              const rowData = this.customers3[i];
              const representativeName = rowData?.representative?.name || '';

              if (i === 0) {
                  this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
              } else {
                  const previousRowData = this.customers3[i - 1];
                  const previousRowGroup = previousRowData?.representative?.name;
                  if (representativeName === previousRowGroup) {
                      this.rowGroupMetadata[representativeName].size++;
                  } else {
                      this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
                  }
              }
          }
      }
  }

  expandAll() {
      if (!this.isExpanded) {
          this.products.forEach((product) => (product && product.name ? (this.expandedRows[product.name] = true) : ''));
      } else {
          this.expandedRows = {};
      }
      this.isExpanded = !this.isExpanded;
  }

  formatCurrency(value: number) {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
      table.clear();
      this.filter.nativeElement.value = '';
  }

  getSeverity(status: string) {
      switch (status) {
          case 'admin':
            case 'ADMIN':
              return 'success';

            case 'USER':
            case 'user':
              return 'warn';

          case 'CANCELLED':
          case 'cancelled':
              return 'danger';

          default:
              return 'info';
      }
  }

  calculateCustomerTotal(name: string) {
      let total = 0;

      if (this.customers2) {
          for (let customer of this.customers2) {
              if (customer.representative?.name === name) {
                  total++;
              }
          }
      }

      return total;
  }




}
