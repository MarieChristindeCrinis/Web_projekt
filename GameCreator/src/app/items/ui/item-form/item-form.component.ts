import { Component, OnDestroy } from '@angular/core';
import { ItemCardViewModel } from '../item-card/view-model/ItemCardViewModel';
import { ItemFormDataService } from './services/item-form-data.service';
import { SelectorItemViewModel } from './view-model/SelectorItemViewModel';
import { ItemCategory } from '../../model/ItemCategory';
import { ItemRarity } from '../../model/Rarity';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NumericValidations } from '../../shared/validation/NumericValidator';
import { PriceValidator } from '../../shared/validation/PriceValidator';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnDestroy{

  public Item : ItemCardViewModel | undefined;

  public AvailableCategories: SelectorItemViewModel<ItemCategory>[];
  public AvailableRarities: SelectorItemViewModel<ItemRarity>[];

  public NameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  public CategoryControl = new FormControl('', [Validators.required]);
  public RarityControl = new FormControl('', [Validators.required]);
  public PriceControl = new FormControl('', [Validators.required, NumericValidations.IsNumeric, NumericValidations.IsPositive, PriceValidator(() => this._GetRarity())]);
  public WeightControl = new FormControl('', [Validators.required, NumericValidations.IsNumeric, NumericValidations.IsPositive]);

  public Form: FormGroup;

  private mSubscriptions: Subscription[];
  private mDataService : ItemFormDataService;
  private mRouter: Router;

  constructor(
    dataService: ItemFormDataService,
    formBuilder: FormBuilder,
    router: Router)
  {
      this.mRouter = router;
      this.mDataService = dataService;
      this.AvailableCategories = dataService.GetItemCategories();
      this.AvailableRarities = dataService.GetItemRarities();
      this.mSubscriptions = [];

      this.Form = formBuilder.group([
      this.NameControl,
      this.CategoryControl,
      this.RarityControl,
      this.PriceControl,
      this.WeightControl]);

      this.mSubscriptions.push(
        this.RarityControl.valueChanges
          .subscribe(_ => this.PriceControl.updateValueAndValidity()));
  }

  ngOnDestroy(): void
  {
    this.mSubscriptions.forEach(subscription => subscription.unsubscribe());
  }


  public GetError(control: FormControl) : string
  {
    if(control.hasError(Validators.required.name))
    {
      return 'This field is required';
    }

    if(control.hasError(Validators.minLength.name.toLocaleLowerCase()))
    {
      return 'This minimum length for this field is 3';
    }

    if(control.hasError(NumericValidations.IsNumeric.name))
    {
      return 'Only numeric input allowed';
    }

    if(control.hasError(NumericValidations.IsPositive.name))
    {
      return 'Value must be positive';
    }

    if(control.hasError(PriceValidator.name))
    {
      const error = control.getError(PriceValidator.name);
      const rarity = error.rarity;
      const min = error.min;

      return`An item with rarity of '${rarity}' must have a price of minimum ${min}`;
    }

    return '';
  }

  private _GetRarity() : SelectorItemViewModel<ItemRarity>
  {
    const value = this.RarityControl.value;
    return value;
  }

  public async OnSaveClicked() : Promise<void>
  {
    Object.keys(this.Form.controls)
      .forEach(field =>
        {
          const control = this.Form.get(field);
          control?.markAsTouched({ onlySelf: true });
        });

    this.Form.updateValueAndValidity();

    if(this.Form.valid)
    {
      const name = this.NameControl.value;
      const category = this.CategoryControl.value;
      const rarity = this.RarityControl.value;
      const price = this.PriceControl.value;
      const weight = this.WeightControl.value;

      const result = await this.mDataService.StoreItem(
        this.Item?.Id,
        name,
        category,
        rarity,
        price,
        weight);

        if(result)
        {
          this.mRouter.navigate(['/items'])
        }
        else
        {
          alert('Storing failed');
        }
    }
  }
}
