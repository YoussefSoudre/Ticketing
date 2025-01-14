import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { TicketComponent } from '../Tickets/ticket/ticket.component';

const routes: Routes = [
  {path: '', component:LayoutComponent},
  {path: 'board', component:TicketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
