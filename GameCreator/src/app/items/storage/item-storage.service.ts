import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerLocationService } from 'src/app/shared/server-location/server-location.service';
import { IItemModel } from '../model/IItemModel';

@Injectable({
  providedIn: 'root'
})
export class ItemStorageService {

  private mHttpService: HttpClient;
  private mServerLocationProvider: ServerLocationService;

  constructor(serverLocationProvider: ServerLocationService, httpService: HttpClient)
  {
    this.mHttpService = httpService;
  }

  public StoreItemModel(item: IItemModel)
  {
    const itemJson = JSON.stringify(item);

    // this.mHttpService.put()
  }
}
