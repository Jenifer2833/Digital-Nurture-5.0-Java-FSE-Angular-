import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';


@Component({
  selector: 'app-course-list',
  standalone:true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit{

  selectedCourseId = 0;
  isLoading=false;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'pending'
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 3,
      gradeStatus: 'failed'
    },
    {
      id: 3,
      name: 'Python',
      code: 'PY301',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 4,
      name: 'DBMS',
      code: 'DB401',
      credits: 3,
      gradeStatus: 'pending'
    },
    {
      id: 5,
      name: 'Artificial Intelligence',
      code: 'AI501',
      credits: 4,
      gradeStatus: 'pending'
    }
  ];
  ngOnInit(): void {
  console.log("CourseList Loaded");
}

  onEnroll(courseId:number){

    console.log('Enrolling in course:',courseId);

    this.selectedCourseId = courseId;

  }
  trackByCourseId(index: number, course: any): number {
  return course.id;
}

}