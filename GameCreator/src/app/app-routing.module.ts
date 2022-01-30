import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemFormComponent } from './items/ui/item-form/item-form.component';
import { ItemOverviewComponent } from './items/ui/item-overview/item-overview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: ItemOverviewComponent },
  { path: 'item-create', component: ItemFormComponent },
  { path: 'item-edit/:id', component: ItemFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
