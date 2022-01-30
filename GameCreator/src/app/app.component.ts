import { Component } from '@angular/core';
import { Location } from './entities/location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GameCreator';

  currentLocationItem: Location | undefined;
}
