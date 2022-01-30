import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterViewComponent } from './character-view/character-view.component';
import { CharacterCardViewComponent } from './character-card-view/character-card-view.component';
import { MatIconModule } from '@angular/material/icon';
import { ChracaterEditViewComponent } from './chracater-edit-view/chracater-edit-view.component';



@NgModule({
  declarations: [
    CharacterViewComponent,
    CharacterCardViewComponent,
    ChracaterEditViewComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ]
})
export class CharacterModule { }
