import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
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
      name: 'Spring Boot',
      code: 'SPR301',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 4,
      name: 'Microservices',
      code: 'MIC401',
      credits: 3,
      gradeStatus: 'pending'
    },
    {
      id: 5,
      name: 'Database Systems',
      code: 'DB501',
      credits: 4,
      gradeStatus: 'passed'
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}