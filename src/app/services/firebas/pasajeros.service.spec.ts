import { TestBed } from '@angular/core/testing';

import { PasajerosService } from './auth.service';

describe('PasajerosService', () => {
  let service: PasajerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasajerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
