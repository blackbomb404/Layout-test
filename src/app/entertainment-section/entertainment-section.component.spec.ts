import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentSectionComponent } from './entertainment-section.component';

describe('EntertainmentSectionComponent', () => {
  let component: EntertainmentSectionComponent;
  let fixture: ComponentFixture<EntertainmentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
