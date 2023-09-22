import { TestBed } from '@angular/core/testing';

import { CureWellService } from './cure-well.service';

describe('CureWellService', () => {
  let service: CureWellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CureWellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
