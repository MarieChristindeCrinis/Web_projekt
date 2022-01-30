import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-character-card-view',
  templateUrl: './character-card-view.component.html',
  styleUrls: ['./character-card-view.component.scss']
})
export class CharacterCardViewComponent implements OnInit {

  constructor() { }

  @Input() character: Character | undefined;
  @Output() deleteCharacter = new EventEmitter<Character>();
  @Output() updateCharacter = new EventEmitter<Character>();

  ngOnInit(): void {
  }

  executeDelete() : void {
    this.deleteCharacter.emit(this.character);
  }
}
