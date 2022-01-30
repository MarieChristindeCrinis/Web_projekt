import { Injectable } from '@angular/core';
import { map, Observable, firstValueFrom } from 'rxjs';
import { IItemModel } from '../../../model/IItemModel';
import { ItemRarity } from '../../../model/Rarity';
import { ItemQueryService } from '../../../query-service/item-query.service';
import { ItemCategory } from '../../../model/ItemCategory';
import { IItemViewModel } from '../../view-model/IItemViewModel';
import { ItemCardViewModel } from '../../item-card/view-model/ItemCardViewModel';
import { ItemStorageService } from '../../../storage/item-storage.service';
import { ItemRaritiesProviderService } from '../../services/item-rarities-provider.service';
import { ItemCategoriesProviderService } from '../../services/item-categories-provider.service';
import { SelectorItemViewModel } from '../../view-model/SelectorItemViewModel';
import { QueryFilter } from '../../../query-service/filter/QueryFilter';

@Injectable({
  providedIn: 'root'
})
export class ItemOverviewDataService {

  private mItemStorageService: ItemStorageService;
  private mItemQueryService: ItemQueryService;
  private mItemCategoriesProvider: ItemCategoriesProviderService;
  private mItemRaritiesProvider: ItemRaritiesProviderService;

  constructor(
    itemStorageService: ItemStorageService,
    itemQueryService: ItemQueryService,
    itemRaritiesProvider: ItemRaritiesProviderService,
    itemCategoriesProvider: ItemCategoriesProviderService)
  {
    this.mItemQueryService = itemQueryService;
    this.mItemStorageService = itemStorageService;
    this.mItemCategoriesProvider = itemCategoriesProvider;
    this.mItemRaritiesProvider = itemRaritiesProvider;
  }

  public QueryAllItems() : Observable<IItemViewModel[]>
  {
    return this.mItemQueryService
      .AvailableItems
      .pipe(map(x => x.map(x => this._ConvertToCardViewModel(x))));
  }

  public QueryItems(filters: QueryFilter[]) : Observable<IItemViewModel[]>
  {
    return this.mItemQueryService
      .QueryItems(filters)
      .pipe(map(x => x.map(x => this._ConvertToCardViewModel(x))));;
  }

  public async DeleteItem(item : IItemViewModel) : Promise<boolean>
  {
    const itemModel = await firstValueFrom(this.mItemQueryService.QueryItem(item.Id));

    return await this.mItemStorageService.DeleteItem(itemModel)
  }

  public GetItemCategories() : SelectorItemViewModel<ItemCategory>[]
  {
    return this.mItemCategoriesProvider.GetItemCategories();
  }

  public GetItemRarities() : SelectorItemViewModel<ItemRarity>[]
  {
    return this.mItemRaritiesProvider.GetItemRarities();
  }

  public CreateFilter(
    searchText: string,
    selectedCategories: SelectorItemViewModel<ItemCategory>[],
    selectedRarities: SelectorItemViewModel<ItemRarity>[]): QueryFilter[]
  {
    const filters = [];

    if(searchText !== '' && searchText !== undefined)
    {
      filters.push(new QueryFilter('Name_like', [searchText]));
    }

    if(selectedCategories.length > 0)
    {
      filters.push(
        new QueryFilter(
          'Category',
          selectedCategories.map(x => x.Value+'')));
    }

    if(selectedRarities.length > 0)
    {
      filters.push(
        new QueryFilter(
          'Rarity',
          selectedRarities.map(x => x.Value+'')));
    }

    return filters;
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
