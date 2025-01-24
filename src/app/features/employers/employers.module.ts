import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployersRoutingModule } from './employers-routing.module';
import { EmployerListeComponent } from './employer-liste/employer-liste.component';
import { ModifierEmployerComponent } from './modifier-employer/modifier-employer.component';
import { AjouterEmployerComponent } from './ajouter-employer/ajouter-employer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EmployerListeComponent,
    ModifierEmployerComponent,
    AjouterEmployerComponent
  ],
  imports: [
    CommonModule,
    EmployersRoutingModule,
    SharedModule
  ]
})
export class EmployersModule { }
