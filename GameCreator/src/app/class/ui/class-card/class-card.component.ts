import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Class } from '../../entities/Class';
import { ClassService } from '../../service/class.service';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css']
})
export class ClassCardComponent implements OnInit {
  @Input() item: Class | undefined;
  @Output() removed = new EventEmitter<number>();

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
  }

  removeClass(): void {
    if(confirm("Are you sure you want to remove class " + this.item?.name)) {
      this.classService.removeClass(
        {
          next: (classes: Class) => { this.removed.emit(this.item?.id) },
          error: (err) => console.log(err),
          complete: () => console.log('Success')
        },
        this.item!.id!
      )
    }
  }

}
