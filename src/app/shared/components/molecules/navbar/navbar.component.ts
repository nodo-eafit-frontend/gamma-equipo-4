import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    navbar = {
      logo: {
        src: '../../assets/image/logos/logo-nuevo-filantropia.png',
        alt: 'Logo-Filantropía'
      },
      donate: 'Donar ahora',
      certificate: 'Certificado donación',
      frequentQuestions: 'Preguntas frecuentes',
      reports: 'Informes de gestión',
      contact: 'Contácto'

    }
}
