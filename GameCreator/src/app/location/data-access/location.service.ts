import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';
import { ServerLocationService } from 'src/app/shared/server-location/server-location.service';
import { Location } from '../../entities/location'

 
@Injectable({providedIn: "root"})
export class LocationService {
  
  constructor(private httpClient: HttpClient, private serverLocationService : ServerLocationService) {  }

  findLocations(observer : Observer<Location[]>, name?: string): void {
    this.httpClient.get<Location[]>(`${this.serverLocationService.ServerLocation}locations`, name ? {params: new HttpParams().set('name', name)} : undefined)
      .subscribe(observer);
  }
}
