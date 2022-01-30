import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationCardComponent } from './ui/location-card/location-card.component';
import { LocationEditComponent } from './feature/location-edit/location-edit/location-edit.component';
import { LocationSearchComponent } from './feature/location-search/location-search/location-search.component';



@NgModule({
  declarations: [
    LocationCardComponent,
    LocationEditComponent,
    LocationSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LocationModule { }
