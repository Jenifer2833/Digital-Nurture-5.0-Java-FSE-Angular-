import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {

  selectedCourseId = 0;

  courses = [
    { id:1,name:'Angular',code:'ANG101',credits:4 },
    { id:5,name:'AI',code:'AI501',credits:4 }
  ];

  onEnroll(courseId:number){

    console.log('Enrolling in course:',courseId);

    this.selectedCourseId = courseId;

  }

}
