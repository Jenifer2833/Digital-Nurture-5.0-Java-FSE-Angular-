import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';

import { noCourseCode } from '../../validators/course-validator';
import { simulateEmailCheck } from '../../validators/email-validator';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm {

  enrollForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],

      studentEmail: [
        '',
        [Validators.required, Validators.email],
        [simulateEmailCheck]
      ],

      courseId: [
        '',
        [Validators.required, noCourseCode]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array([])

    });

  }

  onSubmit(): void {

    console.log('Form Value:', this.enrollForm.value);

    console.log('Raw Value:', this.enrollForm.getRawValue());

  }

  get additionalCourses(): FormArray<FormControl> {

    return this.enrollForm.get('additionalCourses') as FormArray<FormControl>;

  }

  addCourse(): void {

    this.additionalCourses.push(

      new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      })

    );

  }

  removeCourse(index: number): void {

    this.additionalCourses.removeAt(index);

  }

}
