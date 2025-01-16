import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchatsRoutingModule } from './achats-routing.module';
import { InterventionComponent } from './intervention/intervention.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { PointagesComponent } from './pointages/pointages.component';
import { SatistiqueComponent } from './satistique/satistique.component';


@NgModule({
  declarations: [
    InterventionComponent,
    MessagerieComponent,
    PointagesComponent,
    SatistiqueComponent
  ],
  imports: [
    CommonModule,
    AchatsRoutingModule
  ]
})
export class AchatsModule { }
