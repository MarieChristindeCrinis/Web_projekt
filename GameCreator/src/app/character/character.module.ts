import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterViewComponent } from './character-view/character-view.component';
import { CharacterCardViewComponent } from './character-card-view/character-card-view.component';
import { MatIconModule } from '@angular/material/icon';
import { RacePipePipe } from './pipes/race-pipe.pipe';
import { CharacterFormComponent } from './character-form/character-form.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CharacterViewComponent,
    CharacterCardViewComponent,
    RacePipePipe,
    CharacterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
  ]
})
export class CharacterModule { }
