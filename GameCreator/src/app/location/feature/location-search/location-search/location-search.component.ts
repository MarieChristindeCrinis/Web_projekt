import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocationService } from 'src/app/location/data-access/location.service';
import { Location } from '../../../../entities/location';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css'],
})
export class LocationSearchComponent implements OnInit {
  @Output() locations = new EventEmitter<Location[]>();
  name: string;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    this.locationService.findLocations(
      {
        next:  (locations: Location[]) => {
          this.locations.emit(locations);
        console.log(JSON.stringify(locations));
        },
        error: (error) => console.log(error),
        complete: () => console.log('Done')
      },
      this.name
    )
  }

  // search(): void {
  //   this.locationService.findLocations(this.name)
  //     .subscribe({
  //       next: locations => {
  //         this.locations = locations;
  //         console.log('My flights', { locations });
  //       },
  //       error: err => console.error('Flights loading error', err)
  //     });
  // }
}
