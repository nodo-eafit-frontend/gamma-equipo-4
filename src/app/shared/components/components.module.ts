import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayModule } from '@angular/cdk/overlay';


import { NavbarComponent } from './molecules/navbar/navbar.component'
import { AnchordonationsComponent } from './atoms/anchordonations/anchordonations.component';
import { CardscausesComponent } from './molecules/cardscauses/cardscauses.component';
import { SectioncausesComponent } from './organisms/sectioncauses/sectioncauses.component';
import { SectioncampaignsComponent } from './organisms/sectioncampaigns/sectioncampaigns.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NavbarComponent,
    AnchordonationsComponent,
    CardscausesComponent,
    SectioncausesComponent,
    SectioncampaignsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    FontAwesomeModule,
    OverlayModule,
    NgbCarouselModule
  ],
  exports: [NavbarComponent, AnchordonationsComponent, CardscausesComponent, SectioncausesComponent,  SectioncampaignsComponent ]
})
export class ComponentsModule { }
