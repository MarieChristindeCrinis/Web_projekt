import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ItemRarity } from '../../model/Rarity';
import { SelectorItemViewModel } from '../../ui/view-model/SelectorItemViewModel';


export const PriceValidator =  (rarityProvider : () => SelectorItemViewModel<ItemRarity>) : ValidatorFn =>
{
  return (control: AbstractControl): ValidationErrors | null =>
  {
    const rarityVm = rarityProvider();

    const result = parseFloat(control.value);
    if(control.value && !Number.isNaN(result) && rarityVm !== null)
    {
      switch(rarityVm.Value)
      {
        case ItemRarity.Common:
          return _CheckMin(result, 1, rarityVm.FormattedValue);
        case ItemRarity.Uncommon:
          return _CheckMin(result, 50, rarityVm.FormattedValue);
        case ItemRarity.Rare:
          return _CheckMin(result, 150, rarityVm.FormattedValue);
        case ItemRarity.Epic:
          return _CheckMin(result, 500, rarityVm.FormattedValue);
        case ItemRarity.Legendary:
          return _CheckMin(result, 1000, rarityVm.FormattedValue);
      }
    }

    return null;
  }
}

function _CheckMin(value: number, min: number, formattedRarity: string) : ValidationErrors | null
{
  if(value < min)
  {
    return {
      PriceValidator : {
        expected: `for ${formattedRarity} a value >= ${min}`,
        min: min,
        rarity: formattedRarity,
        actualValue: value
      }
    };
  }
  return null;
}
