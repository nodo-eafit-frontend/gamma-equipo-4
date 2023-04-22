import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module'


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FontAwesomeModule,
    NgbCarouselModule
  ],
  exports: [ComponentsModule, MaterialModule],
  declarations: [

  ]
})
export class SharedModule { }
