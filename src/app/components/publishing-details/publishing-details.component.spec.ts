import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingDetailsComponent } from './publishing-details.component';

describe('PublishingDetailsComponent', () => {
  let component: PublishingDetailsComponent;
  let fixture: ComponentFixture<PublishingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
