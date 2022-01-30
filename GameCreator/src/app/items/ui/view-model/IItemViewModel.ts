import { Guid } from 'guid-typescript';


export interface IItemViewModel
{
  Id: Guid,
  Name: string;
  Category: string;
  Rarity: string;
  Price: string;
  Weight: string;
  Icon: string;
  CategoryIcon: string;
}
