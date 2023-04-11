import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DonationsComponent } from './pages/donations/donations.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DonationsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
