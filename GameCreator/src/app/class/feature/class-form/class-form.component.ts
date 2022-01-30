import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Class, WeaponClass } from '../../entities/Class';
import { ClassService } from '../../service/class.service';
import { validateClass } from '../../validators/class-validator';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {

  weaponClasses = Object.keys(WeaponClass).filter(value => isNaN(Number(value)));

  @Input() id: number;
  @Output() resultClass = new EventEmitter<Class>();

  class: Class;
  classForm: FormGroup = this.getInitialEditForm();

  constructor(
    private fb: FormBuilder,
    private classService: ClassService) {
    console.log('in constructor');
    console.log(this.id)


  }
  ngOnInit(): void {
    if (this.id) {
      this.loadClass(this.id);
    }
  }

  save() {
    console.log("save");
    console.log(this.classForm.value);
    console.log(this.classForm);
    this.resultClass.emit(this.classForm.value);

  }

  loadClass(id: number) {
    console.log("in load class");
    console.log(id);
    this.classService.getClassById(
      {
        next: (edit_class: Class[]) => {
          
          this.class = edit_class[0];
          console.log(this.class);
          this.classForm.setValue({
            id: this.class.id,
            name: this.class.name,
            description: this.class.description,
            preferred_weapon: this.class.preferred_weapon
          })
          /*this.classForm = this.fb.group({
              id: [this.class.id],
              name: [this.class.name],
              description: [this.class.description],
              preferred_weapon: [this.class.preferred_weapon]
          });*/
          console.log(this.class);
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
      id: undefined,
      name: ['', [Validators.required, validateClass]],
      description: '',
      preferred_weapon: ['', [Validators.required]]
    });
  }

}
