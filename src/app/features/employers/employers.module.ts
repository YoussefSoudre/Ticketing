import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployersRoutingModule } from './employers-routing.module';
import { EmployerListeComponent } from './employer-liste/employer-liste.component';
import { ModifierEmployerComponent } from './modifier-employer/modifier-employer.component';
import { AjouterEmployerComponent } from './ajouter-employer/ajouter-employer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogModule } from 'primeng/dialog';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { DetailEmployeComponent } from './detail-employe/detail-employe.component';


@NgModule({
  declarations: [
    EmployerListeComponent,
    ModifierEmployerComponent,
    AjouterEmployerComponent,
    DetailEmployeComponent
  ],
  imports: [
    CommonModule,
    EmployersRoutingModule,
    SharedModule,
    DialogModule
  ]
})
export class EmployersModule { }
