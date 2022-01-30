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

  getClasses(observer : Observer<Class[]>, name?: string, weapon?: string) : void {

      let params = new HttpParams();
      if(name) params = params.set('name', name);
      if(weapon) params = params.set('preferred_weapon', weapon);

      console.log(params);

      this.client.get<Class[]>(`${this.serverLocationService.ServerLocation}classes`, {params: params})
        .subscribe(observer);
      
  }

  getClassById(observer : Observer<Class[]>, id: number) : void {
    this.client.get<Class[]>(`${this.serverLocationService.ServerLocation}classes`, {params: new HttpParams().set('id', id)})
    .subscribe(observer);
  }

  updateClass(observer : Observer<Class>, updateClass: Class): void {
    this.client.put<Class>(`${this.serverLocationService.ServerLocation}classes/${updateClass.id}`, updateClass)
      .subscribe(observer);
  }

  addClass(observer : Observer<Class>, addClass: Class): void {
    this.client.post<Class>(`${this.serverLocationService.ServerLocation}classes`, addClass)
      .subscribe(observer);
  }

  removeClass(observer : Observer<Class>, id: number): void {
    this.client.delete<Class>(`${this.serverLocationService.ServerLocation}classes/${id}`)
      .subscribe(observer);
  }

}
