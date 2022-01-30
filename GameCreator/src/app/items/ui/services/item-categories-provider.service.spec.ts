import { TestBed } from '@angular/core/testing';

import { ItemCategoriesProviderService } from './item-categories-provider.service';

describe('ItemCategoriesProviderService', () => {
  let service: ItemCategoriesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemCategoriesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
