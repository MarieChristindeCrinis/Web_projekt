import { Rarity } from './Rarity';
import { ItemCategory } from './ItemCategory';


export interface IItemModel
{
  Name: string;
  Category: ItemCategory;
  Rarity: Rarity;
  Price: number;
  Weight: number;
  Icon: string;
}
