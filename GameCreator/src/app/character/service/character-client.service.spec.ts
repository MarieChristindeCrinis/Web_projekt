import { TestBed } from '@angular/core/testing';

import { CharacterClientService } from './character-client.service';

describe('CharacterClientService', () => {
  let service: CharacterClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
