import { TestBed } from '@angular/core/testing';

import { RadarApiService } from './radar-api.service';

describe('RadarApiService', () => {
  let service: RadarApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadarApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
