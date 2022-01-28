

export class ItemTableViewModel
{
  Name: string;
  Rarity: string;
  Price: string;
  Weight: string;
  Icon: string;

  constructor(
    name: string,
    rarity: string,
    price: string,
    weight: string,
    icon: string)
  {
      this.Name = name;
      this.Rarity = rarity;
      this.Price = price;
      this.Weight = weight;
      this.Icon = icon;
  }
}
