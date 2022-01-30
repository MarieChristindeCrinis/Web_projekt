import { Component, OnInit } from '@angular/core';
import { Location } from '../../../../entities/location';

@Component({
  selector: 'app-location-overview',
  templateUrl: './location-overview.component.html',
  styleUrls: ['./location-overview.component.css']
})
export class LocationOverviewComponent implements OnInit {
  locations: Location[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  updateLocations(newLocations: Location[]) {
    this.locations = newLocations;
  }
}
