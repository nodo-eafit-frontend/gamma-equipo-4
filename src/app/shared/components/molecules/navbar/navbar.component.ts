import { Component } from '@angular/core';
import {
  faAngleUp,
  faAngleDown,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faCircleXmark = faCircleXmark;
  isOpen = false;

  navbar = {
    logo: {
      src: '../../assets/image/logos/logo-nuevo-filantropia.png',
      alt: 'Logo-Filantropía',
    },
    donate: 'Donar ahora',
    certificate: 'Certificado donación',
    frequentQuestions: 'Preguntas frecuentes',
    reports: 'Informes de gestión',
    contact: 'Contacto',
  };

  urlsReports = {
    report2022:
      'https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/informe-de-gestion-2022.aspx',
    report2021:
      'https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/informegestion2021.aspx',
    report2020:
      'https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/informe-de-gestion-filantropia2020.aspx',
    report2019:
      'https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/informe-de-gestion-filantropia2019.aspx',
  };
}
