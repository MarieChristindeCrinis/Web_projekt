import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemViewModel as ItemViewModel } from '../view-model/ItemTableViewModel';
import { Subscription } from 'rxjs';
import { ItemOverviewDataService } from '../service/item-overview-data.service';

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.scss']
})
export class ItemOverviewComponent implements OnInit, OnDestroy {

  public ColumnHeaders: string[] = ['index', 'name', 'category', 'rarity', 'price', 'weight'];
  public SelectedItems: ItemViewModel[];
  public AvailableItems: ItemViewModel[];

  private mItemDataService: ItemOverviewDataService;
  private mSubjscriptions: Subscription[];

  public SelectedItem: ItemViewModel;

  constructor(itemDataService: ItemOverviewDataService)
  {
    this.mItemDataService = itemDataService;
    this.mSubjscriptions = [];
  }

  ngOnInit(): void
  {
    this.mSubjscriptions.push(
      this.mItemDataService.QueryData()
        .subscribe(items =>
          {
            this.SelectedItems = items;
            this.AvailableItems = items;
          }));
  }

  ngOnDestroy(): void
  {
    this.mSubjscriptions.forEach(x => x.unsubscribe());
  }

  public SetSelection(selectedItem: ItemViewModel)
  {
    this.SelectedItem = selectedItem;
  }
}
