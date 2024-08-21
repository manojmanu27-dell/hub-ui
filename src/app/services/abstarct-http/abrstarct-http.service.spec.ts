import { TestBed } from '@angular/core/testing';

import { AbrstarctHttpService } from './abrstarct-http.service';

describe('AbrstarctHttpService', () => {
  let service: AbrstarctHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbrstarctHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
