import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public FirstFormGroup: FormGroup;
  public SecondFormGroup: FormGroup;

  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.FirstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.SecondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

}
