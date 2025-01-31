import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { AjouterComponent } from './ajouter/ajouter.component';

const routes: Routes = [
  {path: 'ticket-list', component: TicketListComponent},
  {path: 'ajouter', component: AjouterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
