import { TestBed } from '@angular/core/testing';

import { ItemFormDataService } from './item-form-data.service';

describe('ItemFormDataService', () => {
  let service: ItemFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
