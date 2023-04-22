import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';


import { NavbarComponent } from './molecules/navbar/navbar.component'
import { AnchordonationsComponent } from './atoms/anchordonations/anchordonations.component';
import { CardscausesComponent } from './molecules/cardscauses/cardscauses.component';
import { SectioncausesComponent } from './organisms/sectioncauses/sectioncauses.component';
import { SectioncampaignsComponent } from './organisms/sectioncampaigns/sectioncampaigns.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionquestionsComponent } from './organisms/sectionquestions/sectionquestions.component';
import { SectioncertificateComponent } from './organisms/sectioncertificate/sectioncertificate.component';


@NgModule({
  declarations: [
    NavbarComponent,
    AnchordonationsComponent,
    CardscausesComponent,
    SectioncausesComponent,
    SectioncampaignsComponent,
    SectionquestionsComponent,
    SectioncertificateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    FontAwesomeModule,
    OverlayModule,
    NgbCarouselModule,
    MatExpansionModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [NavbarComponent, AnchordonationsComponent, CardscausesComponent, SectioncausesComponent,  SectioncampaignsComponent, SectionquestionsComponent, SectioncertificateComponent ]
})
export class ComponentsModule { }
