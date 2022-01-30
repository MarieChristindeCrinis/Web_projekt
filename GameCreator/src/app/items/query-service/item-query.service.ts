import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItemModel } from '../model/IItemModel';
import { HttpClient } from '@angular/common/http';
import { ServerLocationService } from 'src/app/shared/server-location/server-location.service';

@Injectable({
  providedIn: 'root'
})
export class ItemQueryService {

  public AvailableItems: Observable<IItemModel[]>;

  constructor(serverLocationProvider: ServerLocationService, httpService: HttpClient)
  {
    this.AvailableItems = httpService.get<IItemModel[]>(serverLocationProvider.ServerLocation + 'items');
  }

}
