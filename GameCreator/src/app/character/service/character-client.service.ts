import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observer } from 'rxjs';
import { ServerLocationService } from 'src/app/shared/server-location/server-location.service';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterClientService {

  constructor(private client : HttpClient, private serverLocationService : ServerLocationService) { }

  getCharacters(observer : Observer<Character[]>, search: string) : void {
    if(!search) {
      this.client.get<Character[]>(`${this.serverLocationService.ServerLocation}characters`)
        .subscribe(observer);
    }
    else {
      this.client.get<Character[]>(`${this.serverLocationService.ServerLocation}characters`, {params: new HttpParams().set('name', search)})
        .subscribe(observer);
    }
  }

  postCharacter(character: Character, observer : Observer<Character>) : void {
    this.client.post<Character>(`${this.serverLocationService.ServerLocation}characters`, character)
      .subscribe(observer);
  }

  deleteCharacter(characterId: Guid, observer : Observer<Character>) : void {
    this.client.delete<Character>(`${this.serverLocationService.ServerLocation}characters/${characterId.toString()}`)
      .subscribe(observer);
  }

  updateCharacter(character: Character, observer : Observer<Character>): void {
    this.client.put<Character>(`${this.serverLocationService.ServerLocation}characters/${character.id.toString()}`, character)
      .subscribe(observer);
  }
}
