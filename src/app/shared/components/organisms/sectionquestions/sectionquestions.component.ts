import { Component } from '@angular/core';
import { faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sectionquestions',
  templateUrl: './sectionquestions.component.html',
  styleUrls: ['./sectionquestions.component.scss']
})
export class SectionquestionsComponent {
  panelOpenState = false;
  faCircleChevronUp = faCircleChevronUp;
  faCircleChevronDown = faCircleChevronDown;

}
