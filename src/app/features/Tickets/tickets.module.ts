import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModifierComponent } from './modifier/modifier.component';
import { TicketComponent } from './ticket/ticket.component';
import { MatTabsModule } from '@angular/material/tabs';







@NgModule({
  declarations: [
    AjouterComponent,
    ModifierComponent,
    TicketComponent 
  ],
 
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    
   
   
  
  
   
  
   
   
  ]


  
})
export class TicketModule {

 }
