import { AbstractControl } from '@angular/forms';

export function presentsOfSymbolsValidator(control: AbstractControl): {[key: string]: any} | null {
  const regex = new RegExp(/[!%^*()+|~=`{}\[\]:";'<>?,.\/]+/);
  const regexValidity = regex.test(control.value);
  return regexValidity ? { 'presentsOfSymbols': { value: control.value }} : null;
}

export function atleastTwoAlphaValidator(control: AbstractControl): {[key: string]: any} | null {
  const regex = new RegExp(/^((?!(.*[a-zA-Z].*[a-zA-Z]{1,}.*)).)*$/);
  const regexValidity = regex.test(control.value);
  return regexValidity ? { 'atleastTwoAlpha': { value: control.value }} : null;
}

