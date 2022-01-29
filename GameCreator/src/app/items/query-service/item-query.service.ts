import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IItemModel } from '../model/IItemModel';
import { ItemModel } from '../model/ItemModel';
import { Rarity } from '../model/Rarity';
import { ItemCategory } from '../model/ItemCategory';

@Injectable({
  providedIn: 'root'
})
export class ItemQueryService {

  private mDummyData: IItemModel[];

  public AvailableItems: Observable<IItemModel[]>;

  constructor()
  {
    this.mDummyData = [
      new ItemModel("Greatsword", ItemCategory.MeleeWeapon, Rarity.Uncommon, 50, 6, 'assets/items/greatsword.png'),
      new ItemModel("Longsword", ItemCategory.MeleeWeapon, Rarity.Common, 15, 3, 'assets/items/longsword.png'),
      new ItemModel("Shortsword", ItemCategory.MeleeWeapon, Rarity.Common, 10, 2, 'assets/items/shortsword.png'),
      new ItemModel("Leather Tunic", ItemCategory.LightArmor, Rarity.Common, 50, 20, 'assets/items/leather.png'),
      new ItemModel("Padded Leather Tunic", ItemCategory.LightArmor, Rarity.Uncommon, 350, 30, 'assets/items/padded.png'),
      new ItemModel("Icon Chestplate", ItemCategory.HeavyArmor, Rarity.Common, 100, 80, 'assets/items/iron.png'),
      new ItemModel("Magical Chestplate of Nature", ItemCategory.MediumArmor, Rarity.Epic, 2500, 40, 'assets/items/regen_armor.png'),
    ];

    this.AvailableItems = of(this.mDummyData);
  }

}
