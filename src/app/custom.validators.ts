import { AbstractControl } from '@angular/forms';

export function ValidateUpperCaseFirst(control: AbstractControl) {
  const regex = new RegExp('^[A-Z]');
  if (regex.test(control.value)) {
    return { validStartWithUpper: true };
  }
  return null;
}
