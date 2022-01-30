import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../../entities/Class';
import { ClassService } from '../../service/class.service';

@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html',
  styleUrls: ['./class-edit.component.css']
})
export class ClassEditComponent implements OnInit {
  editClass: Class;
  editForm: FormGroup = this.getInitialEditForm();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private classService: ClassService) {
      console.log('in constructor');
    this.route.paramMap.subscribe(
      params => {
        this.loadClass(+params.get('id')!);
      }
    );
  }
  ngOnInit(): void {
    console.log("in edit");
  }

  save() {
    console.log("save");

    
  }

  remove() {
    console.log("remove");
  }

  loadClass(id: number) {
    console.log("in load class");
    console.log(id);
    this.classService.getClassById(
      {
        next: (edit_class: Class[]) => {
          this.editClass = edit_class[0];
          this.editForm = this.fb.group({
              id: [this.editClass.id],
              name: [this.editClass.name],
              description: [this.editClass.description],
              preferred_weapon: [this.editClass.preferred_weapon]
          });
          console.log(this.editClass);
        },
        error: (err) => console.log(err),
        complete: () => console.log('Done fetching Chars')
      },
      id
    )
  }

  getInitialEditForm(): FormGroup {
    console.log('in initial edit form');
    return this.fb.group({
      id: [0],
      name: [''],
      description: [''],
      preferred_weapon: ['']
    });
  }

}
