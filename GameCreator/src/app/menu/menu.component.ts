import { StepperSelectionEvent } from '@angular/cdk/stepper';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {

  @ViewChild("stepper")
  private mStepper: MatStepper;

  private mRouter: Router;
  private mSubscriptions: Subscription[];

  private mNavigations: string[];

  constructor(router: Router)
  {
    this.mRouter = router;
    this.mSubscriptions = [];

    this.mNavigations = [
      "",
      "character", // Todo: add Character Path
      "", // Todo: add Class Path
      "items",
      "location"
    ]
  }

  ngAfterViewInit(): void
  {
    this.mSubscriptions.push(
      this.mStepper.selectionChange
        .subscribe(evt => this._NavigateToStep(evt.selectedIndex)));

      // this._NavigateToStep(0);
  }

  private _NavigateToStep(index : number)
  {
    this.mRouter.navigate([this.mNavigations[index]]);
  }

}
