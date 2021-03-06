import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { Observer } from 'rxjs';
import { CharacterClientService } from '../service/character-client.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent implements OnInit {
  chars! : Array<Character>;
  search : string = '';

  constructor(private characterService: CharacterClientService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters(
      {
        next: (chars: Character[]) => {
          this.chars = chars; 
          console.log(JSON.stringify(chars)); 
        },
        error: (err) => console.log(err),
        complete: () =>{} 
      },
      this.search
    )
  }

  clear() : void{
    this.search = '';
    this.getCharacters();
  }

  deleteChar(character: Character): void {
    this.characterService.deleteCharacter(character.id, 
      {
        next: (char: Character) => {
          this.getCharacters();
        },
        error: (err) => console.log(err),
        complete: () => {}
      });
  }

  update(character: Character): void {
    this.characterService.updateCharacter(character, 
      {
        next: (char: Character) => {
          this.getCharacters();
        },
        error: (err) => console.log(err),
        complete: () => {}
      });
  }

}
