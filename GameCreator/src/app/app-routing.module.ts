import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterFormComponent } from './character/character-form/character-form.component';
import { CharacterViewComponent } from './character/character-view/character-view.component';
import { ClassOverviewComponent } from './class/ui/class-overview/class-overview.component';
//import { ClassComponent } from './class/class.component';
import { HomeComponent } from './home/home.component';
import { ItemFormComponent } from './items/ui/item-form/item-form.component';
import { ItemOverviewComponent } from './items/ui/item-overview/item-overview.component';
import { LocationEditComponent } from './location/feature/location-edit/location-edit/location-edit.component';
import { LocationOverviewComponent } from './location/ui/location-overview/location-overview/location-overview.component';

const APP_ROUTES: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'items', 
    component: ItemOverviewComponent
  },
  { 
    path: 'item-create', 
    component: ItemFormComponent 
  },
  { 
    path: 'item-edit/:id', 
    component: ItemFormComponent
  },
  { 
    path: 'location', 
    component: LocationOverviewComponent
  },
  {
    path: 'location-edit/:id', 
    component: LocationEditComponent
  },
  {
    path: 'character',
    component: CharacterViewComponent
  },
  {
    path: 'character',
    component: CharacterViewComponent
  },
  {
    path: 'character-add',
    component: CharacterFormComponent,
  },
  {
    path: 'character-edit/:id',
    component: CharacterFormComponent,
  },
  {
    path: 'class',
    loadChildren: () => import('./class/class-routing.module')
      .then(esm => esm.ClassRoutingModule)
  },
  { 
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
