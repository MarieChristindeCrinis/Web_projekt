import { IItemModel } from './IItemModel';
import { Rarity } from './Rarity';


export class ItemModel implements IItemModel
{
  Name: string;
  Rarity: Rarity;
  Price: number;
  Weight: number;
  Icon: string;

  constructor(
      name: string,
      rarity: Rarity,
      price: number,
      weight: number,
      icon: string)
    {
      	this.Name = name;
      	this.Rarity = rarity;
      	this.Price = price;
      	this.Weight = weight;
        this.Icon = icon;
    }

}
