import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterTaskComponent } from './ajouter-task/ajouter-task.component';
import { DetaileTaskComponent } from './detaile-task/detaile-task.component';
import { ModifierTaskComponent } from './modifier-task/modifier-task.component';

const routes: Routes = [
{path: 'ajouter-task', component: AjouterTaskComponent},
{path: 'detailed-task', component: DetaileTaskComponent},
{path:'modifier-task', component: ModifierTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
