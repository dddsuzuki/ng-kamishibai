import { TestBed } from '@angular/core/testing';

import { KamishibaiService } from './kamishibai.service';

describe('PageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KamishibaiService = TestBed.get(KamishibaiService);
    expect(service).toBeTruthy();
  });
});
