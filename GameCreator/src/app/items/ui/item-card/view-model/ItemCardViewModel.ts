import { Guid } from 'guid-typescript';
import { IItemViewModel } from '../../view-model/IItemViewModel';


export class ItemCardViewModel implements IItemViewModel
{
  Id: Guid;
  Name: string;
  Category: string;
  Rarity: string;
  Price: string;
  Weight: string;
  Icon: string;
  CategoryIcon: string;

  constructor(
    id: Guid,
    name: string,
    category: string,
    rarity: string,
    price: string,
    weight: string,
    icon: string,
    categoryIcon: string)
  {
      this.Id = id;
      this.Name = name;
      this.Category = category;
      this.Rarity = rarity;
      this.Price = price;
      this.Weight = weight;
      this.Icon = icon;
      this.CategoryIcon = categoryIcon;
  }
}
