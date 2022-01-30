import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationSearchComponent } from './feature/location-search/location-search/location-search.component';
import { LocationEditComponent } from './feature/location-edit/location-edit/location-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path: '', 
        redirectTo: 'location-search',
        pathMatch: 'full'
      },
      {
        path: 'location-search', 
        component: LocationSearchComponent
      },
      {
        path: 'location-edit/:id', 
        component: LocationEditComponent
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LocationRoutingModule { }
