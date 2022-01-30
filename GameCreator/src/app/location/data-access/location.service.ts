import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import locations from '../../../../../Backend/db.json';
import { Location } from '../../entities/location'

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) {  }

  public find(searchName: string): any {
    const locationList:Array<Location> = locations.locations;
    return locationList.find(loc => loc.name === searchName);
  }
}
