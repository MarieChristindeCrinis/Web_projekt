import { IItemModel } from './IItemModel';
import { ItemCategory } from './ItemCategory';
import { Rarity } from './Rarity';


export class ItemModel implements IItemModel
{
  public Name: string;
  public Rarity: Rarity;
  public Price: number;
  public Weight: number;
  public Icon: string;
  public Category: ItemCategory;

  constructor(
      name: string,
      category: ItemCategory,
      rarity: Rarity,
      price: number,
      weight: number,
      icon: string)
    {
      	this.Name = name;
        this.Category = category;
      	this.Rarity = rarity;
      	this.Price = price;
      	this.Weight = weight;
        this.Icon = icon;
    }

}
