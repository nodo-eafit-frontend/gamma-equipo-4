import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FontAwesomeModule,
    NgbCarouselModule
  ],
  exports: [ComponentsModule],
  declarations: [

  ]
})
export class SharedModule { }
