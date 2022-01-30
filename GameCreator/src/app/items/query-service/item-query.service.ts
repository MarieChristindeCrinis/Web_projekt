import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItemModel } from '../model/IItemModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemQueryService {

  public AvailableItems: Observable<IItemModel[]>;

  constructor(httpService: HttpClient)
  {
    this.AvailableItems = httpService.get<IItemModel[]>('items');
  }

}
