import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { validateName } from '../../../validation/location-validator'

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {
  id: number = 0;
  showDetails: boolean = false;
  editForm: FormGroup = this.getInitialEditForm();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) {
    this.route.paramMap.subscribe(
      params => {
        this.id = +params.get('id')!;
        this.showDetails = params.get('showDetails') === 'true';
        this.editForm.controls['id'].setValue(this.id);
      }
    );
  }

  ngOnInit(): void {
    this.editForm.valueChanges.subscribe(console.log);
    this.editForm.controls['name'].valueChanges.subscribe(console.log);
  }

  getInitialEditForm(): FormGroup {
    return this.fb.group({
      id: [0],
      name: ['Desert Island', [
        Validators.required,
        validateName       
      ]]
    });
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }
}
