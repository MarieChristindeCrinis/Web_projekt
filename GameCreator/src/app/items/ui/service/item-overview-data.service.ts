import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IItemModel } from '../../model/IItemModel';
import { Rarity } from '../../model/Rarity';
import { ItemQueryService } from '../../query-service/item-query.service';
import { ItemViewModel } from '../view-model/ItemTableViewModel';
import { ItemCategory } from '../../model/ItemCategory';

@Injectable({
  providedIn: 'root'
})
export class ItemOverviewDataService {

  private mQueryService: ItemQueryService;

  constructor(queryService: ItemQueryService)
  {
    this.mQueryService = queryService;
  }

  public QueryData() : Observable<ItemViewModel[]>
  {
    return this.mQueryService
      .AvailableItems
      .pipe(map(x => x.map(x => this._ConvertToTableViewModel(x))));
  }

  private _ConvertToTableViewModel(item: IItemModel) : ItemViewModel
  {
    return new ItemViewModel(
      item.Name,
      this._FormatCategory(item.Category),
      Rarity[item.Rarity],
      item.Price + ' Gold',
      item.Weight + ' lbs',
      item.Icon,
      this._GetCategoryIcon(item.Category));
  }

  private _GetCategoryIcon(category: ItemCategory) : string
  {
    switch(category)
    {
      case ItemCategory.LightArmor: return 'assets/items/class_armor.png';
      case ItemCategory.MediumArmor: return 'assets/items/class_armor.png';
      case ItemCategory.HeavyArmor: return 'assets/items/class_armor.png';
      case ItemCategory.RangedWeapon: return 'assets/items/class_ranged_weapons.png';
      case ItemCategory.MeleeWeapon: return 'assets/items/class_melee_weapons.png';
    }
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
}
