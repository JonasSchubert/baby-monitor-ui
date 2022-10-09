import { TestBed } from '@angular/core/testing';

import { LullabiesService } from './lullabies.service';

describe('LullabiesService', () => {
  let service: LullabiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LullabiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
