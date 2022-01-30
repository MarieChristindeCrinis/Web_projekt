import { TestBed } from '@angular/core/testing';

import { ServerLocationService } from './server-location.service';

describe('ServerLocationService', () => {
  let service: ServerLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
