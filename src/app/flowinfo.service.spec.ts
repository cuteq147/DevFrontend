import { TestBed } from '@angular/core/testing';

import { FlowinfoService } from './flowinfo.service';

describe('FlowinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlowinfoService = TestBed.get(FlowinfoService);
    expect(service).toBeTruthy();
  });
});
