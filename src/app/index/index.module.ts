import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { LayoutModule } from '../layout/layout.module';
import { HeroModule } from '../components/hero/hero.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    LayoutModule,
    HeroModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IndexRoutingModule
  ]
})
export class IndexModule {}
