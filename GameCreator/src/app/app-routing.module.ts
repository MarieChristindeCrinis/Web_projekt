import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterViewComponent } from './character/character-view/character-view.component';
import { ClassOverviewComponent } from './class/ui/class-overview/class-overview.component';
//import { ClassComponent } from './class/class.component';
import { HomeComponent } from './home/home.component';
import { ItemFormComponent } from './items/ui/item-form/item-form.component';
import { ItemOverviewComponent } from './items/ui/item-overview/item-overview.component';
import { LocationCardComponent } from './location/ui/location-card/location-card.component';

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
    component: LocationCardComponent
  },
  {
    path: 'character',
    component: CharacterViewComponent
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
