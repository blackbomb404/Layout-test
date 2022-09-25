import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleNewsComponent } from './lifestyle-news.component';

describe('LifestyleNewsComponent', () => {
  let component: LifestyleNewsComponent;
  let fixture: ComponentFixture<LifestyleNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifestyleNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifestyleNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
