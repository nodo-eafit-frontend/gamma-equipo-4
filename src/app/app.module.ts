import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DonationsComponent } from './pages/donations/donations.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DonationsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SharedModule,
    NgbModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
