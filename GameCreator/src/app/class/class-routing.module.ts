import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClassEditComponent } from './feature/class-edit/class-edit.component';
import { ClassOverviewComponent } from './ui/class-overview/class-overview.component';
import { ClassCardComponent } from './ui/class-card/class-card.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ClassOverviewComponent
      },
      {
        path: 'class-edit/:id',
        component: ClassEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
