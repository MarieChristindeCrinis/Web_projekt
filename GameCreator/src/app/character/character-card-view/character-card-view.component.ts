import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../model/character';

@Component({
  selector: 'app-character-card-view',
  templateUrl: './character-card-view.component.html',
  styleUrls: ['./character-card-view.component.scss']
})
export class CharacterCardViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  @Input() character: Character | undefined;
  @Output() deleteCharacter = new EventEmitter<Character>();
  @Output() updateCharacter = new EventEmitter<Character>();

  ngOnInit(): void {
  }

  executeDelete() : void {
    this.deleteCharacter.emit(this.character);
  }

  executeEdit() : void {
    this.router.navigate(['../character-edit/'+this.character?.id], {relativeTo: this.route});
  }
}
