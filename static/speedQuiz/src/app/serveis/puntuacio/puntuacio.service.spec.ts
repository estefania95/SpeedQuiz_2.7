import { TestBed } from '@angular/core/testing';

import { PuntuacioService } from './puntuacio.service';

describe('PuntuacioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuntuacioService = TestBed.get(PuntuacioService);
    expect(service).toBeTruthy();
  });
});
