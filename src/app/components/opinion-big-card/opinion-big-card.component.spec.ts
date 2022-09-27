import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionBigCardComponent } from './opinion-big-card.component';

describe('OpinionBigCardComponent', () => {
  let component: OpinionBigCardComponent;
  let fixture: ComponentFixture<OpinionBigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionBigCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpinionBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
