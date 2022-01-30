import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IItemModel } from '../model/IItemModel';
import { HttpClient } from '@angular/common/http';
import { ServerLocationService } from 'src/app/shared/server-location/server-location.service';
import { IStorageItemModel } from '../model/IStorageItemModel';
import { ItemModel } from '../model/ItemModel';
import { Guid } from 'guid-typescript';
import { StorageItemModdel } from '../model/StorageItemModel';

@Injectable({
  providedIn: 'root'
})
export class ItemQueryService {

  public AvailableItems: Observable<IItemModel[]>;

  constructor(serverLocationProvider: ServerLocationService, httpService: HttpClient)
  {
    this.AvailableItems = httpService.get<IStorageItemModel[]>(serverLocationProvider.ServerLocation + 'items')
      .pipe(map(items => items.map(x => this._ConvertToRuntimeModel(x))));
  }

  private _ConvertToRuntimeModel(storageModel: IStorageItemModel)
  {
    return new ItemModel(
      Guid.parse(storageModel.Identifier),
      storageModel.Name,
      storageModel.Category,
      storageModel.Rarity,
      storageModel.Price,
      storageModel.Weight,
      storageModel.Icon,
      storageModel.id,
      );
  }
}
