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

// export class LocationService {

//   public LocationsObject = {};

//   private mServerLocationProvider: ServerLocationService;
//   private mHttpClient: HttpClient;

//   constructor(serverLocationProvider: ServerLocationService, httpService: HttpClient)
//   {
//     this.mServerLocationProvider = serverLocationProvider;
//     this.mHttpClient = httpService;

//     this.LocationsObject = httpService.get(serverLocationProvider.ServerLocation + 'locations');
//     console.log("das#################################")
//       console.log(JSON.stringify(this.LocationsObject));
//       console.log("hier#################################")

//   }

//   private _OnlyLocationsFilter(){}




//   public QueryItem(id: Guid) : Observable<IItemModel>
//   {
//     return this.mHttpClient.get<IStorageItemModel[]>(this.mServerLocationProvider.ServerLocation + 'items?Identifier=' + id.toString())
//       .pipe(map(item => this._ConvertToRuntimeModel(item[0])));
//   }

//   public QueryItems(queryFilters: QueryFilter[]) : Observable<IItemModel[]>
//   {
//     const filter = queryFilters.map(x => x.GenerateQuery()).join('&');

//     return this.mHttpClient.get<IStorageItemModel[]>(this.mServerLocationProvider.ServerLocation + 'items?' + filter)
//       .pipe(map(items => items.map(x => this._ConvertToRuntimeModel(x))));
//   }
// }
