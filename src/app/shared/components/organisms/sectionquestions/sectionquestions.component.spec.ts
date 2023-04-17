import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionquestionsComponent } from './sectionquestions.component';

describe('SectionquestionsComponent', () => {
  let component: SectionquestionsComponent;
  let fixture: ComponentFixture<SectionquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionquestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
