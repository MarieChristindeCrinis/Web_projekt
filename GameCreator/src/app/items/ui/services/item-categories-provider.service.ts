import { Injectable } from '@angular/core';
import { ItemCategory } from '../../model/ItemCategory';
import { SelectorItemViewModel } from '../view-model/SelectorItemViewModel';

@Injectable({
  providedIn: 'root'
})
export class ItemCategoriesProviderService {

  constructor() { }

  public GetItemCategories() : SelectorItemViewModel<ItemCategory>[]
  {
    return this._GetItemCategories()
      .map(category => new SelectorItemViewModel<ItemCategory>(category, this._FormatCategory(category)));
  }

  private _FormatCategory(category: ItemCategory) : string
  {
    switch(category)
    {
      case ItemCategory.LightArmor: return 'Light Armor';
      case ItemCategory.MediumArmor: return 'Medium Armor';
      case ItemCategory.HeavyArmor: return 'Heavy Armor';
      case ItemCategory.RangedWeapon: return 'Ranged Weapon';
      case ItemCategory.MeleeWeapon: return 'Melee Weapon';
    }
  }

  private _GetItemCategories() : ItemCategory[]
  {
    return [
      ItemCategory.MeleeWeapon,
      ItemCategory.RangedWeapon,
      ItemCategory.LightArmor,
      ItemCategory.MediumArmor,
      ItemCategory.HeavyArmor
    ];
  }

}
