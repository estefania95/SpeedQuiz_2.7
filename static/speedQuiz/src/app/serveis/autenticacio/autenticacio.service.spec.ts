import { TestBed } from '@angular/core/testing';

import { AutenticacioService } from './autenticacio.service';

describe('AutenticacioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticacioService = TestBed.get(AutenticacioService);
    expect(service).toBeTruthy();
  });
});
