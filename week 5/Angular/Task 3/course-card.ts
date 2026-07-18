import { Component, Input,Output,EventEmitter,OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
    @Input()
    course!:{
      id:number,
      name: string,
      code: string,
      credits: number,
    };

    @Output()
    enrollRequested =new EventEmitter<number>();

    ngOnChanges(changes: SimpleChanges): void{
      console.log('Courses Changed:',changes['course']);
    }
}
