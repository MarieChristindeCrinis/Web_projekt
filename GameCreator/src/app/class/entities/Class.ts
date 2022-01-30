export interface Class {
    id?: number;
    name: string;
    description: string;
    preferred_weapon: string;
  }


  export enum WeaponClass
{
    Sword,
    Axe,
    Bow,
    Shield,
    Dagger,
    Lance,
    Mace,
    Gun
}