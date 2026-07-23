import {
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn
} from '@angular/forms';

export const simulateEmailCheck: AsyncValidatorFn = (
  control: AbstractControl
): Promise<ValidationErrors | null> => {

  return new Promise(resolve => {

    setTimeout(() => {

      if (control.value && control.value.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }

    }, 800);

  });

};