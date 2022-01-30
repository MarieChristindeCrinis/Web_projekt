import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemTableViewModel as ItemTableViewModel } from './view-model/ItemTableViewModel';
import { Subscription } from 'rxjs';
import { ItemOverviewDataService } from './service/item-overview-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { IItemViewModel } from '../view-model/IItemViewModel';
import { ItemCardViewModel } from '../item-card/view-model/ItemCardViewModel';

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.scss']
})
export class ItemOverviewComponent implements OnInit, OnDestroy {

  public ColumnHeaders: string[] = ['index', 'name', 'category', 'rarity', 'price', 'weight'];
  public ChoosenItems: MatTableDataSource<ItemTableViewModel>;
  public AvailableItems: ItemCardViewModel[];
  public RemoveButtonVisibility: boolean;

  private mItemDataService: ItemOverviewDataService;
  private mSubjscriptions: Subscription[];

  public SelectedItem: ItemTableViewModel | null;

  constructor(itemDataService: ItemOverviewDataService)
  {
    this.mItemDataService = itemDataService;
    this.mSubjscriptions = [];
    this.ChoosenItems = new MatTableDataSource<ItemTableViewModel>();
    this.RemoveButtonVisibility = false;
  }

  ngOnInit(): void
  {
    this.mSubjscriptions.push(
      this.mItemDataService.QueryData()
        .subscribe(items =>
          {
            this.AvailableItems = items;
          }));
  }

  ngOnDestroy(): void
  {
    this.mSubjscriptions.forEach(x => x.unsubscribe());
  }

  public SetSelection(selectedItem: ItemTableViewModel | null)
  {
    this.SelectedItem = selectedItem;
    this.RemoveButtonVisibility = selectedItem !== null;
  }

  public RemoveItemAction()
  {
    if(this.SelectedItem != null)
    {
      const index = this.ChoosenItems.data.indexOf(this.SelectedItem);
      this.ChoosenItems.data.splice(index, 1);
      this.ChoosenItems._updateChangeSubscription();

      if(this.ChoosenItems.data.length == 0)
      {
        this.SetSelection(null);
      }

      if(index < this.ChoosenItems.data.length)
      {
        this.SetSelection(this.ChoosenItems.data[index]);
      }
      else
      {
        if(index - 1 >= 0)
          this.SetSelection(this.ChoosenItems.data[index - 1]);
      }
    }
  }

  public AddItemAction(item: IItemViewModel)
  {
    const tableViewModel = new ItemTableViewModel(
      item.Id,
      item.Name,
      item.Category,
      item.Rarity,
      item.Price,
      item.Weight,
      item.Icon,
      item.CategoryIcon
    );

    this.ChoosenItems.data.push(tableViewModel);
    this.ChoosenItems._updateChangeSubscription();

    if(this.SelectedItem == null)
    {
      this.SetSelection(tableViewModel);
    }
  }
}
