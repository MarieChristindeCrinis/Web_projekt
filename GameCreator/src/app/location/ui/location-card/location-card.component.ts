import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '../../../entities/location';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent implements OnInit {
  @Input() locationItem: Location | undefined;
  @Input() selected: boolean = false;
  @Output() selectedChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete(name: any): void{
    
  }
}
