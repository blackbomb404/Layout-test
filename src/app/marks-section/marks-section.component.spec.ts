import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksSectionComponent } from './marks-section.component';

describe('MarksSectionComponent', () => {
  let component: MarksSectionComponent;
  let fixture: ComponentFixture<MarksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
