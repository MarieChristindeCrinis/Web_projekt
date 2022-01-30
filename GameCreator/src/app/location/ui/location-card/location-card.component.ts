import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../../entities/location';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent implements OnInit {
  @Input() locationItem: Location | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
