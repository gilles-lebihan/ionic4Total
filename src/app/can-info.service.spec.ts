import { TestBed } from '@angular/core/testing';

import { CanInfoService } from './can-info.service';

describe('CanInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanInfoService = TestBed.get(CanInfoService);
    expect(service).toBeTruthy();
  });
});
