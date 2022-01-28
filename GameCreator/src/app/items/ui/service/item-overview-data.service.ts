import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IItemModel } from '../../model/IItemModel';
import { Rarity } from '../../model/Rarity';
import { ItemQueryService } from '../../query-service/item-query.service';
import { ItemTableViewModel } from '../view-model/ItemTableViewModel';

@Injectable({
  providedIn: 'root'
})
export class ItemOverviewDataService {

  private mQueryService: ItemQueryService;

  constructor(queryService: ItemQueryService)
  {
    this.mQueryService = queryService;
  }

  public QueryData() : Observable<ItemTableViewModel[]>
  {
    return this.mQueryService
      .AvailableItems
      .pipe(map(x => x.map(this._ConvertToTableViewModel)));
  }

  private _ConvertToTableViewModel(item: IItemModel) : ItemTableViewModel
  {
    return new ItemTableViewModel(
      item.Name,
      Rarity[item.Rarity],
      item.Price + ' Gold',
      item.Weight + ' lbs',
      item.Icon);
  }
}
