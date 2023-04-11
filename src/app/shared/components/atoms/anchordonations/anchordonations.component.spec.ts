import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchordonationsComponent } from './anchordonations.component';

describe('AnchordonationsComponent', () => {
  let component: AnchordonationsComponent;
  let fixture: ComponentFixture<AnchordonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnchordonationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchordonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
