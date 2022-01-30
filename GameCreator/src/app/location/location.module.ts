import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationCardComponent } from './ui/location-card/location-card.component';
import { LocationEditComponent } from './feature/location-edit/location-edit/location-edit.component';
import { LocationSearchComponent } from './feature/location-search/location-search/location-search.component';
import { LocationService } from './data-access/location.service';
import { FormsModule } from '@angular/forms';
import { LocationRoutingModule } from './location-routing.module';



@NgModule({
  declarations: [
    LocationCardComponent,
    LocationEditComponent,
    LocationSearchComponent,
  ],
  providers: [
    LocationService
  ],
  imports: [
    CommonModule,
    FormsModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
