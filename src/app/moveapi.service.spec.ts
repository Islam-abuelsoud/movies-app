import { TestBed } from '@angular/core/testing';

import { MoveapiService } from './moviesApi.service';

describe('MoveapiService', () => {
  let service: MoveapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
