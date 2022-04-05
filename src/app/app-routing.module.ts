import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ApproachComponent } from './approach/approach.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { ContactusComponent } from './contactus/contactus.component';
import { IndexComponent } from './index/index.component';
import { KeyOfferingsComponent } from './key-offerings/key-offerings.component';
import { NgModule } from '@angular/core';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: { title: '' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: '' }
  },
  {
    path: 'competencies',
    component: CompetenciesComponent,
    data: { title: '' }
  },
  {
    path: 'approach',
    component: ApproachComponent,
    data: { title: '' }
  },
  {
    path: 'key-offerings',
    component: KeyOfferingsComponent,
    data: { title: '' }
  },
  {
    path: 'team',
    component: TeamComponent,
    data: { title: '' }
  },
  {
    path: 'contact-us',
    component: ContactusComponent,
    data: { title: '' }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
