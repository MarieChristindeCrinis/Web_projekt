import { Guid } from 'guid-typescript';
import { IItemModel } from './IItemModel';
import { ItemCategory } from './ItemCategory';
import { ItemRarity } from './Rarity';

export class ItemModel implements IItemModel
{
  public Id: Guid;
  public Name: string;
  public Rarity: ItemRarity;
  public Price: number;
  public Weight: number;
  public Icon: string;
  public Category: ItemCategory;

  constructor(
    id: Guid,
    name: string,
    category: ItemCategory,
    rarity: ItemRarity,
    price: number,
    weight: number,
    icon: string
  )
  {
    this.Id = id;
    this.Name = name;
    this.Category = category;
    this.Rarity = rarity;
    this.Price = price;
    this.Weight = weight;
    this.Icon = icon;
  }
}
