import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModifierComponent } from './modifier/modifier.component';


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
    
  ],
  entryComponents: [
    // AjouterComponent
  ],
  providers: [
    // {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class TicketModule { }
