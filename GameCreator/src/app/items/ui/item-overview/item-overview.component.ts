import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemOverviewDataService } from './service/item-overview-data.service';
import { IItemViewModel } from '../view-model/IItemViewModel';
import { ItemCardViewModel } from '../item-card/view-model/ItemCardViewModel';

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.scss']
})
export class ItemOverviewComponent implements OnInit, OnDestroy {

  public AvailableItems: ItemCardViewModel[];

  private mItemDataService: ItemOverviewDataService;
  private mSubscriptions: Subscription[];

  constructor(itemDataService: ItemOverviewDataService)
  {
    this.mItemDataService = itemDataService;
    this.mSubscriptions = [];
  }

  ngOnInit(): void
  {
    this.mSubscriptions.push(
      this.mItemDataService.QueryData()
        .subscribe(items =>
          {
            this.AvailableItems = items;
          }));
  }

  ngOnDestroy(): void
  {
    this.mSubscriptions.forEach(x => x.unsubscribe());
  }

  public DeleteItemAction(item: IItemViewModel)
  {
    const index = this.AvailableItems.indexOf(item);
    this.AvailableItems.splice(index, 1);
    this.mItemDataService.DeleteItem(item);
  }
}
