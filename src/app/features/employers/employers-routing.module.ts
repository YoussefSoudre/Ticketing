import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterEmployerComponent } from './ajouter-employer/ajouter-employer.component';
import { ModifierClientComponent } from '../clients/modifier-client/modifier-client.component';
import { EmployerListeComponent } from './employer-liste/employer-liste.component';
import { DetailEmployeComponent } from './detail-employe/detail-employe.component';

const routes: Routes = [
  {path:'ajouter-employer',component:AjouterEmployerComponent},
  {path:'modifier-employer',component:ModifierClientComponent},
  {path:'employer-liste',component:EmployerListeComponent},
  {path:'detail-employe',component:DetailEmployeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployersRoutingModule { }
