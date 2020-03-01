import { TestBed } from '@angular/core/testing';

import { RouterGaurdServiceService } from './router-gaurd-service.service';

describe('RouterGaurdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterGaurdServiceService = TestBed.get(RouterGaurdServiceService);
    expect(service).toBeTruthy();
  });
});
