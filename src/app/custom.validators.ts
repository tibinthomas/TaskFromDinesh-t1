import { AbstractControl } from '@angular/forms';

export function PresentsOfSymbols(control: AbstractControl) {
const regex = new RegExp(/[!%^*()+|~=`{}\[\]:";'<>?,.\/]+/);
  if (regex.test(control.value)) {
    return { containsSpecialChars: true };
  }
  return null;
}
