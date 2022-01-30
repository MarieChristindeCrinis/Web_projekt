import { IItemViewModel } from '../../view-model/IItemViewModel';


export class ItemCardViewModel implements IItemViewModel
{
  Name: string;
  Category: string;
  Rarity: string;
  Price: string;
  Weight: string;
  Icon: string;
  CategoryIcon: string;

  constructor(
    name: string,
    category: string,
    rarity: string,
    price: string,
    weight: string,
    icon: string,
    categoryIcon: string)
  {
      this.Name = name;
      this.Category = category;
      this.Rarity = rarity;
      this.Price = price;
      this.Weight = weight;
      this.Icon = icon;
      this.CategoryIcon = categoryIcon;
  }
}
