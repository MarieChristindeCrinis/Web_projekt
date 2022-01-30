import { Guid } from 'guid-typescript';
import { ItemCategory } from '../../../model/ItemCategory';
import { ItemRarity } from '../../../model/Rarity';
import { SelectorItemViewModel } from './SelectorItemViewModel';

export class ItemFormViewModel
{
  Id: Guid;
  DbId: number | undefined;
  Name: string;
  Category: SelectorItemViewModel<ItemCategory>;
  Rarity: SelectorItemViewModel<ItemRarity>;
  Price: string;
  Weight: string;
  Icon: string;
  CategoryIcon: string;

  constructor(
    id: Guid,
    dbId: number | undefined,
    name: string,
    category: SelectorItemViewModel<ItemCategory>,
    rarity: SelectorItemViewModel<ItemRarity>,
    price: string,
    weight: string,
    icon: string,
    categoryIcon: string)
  {
      this.Id = id;
      this.DbId = dbId;
      this.Name = name;
      this.Category = category;
      this.Rarity = rarity;
      this.Price = price;
      this.Weight = weight;
      this.Icon = icon;
      this.CategoryIcon = categoryIcon;
  }
}
