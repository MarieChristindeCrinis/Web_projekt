import { Injectable } from '@angular/core';
import { ItemCategory } from '../../../model/ItemCategory';
import { ItemRarity } from '../../../model/Rarity';
import { SelectorItemViewModel } from '../view-model/SelectorItemViewModel';
import { ItemModel } from '../../../model/ItemModel';
import { Guid } from 'guid-typescript';
import { ItemStorageService } from '../../../storage/item-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ItemFormDataService
{
  private mItemStorageService: ItemStorageService;

  constructor(itemStorageService: ItemStorageService)
  {
    this.mItemStorageService = itemStorageService;
  }

  public async StoreItem(
    id: Guid | undefined,
    name: string,
    category: SelectorItemViewModel<ItemCategory>,
    rarity: SelectorItemViewModel<ItemRarity>,
    price: string,
    weight: string
  ) : Promise<boolean>
  {
    const item = new ItemModel(
      id ?? Guid.create(),
      name,
      category.Value,
      rarity.Value,
      parseFloat(price),
      parseFloat(weight),
      '');

    return await this.mItemStorageService.StoreItemModel(item);
  }

  public GetItemCategories() : SelectorItemViewModel<ItemCategory>[]
  {
    return this._GetItemCategories()
      .map(category => new SelectorItemViewModel<ItemCategory>(category, this._FormatCategory(category)));
  }

  public GetItemRarities() : SelectorItemViewModel<ItemRarity>[]
  {
    return this._GetItemRarities()
      .map(rarity => new SelectorItemViewModel<ItemRarity>(rarity, ItemRarity[rarity]));
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
