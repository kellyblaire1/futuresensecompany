import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
