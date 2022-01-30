import { TestBed } from '@angular/core/testing';

import { ItemOverviewDataService } from './item-overview-data.service';

describe('ItemOverviewDataService', () => {
  let service: ItemOverviewDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemOverviewDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
