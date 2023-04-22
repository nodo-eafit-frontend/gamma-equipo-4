import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioncertificateComponent } from './sectioncertificate.component';

describe('SectioncertificateComponent', () => {
  let component: SectioncertificateComponent;
  let fixture: ComponentFixture<SectioncertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectioncertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectioncertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
