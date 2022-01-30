import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerLocationService } from 'src/app/shared/server-location/server-location.service';
import { IItemModel } from '../model/IItemModel';
import { IStorageItemModel } from '../model/IStorageItemModel';
import { StorageItemModdel } from '../model/StorageItemModel';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemStorageService {

  private mHttpService: HttpClient;
  private mServerLocationProvider: ServerLocationService;

  constructor(serverLocationProvider: ServerLocationService, httpService: HttpClient)
  {
    this.mHttpService = httpService;
    this.mServerLocationProvider = serverLocationProvider;
  }

  public async StoreItemModel(item: IItemModel) : Promise<boolean>
  {
    const storageItem = this._ConvertToStorageModel(item);
    const itemJson = JSON.stringify(storageItem);

    let request: Observable<IStorageItemModel>;

    if(storageItem.id !== undefined)
    {
      request = this.mHttpService.patch<IStorageItemModel>(
        this.mServerLocationProvider.ServerLocation+'items/'+storageItem.id,
        itemJson,
        {
          headers: new HttpHeaders('Content-Type: application/json')
        });
    }
    else
    {
      request = this.mHttpService.post<IStorageItemModel>(
        this.mServerLocationProvider.ServerLocation+'items',
        itemJson,
        {
          headers: new HttpHeaders('Content-Type: application/json')
        });
    }

    try
    {
      const result = await firstValueFrom(request);
      return true;
    }
    catch(error)
    {
      console.log(`Error during save of Item ${item.Name}:\n ${error}`);
      return false;
    }
  }

  public async DeleteItem(item: IItemModel) : Promise<boolean>
  {
    const request = this.mHttpService.delete(
      this.mServerLocationProvider.ServerLocation+'items/'+item.DbId,
    );

    try
    {
      const result = await firstValueFrom(request);
      return true;
    }
    catch(error)
    {
      console.log(`Error during save of Item ${item.Name}:\n ${error}`);
      return false;
    }
  }

  private _ConvertToStorageModel(item: IItemModel) : IStorageItemModel
  {
    return new StorageItemModdel(
      item.DbId,
      item.Id.toString(),
      item.Name,
      item.Category,
      item.Rarity,
      item.Price,
      item.Weight,
      item.Icon,
    );
  }
}
