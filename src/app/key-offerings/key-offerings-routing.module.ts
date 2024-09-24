import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyOfferingsComponent } from './key-offerings.component';

const routes: Routes = [{ path: '', component: KeyOfferingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyOfferingsRoutingModule { }
