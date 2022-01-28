import { Rarity } from './Rarity';


export interface IItemModel
{
  Name: string;
  Rarity: Rarity;
  Price: number;
  Weight: number;
  Icon: string;
}
