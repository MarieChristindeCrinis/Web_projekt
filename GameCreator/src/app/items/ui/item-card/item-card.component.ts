import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemViewModel } from '../view-model/ItemTableViewModel';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input()
  public Item: ItemViewModel;

  @Output()
  public AddItem: EventEmitter<ItemViewModel>;

  constructor()
  {
    this.AddItem = new EventEmitter<ItemViewModel>();
  }

  public OnAddClicked()
  {
    this.AddItem.next(this.Item);
  }

}
