import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';


const routes: Routes = [
 { path: "ticket", component: LayoutComponent, children: [
    {
      path: "", children: [
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
