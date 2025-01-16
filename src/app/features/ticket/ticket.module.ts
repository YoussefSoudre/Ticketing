import { NgModule } from '@angular/core';
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
    DynamicDialogModule
  ],
  entryComponents: [
    // AjouterComponent
  ],
  providers: [
    // {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
    DialogService
  ]
})
export class TicketModule { }
