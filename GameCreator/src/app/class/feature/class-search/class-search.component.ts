import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Class, WeaponClass } from '../../entities/Class';
import { ClassService } from '../../service/class.service';

@Component({
  selector: 'app-class-search',
  templateUrl: './class-search.component.html',
  styleUrls: ['./class-search.component.css']
})
export class ClassSearchComponent implements OnInit {
  @Output() classes = new EventEmitter<Class[]>();
  name: string;
  weapon: string;
  weaponClasses = Object.keys(WeaponClass).filter(value => isNaN(Number(value)));

  constructor(private classService: ClassService) { this.weaponClasses.push('') }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    console.log(this.weapon);
    this.classService.getClasses(
      {
        next: (classes: Class[]) => {
          this.classes.emit(classes); 
          console.log(JSON.stringify(classes)); 
        },
        error: (err) => console.log(err),
        complete: () => console.log('Success')
      },
      this.name,
      this.weapon
    )
  }

}
