import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  date: string;
  document: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: '21-04-2023', name: 'Alexander Gallo López',  document: 'Descargar PDF'},
  {position: 2, date: '21-04-2023', name: 'Alexander Gallo López',  document: 'Descargar PDF'},
];

@Component({
  selector: 'app-sectioncertificate',
  templateUrl: './sectioncertificate.component.html',
  styleUrls: ['./sectioncertificate.component.scss']
})
export class SectioncertificateComponent {

  displayedColumns: string[] = ['position', 'date', 'name', 'document'];
  dataSource = ELEMENT_DATA;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  description: string = 'Gracias por su confianza, por creer en el poder transformador de la educación y por apostarle a construir juntos iniciativas generadoras de valor y desarrollo';

  constructor(private _formBuilder: FormBuilder) {}
}
