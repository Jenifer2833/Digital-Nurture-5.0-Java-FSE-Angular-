import { Component, Input,Output,EventEmitter,OnChanges,SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Highlight } from '../../directives/highlight';
@Component({
  selector: 'app-course-card',
  standalone:true,
  imports: [CommonModule,Highlight,CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges{
  isExpanded = false;
isEnrolled = false;
    @Input()
    course!:{
      id:number;
      name: string;
      code: string;
      credits: number;
      gradeStatus:string;
    };
  get cardClasses() {
  return {
    'card--enrolled': this.isEnrolled,
    'card--full': this.course.credits >= 4,
    'expanded': this.isExpanded
  };
}
get borderColor() {
  if (this.course.gradeStatus === 'passed') {
    return 'green';
  }

  if (this.course.gradeStatus === 'failed') {
    return 'red';
  }

  return 'gray';
}
toggleDetails() {
  this.isExpanded = !this.isExpanded;
}
    @Output()
    enrollRequested =new EventEmitter<number>();

    ngOnChanges(changes: SimpleChanges): void{
      console.log('Courses Changed:',changes['course']);
    }
}
