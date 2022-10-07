import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSectionComponent } from './news-section.component';

describe('NewsComponent', () => {
  let component: NewsSectionComponent;
  let fixture: ComponentFixture<NewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
