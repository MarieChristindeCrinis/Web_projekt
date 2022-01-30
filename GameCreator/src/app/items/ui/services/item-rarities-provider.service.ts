import { Injectable } from '@angular/core';
import { ItemRarity } from '../../model/Rarity';
import { SelectorItemViewModel } from '../view-model/SelectorItemViewModel';

@Injectable({
  providedIn: 'root'
})
export class ItemRaritiesProviderService {

  constructor() { }

  public GetItemRarities() : SelectorItemViewModel<ItemRarity>[]
  {
    return this._GetItemRarities()
      .map(rarity => new SelectorItemViewModel<ItemRarity>(rarity, ItemRarity[rarity]));
  }

  private _GetItemRarities() : ItemRarity[]
  {
    return [
      ItemRarity.Common,
      ItemRarity.Uncommon,
      ItemRarity.Rare,
      ItemRarity.Epic,
      ItemRarity.Legendary
    ];
  }
}
