import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  public DeleteItem: EventEmitter<IItemViewModel>;

  private mRouter: Router;

  constructor(router: Router)
  {
    this.mRouter = router;
    this.DeleteItem = new EventEmitter<IItemViewModel>();
  }

  public OnDeleteClicked()
  {
    this.DeleteItem.emit(this.Item);
  }

  public OnEditClicked()
  {
    this.mRouter.navigate(['/item-create',{id: this.Item.Id.toString()}]);
  }

}
