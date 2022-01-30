import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, debounceTime, map, mergeMap, Subject, Subscription } from 'rxjs';
import { ItemOverviewDataService } from './service/item-overview-data.service';
import { IItemViewModel } from '../view-model/IItemViewModel';
import { ItemCardViewModel } from '../item-card/view-model/ItemCardViewModel';
import { SelectorItemViewModel } from '../view-model/SelectorItemViewModel';
import { ItemRarity } from '../../model/Rarity';
import { ItemCategory } from '../../model/ItemCategory';

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.scss']
})
export class ItemOverviewComponent implements OnInit, OnDestroy {

  public AvailableItems: ItemCardViewModel[];
  public AvailableCategories: SelectorItemViewModel<ItemCategory>[];
  public AvailableRarities: SelectorItemViewModel<ItemRarity>[];

  private mItemDataService: ItemOverviewDataService;
  private mSubscriptions: Subscription[];

  public SearchText: string;
  public SelectedCategories: SelectorItemViewModel<ItemCategory>[];
  public SelectedRarities:  SelectorItemViewModel<ItemRarity>[];

  public FilterChanged: Subject<any>;

  constructor(itemDataService: ItemOverviewDataService)
  {
    this.mItemDataService = itemDataService;
    this.mSubscriptions = [];
    this.SelectedCategories = [];
    this.SelectedRarities = [];
    this.FilterChanged = new Subject<any>();
  }

  ngOnInit(): void
  {
    this.AvailableRarities = this.mItemDataService.GetItemRarities();
    this.AvailableCategories = this.mItemDataService.GetItemCategories();

    const initialQuery = this.mItemDataService.QueryAllItems();
    const filterChanged = this.FilterChanged
      .pipe(debounceTime(500))
      .pipe(map(_ => this.mItemDataService.CreateFilter(
        this.SearchText,
        this.SelectedCategories,
        this.SelectedRarities)))
      .pipe(mergeMap(filters => this.mItemDataService.QueryItems(filters)));

    this.mSubscriptions.push(
      concat(initialQuery, filterChanged)
        .subscribe(data => this.AvailableItems = data));
  }

  ngOnDestroy(): void
  {
    this.mSubscriptions.forEach(x => x.unsubscribe());
  }

  public TriggerFilterChanged(change : any)
  {
    this.FilterChanged.next(change);
  }

  public DeleteItemAction(item: IItemViewModel)
  {
    const index = this.AvailableItems.indexOf(item);
    this.AvailableItems.splice(index, 1);
    this.mItemDataService.DeleteItem(item);
  }

  public ClearSearch()
  {
    this.SearchText = '';
    this.TriggerFilterChanged(this.SearchText);
  }
}
