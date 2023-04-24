import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {

  faWhatsapp = faWhatsapp;

  logo = '../assets/image/logos/logo-nuevo-filantropia.png';
  title = 'Transforma vidas con tus aportes';
  footer = 'Donar es muy sencillo solo debes seguir los pasos tu donación será rápida y 100% segura'

  step: any = 1;
  stepContact: any;

  ngOnInit(): void {
  }

  next() {
    this.step = this.step + 1
  }

  back() {
    this.step = this.step - 1
  }

  nextContact() {
    this.stepContact = 1
  }

  backContact() {
  this.step = 1
  this.stepContact = 0
  }
}
