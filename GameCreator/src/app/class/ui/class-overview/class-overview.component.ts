import { Component, OnInit } from '@angular/core';
import { Class } from '../../entities/Class';

@Component({
  selector: 'app-class-overview',
  templateUrl: './class-overview.component.html',
  styleUrls: ['./class-overview.component.css']
})
export class ClassOverviewComponent implements OnInit {

  classes: Class[] = [];

  constructor() { }

  ngOnInit(): void {


  }

  updateClasses(newClasses: Class[]) {
    this.classes = newClasses;
  }

}
