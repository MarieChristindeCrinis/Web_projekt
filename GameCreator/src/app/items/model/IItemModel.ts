import { ItemRarity } from './Rarity';
import { ItemCategory } from './ItemCategory';
import { Guid } from 'guid-typescript';


export interface IItemModel
{
  DbId: number | undefined;
  Id: Guid;
  Name: string;
  Category: ItemCategory;
  Rarity: ItemRarity;
  Price: number;
  Weight: number;
  Icon: string;
}
