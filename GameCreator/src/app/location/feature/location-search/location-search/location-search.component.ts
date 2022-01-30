import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/location/data-access/location.service';
import { Location } from '../../../../entities/location';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css'],
  providers: [LocationService]
})
export class LocationSearchComponent implements OnInit {
  id: number = 0;
  name: string = "Test";
  locations : Array<Location> = [];
  selectedLocation: Location | undefined;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.locationService.find(this.name)
      .subscribe({
        next:  (locations: Location[]) => {
          this.locations = locations;
          console.log({ locations });
        },
        error: (err: any) => console.error('Loading of location failed', err)
      });
  }
  
  select(loc: Location): void {
    this.selectedLocation = loc;
  }
}
