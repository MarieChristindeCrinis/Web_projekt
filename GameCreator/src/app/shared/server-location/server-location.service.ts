import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerLocationService {

  public ServerLocation: string = 'http://localhost:3000/';
}
