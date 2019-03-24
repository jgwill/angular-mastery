import { TestBed } from '@angular/core/testing';

import { GIXNGButtonsService } from './gixngbuttons.service';

describe('GIXNGButtonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GIXNGButtonsService = TestBed.get(GIXNGButtonsService);
    expect(service).toBeTruthy();
  });
});
