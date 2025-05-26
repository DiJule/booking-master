import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const dateNotEqualValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const checkIn = control.get('checkInDate')?.value;
  const checkOut = control.get('checkOutDate')?.value;

  if (!checkIn || !checkOut) {
    return null;
  }

  return new Date(checkIn).getTime() === new Date(checkOut).getTime()
    ? { sameDate: true }
    : null;
};
