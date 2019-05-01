import { TestBed } from '@angular/core/testing';

import { BotigaService } from './botiga.service';

describe('BotigaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BotigaService = TestBed.get(BotigaService);
    expect(service).toBeTruthy();
  });
});
