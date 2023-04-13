import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayModule } from '@angular/cdk/overlay';



import { NavbarComponent } from './molecules/navbar/navbar.component'
import { AnchordonationsComponent } from './atoms/anchordonations/anchordonations.component';
import { CardscausesComponent } from './molecules/cardscauses/cardscauses.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AnchordonationsComponent,
    CardscausesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    FontAwesomeModule,
    OverlayModule
  ],
  exports: [NavbarComponent, AnchordonationsComponent, CardscausesComponent]
})
export class ComponentsModule { }
