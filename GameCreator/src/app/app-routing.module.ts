import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterViewComponent } from './character/character-view/character-view.component';
import { HomeComponent } from './home/home.component';
import { ItemFormComponent } from './items/ui/item-form/item-form.component';
import { ItemOverviewComponent } from './items/ui/item-overview/item-overview.component';

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
    loadChildren: () => import('./location/location.module')
      .then(esm => esm.LocationModule)
  },
  {
    path: 'character',
    component: CharacterViewComponent
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
