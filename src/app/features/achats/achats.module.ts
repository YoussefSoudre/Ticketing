import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InterventionComponent } from './intervention/intervention.component';
import { PointagesComponent } from './pointages/pointages.component';
import { SatistiquesComponent } from './satistiques/satistiques.component';
import { LayoutComponent } from '../layout/layout.component';
import { AchatsComponent } from './achats/achats.component';


@NgModule({
  declarations: [
    InterventionComponent,
 PointagesComponent,
 SatistiquesComponent,
 LayoutComponent,
 AchatsComponent

  ],

  imports: [
    CommonModule,
    SharedModule,










  ]



})
export class AchatsModule {

}
