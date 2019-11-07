import { TestBed } from '@angular/core/testing';

import { NgKamishibaiService } from './ng-kamishibai.service';

describe('NgKamishibaiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgKamishibaiService = TestBed.get(NgKamishibaiService);
    expect(service).toBeTruthy();
  });
});
