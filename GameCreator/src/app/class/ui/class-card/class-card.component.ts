import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../../entities/Class';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css']
})
export class ClassCardComponent implements OnInit {
  @Input() item: Class | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
