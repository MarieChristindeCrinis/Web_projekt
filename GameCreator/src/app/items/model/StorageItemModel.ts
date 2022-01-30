import { IStorageItemModel } from './IStorageItemModel';


export class StorageItemModel implements IStorageItemModel
{
  id: number | undefined;
  Identifier: string;
  Name: string;
  Category: number;
  Rarity: number;
  Price: number;
  Weight: number;
  Icon: string;

  constructor(
    id: number | undefined,
    identifier: string,
    name: string,
    category: number,
    rarity: number,
    price: number,
    weight: number,
    icon: string
  )
  {
    this.id = id;
    this.Identifier = identifier;
    this.Name = name;
    this.Category = category;
    this.Rarity = rarity;
    this.Price = price;
    this.Weight = weight;
    this.Icon = icon;
  }
}
