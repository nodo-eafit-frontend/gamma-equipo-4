import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DonationsComponent } from './pages/donations/donations.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'donations', component: DonationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
