import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleSectionComponent } from './lifestyle-section.component';

describe('LifestyleSectionComponent', () => {
  let component: LifestyleSectionComponent;
  let fixture: ComponentFixture<LifestyleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifestyleSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifestyleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
