import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DonationRankingComponent } from './donation-ranking/donation-ranking.component';

import {MatListModule} from '@angular/material/list';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SaisonEnCoursPipe} from './saison-en-cours.pipe';
import {MeilleurSaisonPipe} from './meilleur-saison.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DonationRankingComponent,
    SaisonEnCoursPipe,
    MeilleurSaisonPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
