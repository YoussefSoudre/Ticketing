import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';
import { LoginComponent } from './features/authentification/login/login.component';
import { SignupComponent } from './features/authentification/signup/signup.component';
import { TicketComponent } from './features/Tickets/ticket/ticket.component';
import { HomeComponent } from './features/home/home.component';


const routes: Routes = [

  {path: 'login/compte', component: LoginComponent},
  {path: 'new/signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
 
 { path: "ticket", component: LayoutComponent, children: [
    {
      
      path: "", children: [
        { path: "", loadChildren: () => import('./features/Tickets/ticket/ticket.module').then(m => m.TicketModule) },
        { path: "auth", loadChildren: () => import('./features/authentification/authentification.module').then(m => m.AuthentificationModule) },
        { path: "", loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
        { path: "employer", loadChildren: () => import('./features/employer/employer.module').then(m => m.EmployerModule) },
        { path: "client", loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule) },
        
      
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
