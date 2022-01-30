import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from '../../entities/Class';
import { ClassService } from '../../service/class.service';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private classService: ClassService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addClass(addClass: Class) {
    delete addClass.id;

    console.log('in add Class');
    if(!addClass.description) addClass.description = '-'
    console.log(addClass);
    this.classService.addClass(
      {
        next: (addClass: Class) => this.router.navigate(['..'], {relativeTo: this.route}),
        error: (err) => console.log(err),
        complete: () => console.log('Success')
      },
      addClass
    )
  }

}
