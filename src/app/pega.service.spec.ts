import { TestBed } from '@angular/core/testing';

import { PegaService } from './pega.service';

describe('PegaService', () => {
  let service: PegaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PegaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
