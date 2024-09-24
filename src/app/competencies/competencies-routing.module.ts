import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetenciesComponent } from './competencies.component';

const routes: Routes = [{ path: '', component: CompetenciesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciesRoutingModule { }
