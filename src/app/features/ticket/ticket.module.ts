import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModifierComponent } from './modifier/modifier.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';

import { TagModule } from 'primeng/tag';
import { HttpClientModule } from '@angular/common/http';
import { MultiSelectModule } from 'primeng/multiselect';
import { Table, TableModule } from 'primeng/table';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [
    TicketListComponent,
    AjouterComponent,
    ModifierComponent
  ],
  imports: [
    
    CommonModule,
    TicketRoutingModule,
    SharedModule,
    
    CardModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    DynamicDialogModule,
    HttpClientModule,
    MultiSelectModule,
    TableModule,
    TagModule,
  ],
  entryComponents: [
    // AjouterComponent
  ],
  providers: [
    // {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
    DialogService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicketModule { }
