import { TestBed } from '@angular/core/testing';

import { XnotesService } from './xnotes.service';

describe('XnotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XnotesService = TestBed.get(XnotesService);
    expect(service).toBeTruthy();
  });
});
