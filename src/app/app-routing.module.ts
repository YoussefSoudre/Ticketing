import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/authentification/login/login.component';
import { SignupComponent } from './features/authentification/signup/signup.component';
import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './features/layout/layout.component';


const routes: Routes = [

  {path: 'login/compte', component: LoginComponent},
  {path: 'new/signup', component: SignupComponent},
  {path: '', component: HomeComponent},
  

 { path: "", component: LayoutComponent, children: [
    {

      path: "", children: [
        { path: "ticket", loadChildren: () => import('./features/ticket/ticket.module').then(m=> m.TicketModule)},
        { path: "auth", loadChildren: () => import('./features/authentification/authentification.module').then(m => m.AuthentificationModule) },
        { path: "home", loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
        { path: "employers", loadChildren: () => import('./features/employers/employers.module').then(m => m.EmployersModule) },
        { path: "clients", loadChildren: () => import('./features/clients/clients.module').then(m => m.ClientsModule) },
        { path: "achats", loadChildren: () => import('./features/achats/achats.module').then(m => m.AchatsModule) },
        // { path: "dashboard", loadChildren: () => import('../../../../lite-version/dashboard/dashboard.module').then(m => m.DashboardModule) },



      ]
    }
  ]
},
{path: "**", redirectTo: "ticket"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
