import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Character, Race, Race2LabelMapping } from '../model/character';
import { CharacterClientService } from '../service/character-client.service';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {

  private dialogMode : string = 'edit';
  character! : Character;
  races = Race;
  raceKeys : number[] = Object.keys(this.races).filter(value => !isNaN(Number(value))).map(x => Number(x));

  constructor(private route: ActivatedRoute, private characterService: CharacterClientService, private router: Router) { 
  }

  ngOnInit(): void {
    let routeId = this.route.snapshot.paramMap.get('id');
    if(routeId === null) {
        this.dialogMode = 'add';
        this.character = new Character(Guid.create().toString(), '', 0, '', null, null, null);
    }
    else {
      console.log('fetching char');
      this.characterService.getCharacter({
        next: (char: Character[]) => {
          console.log(char);
          this.character = char[0];
        },
        complete: () => console.log('done'),
        error: (err) => console.log(err),
      }, routeId);
    }
  }

  save(): void {
    console.log('In Save Method');
    if(this.dialogMode === 'add') {
      this.characterService.postCharacter(this.character, {
        next: (char: Character) => this.router.navigate(['../character'], {relativeTo: this.route}),
        complete: () => console.log('done'),
        error: (err) => console.log(err),
      });
    }
    else {
      this.characterService.updateCharacter(this.character, {
        next: (char: Character) => this.router.navigate(['../../character'], {relativeTo: this.route}),
        complete: () => console.log('done'),
        error: (err) => console.log(err),
      })
    }
  }

  cancel() : void {
    this.router.navigate(['../character'], {relativeTo: this.route});
  }
}
