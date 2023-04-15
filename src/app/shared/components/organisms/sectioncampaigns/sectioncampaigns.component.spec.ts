import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioncampaignsComponent } from './sectioncampaigns.component';

describe('SectioncampaignsComponent', () => {
  let component: SectioncampaignsComponent;
  let fixture: ComponentFixture<SectioncampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectioncampaignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectioncampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
