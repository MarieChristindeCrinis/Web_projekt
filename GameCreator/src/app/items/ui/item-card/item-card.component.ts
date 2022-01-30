import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IItemViewModel } from '../view-model/IItemViewModel';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input()
  public Item: IItemViewModel;

  @Output()
  public AddItem: EventEmitter<IItemViewModel>;

  constructor()
  {
    this.AddItem = new EventEmitter<IItemViewModel>();
  }

  public OnAddClicked()
  {
    this.AddItem.emit(this.Item);
  }

}
