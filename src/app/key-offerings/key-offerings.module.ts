import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeyOfferingsRoutingModule } from './key-offerings-routing.module';
import { KeyOfferingsComponent } from './key-offerings.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    KeyOfferingsComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    KeyOfferingsRoutingModule
  ]
})
export class KeyOfferingsModule { }
