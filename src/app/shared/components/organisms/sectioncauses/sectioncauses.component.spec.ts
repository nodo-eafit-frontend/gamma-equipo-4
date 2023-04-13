import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioncausesComponent } from './sectioncauses.component';

describe('SectioncausesComponent', () => {
  let component: SectioncausesComponent;
  let fixture: ComponentFixture<SectioncausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectioncausesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectioncausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
