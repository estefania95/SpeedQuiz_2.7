import { TestBed } from '@angular/core/testing';

import { JocService } from './joc.service';

describe('JocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JocService = TestBed.get(JocService);
    expect(service).toBeTruthy();
  });
});
