import { Injectable } from '@angular/core';
import { ItemCategory } from '../../../model/ItemCategory';
import { ItemRarity } from '../../../model/Rarity';
import { SelectorItemViewModel } from '../view-model/SelectorItemViewModel';
import { ItemModel } from '../../../model/ItemModel';
import { Guid } from 'guid-typescript';
import { ItemStorageService } from '../../../storage/item-storage.service';
import { ItemQueryService } from '../../../query-service/item-query.service';
import { ItemFormViewModel } from '../view-model/ItemFormViewModel';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemFormDataService
{
  private mItemStorageService: ItemStorageService;
  private mItemQueryService: ItemQueryService;

  constructor(
    itemStorageService: ItemStorageService,
    itemQueryService: ItemQueryService)
  {
    this.mItemQueryService = itemQueryService;
    this.mItemStorageService = itemStorageService;
  }

  public async StoreItem(
    id: Guid | undefined,
    dbId: number | undefined,
    name: string,
    category: SelectorItemViewModel<ItemCategory> | ItemCategory,
    rarity: SelectorItemViewModel<ItemRarity> | ItemRarity,
    price: string,
    weight: string,
    icon: string
  ) : Promise<boolean>
  {
    const categoryVm = category as SelectorItemViewModel<ItemCategory>;
    const rarityVm = rarity as SelectorItemViewModel<ItemRarity>;

    const categoryValue = categoryVm.Value ?? category;
    const rarityValue = rarityVm.Value ?? rarity;

    const item = new ItemModel(
      id ?? Guid.create(),
      name,
      categoryValue,
      rarityValue,
      parseFloat(price),
      parseFloat(weight),
      icon,
      dbId);

    return await this.mItemStorageService.StoreItemModel(item);
  }

  public async GetItem(id: Guid) : Promise<ItemFormViewModel>
  {
    const itemModelRequest = this.mItemQueryService.QueryItem(id);

    const itemModel = await firstValueFrom(itemModelRequest);

    return new ItemFormViewModel(
      itemModel.Id,
      itemModel.DbId,
      itemModel.Name,
      new SelectorItemViewModel<ItemCategory>(itemModel.Category, this._FormatCategory(itemModel.Category)),
      new SelectorItemViewModel<ItemRarity>(itemModel.Rarity, ItemRarity[itemModel.Rarity]),
      itemModel.Price + '',
      itemModel.Weight + '',
      itemModel.Icon,
      '');
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
