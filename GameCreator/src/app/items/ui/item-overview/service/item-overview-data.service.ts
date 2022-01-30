import { Injectable } from '@angular/core';
import { map, Observable, firstValueFrom } from 'rxjs';
import { IItemModel } from '../../../model/IItemModel';
import { ItemRarity } from '../../../model/Rarity';
import { ItemQueryService } from '../../../query-service/item-query.service';
import { ItemCategory } from '../../../model/ItemCategory';
import { IItemViewModel } from '../../view-model/IItemViewModel';
import { ItemCardViewModel } from '../../item-card/view-model/ItemCardViewModel';
import { ItemStorageService } from '../../../storage/item-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ItemOverviewDataService {

  private mQueryService: ItemQueryService;
  private mStorageService: ItemStorageService;

  constructor(
    queryService: ItemQueryService,
    storageService: ItemStorageService)
  {
    this.mQueryService = queryService;
    this.mStorageService = storageService;
  }

  public QueryData() : Observable<IItemViewModel[]>
  {
    return this.mQueryService
      .AvailableItems
      .pipe(map(x => x.map(x => this._ConvertToCardViewModel(x))));
  }

  public async DeleteItem(item : IItemViewModel) : Promise<boolean>
  {
    const itemModel = await firstValueFrom(this.mQueryService.QueryItem(item.Id));

    return await this.mStorageService.DeleteItem(itemModel)
  }

  private _ConvertToCardViewModel(item: IItemModel) : ItemCardViewModel
  {
    return new ItemCardViewModel(
      item.Id,
      item.Name,
      this._FormatCategory(item.Category),
      ItemRarity[item.Rarity],
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
