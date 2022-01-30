import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';
import { ServerLocationService } from 'src/app/shared/server-location/server-location.service';
import { Class } from '../entities/Class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private client : HttpClient, private serverLocationService : ServerLocationService) { }

  getClasses(observer : Observer<Class[]>, name?: string) : void {
      this.client.get<Class[]>(`${this.serverLocationService.ServerLocation}classes`, name ? {params: new HttpParams().set('name', name)} : undefined)
        .subscribe(observer);
      
  }

  getClassById(observer : Observer<Class[]>, id: number) : void {
    this.client.get<Class[]>(`${this.serverLocationService.ServerLocation}classes`, {params: new HttpParams().set('id', id)})
    .subscribe(observer);
  }

}
