import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IItemModel } from '../model/IItemModel';
import { HttpClient } from '@angular/common/http';
import { ServerLocationService } from 'src/app/shared/server-location/server-location.service';
import { IStorageItemModel } from '../model/IStorageItemModel';
import { ItemModel } from '../model/ItemModel';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class ItemQueryService {

  public AvailableItems: Observable<IItemModel[]>;

  private mServerLocationProvider: ServerLocationService;
  private mHttpClient: HttpClient;

  constructor(serverLocationProvider: ServerLocationService, httpService: HttpClient)
  {
    this.mServerLocationProvider = serverLocationProvider;
    this.mHttpClient = httpService;

    this.AvailableItems = httpService.get<IStorageItemModel[]>(serverLocationProvider.ServerLocation + 'items')
      .pipe(map(items => items.map(x => this._ConvertToRuntimeModel(x))));
  }

  public QueryItem(id: Guid) : Observable<IItemModel>
  {
    return this.mHttpClient.get<IStorageItemModel[]>(this.mServerLocationProvider.ServerLocation + 'items?Identifier=' + id.toString())
      .pipe(map(item => this._ConvertToRuntimeModel(item[0])));
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
