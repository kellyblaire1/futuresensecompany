import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './about/about.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { ApproachComponent } from './approach/approach.component';
import { KeyOfferingsComponent } from './key-offerings/key-offerings.component';
import { TeamComponent } from './team/team.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    CompetenciesComponent,
    ApproachComponent,
    KeyOfferingsComponent,
    TeamComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
