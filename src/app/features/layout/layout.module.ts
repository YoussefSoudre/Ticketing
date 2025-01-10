import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule 
  ]
})
export class LayoutModule { }
