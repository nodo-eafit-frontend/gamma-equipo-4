import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './molecules/navbar/navbar.component'
import { AnchordonationsComponent } from './atoms/anchordonations/anchordonations.component'


@NgModule({
  declarations: [
    NavbarComponent,
    AnchordonationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, AnchordonationsComponent]
})
export class ComponentsModule { }
