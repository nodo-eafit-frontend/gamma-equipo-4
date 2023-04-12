import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardscausesComponent } from './cardscauses.component';

describe('CardscausesComponent', () => {
  let component: CardscausesComponent;
  let fixture: ComponentFixture<CardscausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardscausesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardscausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
