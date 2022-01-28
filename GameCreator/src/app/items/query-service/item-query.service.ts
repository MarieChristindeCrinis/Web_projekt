import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IItemModel } from '../model/IItemModel';
import { ItemModel } from '../model/ItemModel';
import { Rarity } from '../model/Rarity';

@Injectable({
  providedIn: 'root'
})
export class ItemQueryService {

  private mDummyData: IItemModel[];

  public AvailableItems: Observable<IItemModel[]>;

  constructor()
  {
    this.mDummyData = [
      new ItemModel("Leder Schuhe", Rarity.Common, 5, 1.1, ''),
      new ItemModel("Feuer Schwert", Rarity.Common, 5, 1.1, ''),
      new ItemModel("Leder Schuhe", Rarity.Common, 5, 1.1, ''),
      new ItemModel("Leder Schuhe", Rarity.Common, 5, 1.1, ''),
      new ItemModel("Leder Schuhe", Rarity.Common, 5, 1.1, ''),
    ];

    this.AvailableItems = of(this.mDummyData);
  }

}
