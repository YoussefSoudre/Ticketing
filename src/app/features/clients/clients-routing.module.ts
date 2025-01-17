import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { ClientListComponent } from './client-list/client-list.component';

const routes: Routes = [
  {path:'ajouter-client',component:AjouterClientComponent},
  {path:'modifier-client',component:ModifierClientComponent},
  {path:'client-list',component:ClientListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
