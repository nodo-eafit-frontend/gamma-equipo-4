import { Component } from '@angular/core';
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-cardscauses',
  templateUrl: './cardscauses.component.html',
  styleUrls: ['./cardscauses.component.scss']
})
export class CardscausesComponent {

  faArrowRight = faArrowRight;
  faCoffee = faCoffee;

  cardsCauses = [
    {
      title: 'Equidad social e inclusión',
      img: '../../assets/image/img-card-equidad-social.png',
      description: 'Estudiantes con oportunidades a través de becas y apoyos económicos',
      alt: 'Imagen de equidad social e inclusión',
      routerLink: '/'
    },
    {
      title: 'Ciencia, tecnología e innovación',
      img: '../../assets/image/img-card-equidad-social.png',
      description: 'Apalancamos proyectos de investigación científica y aplicada para beneficio de la humanidad',
      alt: 'Imagen de ciencia, tecnología e innovación',
      routerLink: '/'
    },
    {
      title: 'Transformación humanista',
      img: '../../assets/image/img-card-transformacion-hum.png',
      description: 'Con tus aportes a esta causa contribuyes a la creción de espacios y ambientes que favorecen el aprendizaje integral',
      alt: 'Imagen de transformación humanista',
      routerLink: '/'
    },
    {
      title: 'Inspiración - voluntariado',
      img: '../../assets/image/img-card-transformacion-hum.png',
      description: 'Conectamos talento eafitense para un mayor impacto en las iniciativas sociales',
      alt: 'Imagen de inspriación y voluntariado',
      routerLink: '/'
    }
  ]
}
