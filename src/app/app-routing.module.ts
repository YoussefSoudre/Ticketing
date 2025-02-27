import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/authentification/login/login.component';
import { SignupComponent } from './features/authentification/signup/signup.component';
import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './features/layout/layout.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';


const routes: Routes = [

  {path: 'login/compte', component: LoginComponent},
  {path: 'new/signup', component: SignupComponent},
  {path: '', component: HomeComponent},

  { path: "", component: LayoutComponent, children: [
    {

      path: "", children: [
        { path: "auth", loadChildren: () => import('./features/authentification/authentification.module').then(m => m.AuthentificationModule) },
        { path: "home", loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
        { path: "tickets", loadChildren: () => import('./features/ticket/ticket.module').then(m=> m.TicketModule)},
        { path: "employers", loadChildren: () => import('./features/employers/employers.module').then(m => m.EmployersModule) },
        { path: "clients", loadChildren: () => import('./features/clients/clients.module').then(m => m.ClientsModule) },
        { path: "achats", loadChildren: () => import('./features/achats/achats.module').then(m => m.AchatsModule) },
        { path: "task", loadChildren: () => import('./features/task/task.module').then(m => m.TaskModule) },
        { path: "messagerie",loadChildren:()=>import('./features/messagerie/messagerie.module').then(m=> m.MessagerieModule)},
        { path: "dashboard", loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)},
        {path: 'error', component: PageNotFoundComponent},
        {path: "**", redirectTo: "/error"},



      ]
    }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
