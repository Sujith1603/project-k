import { TestBed } from '@angular/core/testing';

import { DopprofileService } from './dopprofile.service';

describe('DopprofileService', () => {
  let service: DopprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DopprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
