import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Class } from '../../entities/Class';
import { ClassService } from '../../service/class.service';

@Component({
  selector: 'app-class-search',
  templateUrl: './class-search.component.html',
  styleUrls: ['./class-search.component.css']
})
export class ClassSearchComponent implements OnInit {
  @Output() classes = new EventEmitter<Class[]>();
  name: string;

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    this.classService.getClasses(
      {
        next: (classes: Class[]) => {
          this.classes.emit(classes); 
          console.log(JSON.stringify(classes)); 
        },
        error: (err) => console.log(err),
        complete: () => console.log('Done fetching Chars')
      },
      this.name
    )
  }

}
