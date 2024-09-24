import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetenciesRoutingModule } from './competencies-routing.module';
import { CompetenciesComponent } from './competencies.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    CompetenciesComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    CompetenciesRoutingModule
  ]
})
export class CompetenciesModule { }
