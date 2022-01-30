import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClassEditComponent } from './feature/class-edit/class-edit.component';
import { ClassOverviewComponent } from './ui/class-overview/class-overview.component';
import { ClassCardComponent } from './ui/class-card/class-card.component';
import { ClassAddComponent } from './feature/class-add/class-add.component';

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
      },
      {
        path: 'class-add',
        component: ClassAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
