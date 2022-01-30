import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassOverviewComponent } from './ui/class-overview/class-overview.component';
import { ClassSearchComponent } from './feature/class-search/class-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassCardComponent } from './ui/class-card/class-card.component';
import { ClassEditComponent } from './feature/class-edit/class-edit.component';
import { ClassRoutingModule } from './class-routing.module';
import { ClassFormComponent } from './feature/class-form/class-form.component';
import { ClassAddComponent } from './feature/class-add/class-add.component';



@NgModule({
  declarations: [
    ClassOverviewComponent,
    ClassSearchComponent,
    ClassCardComponent,
    ClassEditComponent,
    ClassFormComponent,
    ClassAddComponent
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClassModule { }
