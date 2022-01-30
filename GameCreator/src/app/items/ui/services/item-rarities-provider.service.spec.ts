import { TestBed } from '@angular/core/testing';

import { ItemRaritiesProviderService } from './item-rarities-provider.service';

describe('ItemRaritiesProviderService', () => {
  let service: ItemRaritiesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemRaritiesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
