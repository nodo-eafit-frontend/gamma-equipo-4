import { Component, Input, OnInit } from '@angular/core';
import { IcarouselItem } from './Icarousel-item.metadata';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sectioncampaigns',
  templateUrl: './sectioncampaigns.component.html',
  styleUrls: ['./sectioncampaigns.component.scss'],
})
export class SectioncampaignsComponent implements OnInit {
  faCircleChevronLeft = faCircleChevronLeft;
  faCircleChevronRight = faCircleChevronRight;
  videoUrlCampaing1: SafeUrl;
  videoUrlCampaing2: SafeUrl;

  @Input() height = 100;
  @Input() isFullScreen = false;

  constructor(private sanitizer: DomSanitizer) {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}vh`;
    this.videoUrlCampaing1 = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/DcrtCEfsAxc'
    );
    this.videoUrlCampaing2 = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/NpUUfkPnwzQ'
    );
  }

  @Input() items: IcarouselItem[] = [
    {
      id: 1,
      title: 'CAMPAÑAS EAFITENSES',
      campaing: 'VAMOS PA LANTE',
      description:
        'Con tus aportes logramos que más jovenes continuen con sus estudios universitarios',
      image: '../../../assets/image/img-carousel-vamos-pa-lante.png',
      backgroundColor: '#FFFEF8',
      date: 'Fecha de apertura de la campaña',
      class: 'carousel__content--center',
    },
    {
      id: 2,
      title: 'CAMPAÑAS EAFITENSES',
      campaing: 'GIVING DAY',
      description:
        'Juntos logramos posibilidades que transforman vidas ¡Gracias por volar con nosotros!',
      image: '../../../assets/image/img-carousel-giving.png',
      backgroundColor: '#09394C',
      date: 'Fecha de apertura de la campaña',
      class: 'carousel__content--center',
    },
    {
      id: 3,
      title: 'CAMPAÑAS EAFITENSES',
      campaing: 'PRODUCTOS CON SENTIDO',
      description:
        'Por la compra de nuestros productos apoyas al fondo de becas universitarias',
      image: '../../../assets/image/img-carousel-products.png',
      backgroundColor: '#004D71',
      date: 'Fecha de apertura de la campaña',
    },
  ];

  finalHeight: string | number = 0;
  currentPosition = 0;

  ngOnInit(): void {
    this.items.map((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    });
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    this.items.find((i) => i.id === 0)!.marginLeft = -100 * position;
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = backPosition;
  }
}
