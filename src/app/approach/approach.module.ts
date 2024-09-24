import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApproachRoutingModule } from './approach-routing.module';
import { ApproachComponent } from './approach.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    ApproachComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ApproachRoutingModule
  ]
})
export class ApproachModule { }
