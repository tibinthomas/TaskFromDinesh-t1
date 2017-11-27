import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { mockData } from './data.mock';
import * as CustomValidators from './custom.validators';

@Injectable()
export class FormMakingService {

  constructor(private fb: FormBuilder) {  }

  createForm() {
    return this.fb.group({
      nameControl: [mockData.name, [
        Validators.required,
        Validators.pattern(/^[A-Z]{1}.*/),
        CustomValidators.atleastTwoAlphaValidator,
        CustomValidators.presentsOfSymbolsValidator,
        CustomValidators.thisNameAlreadyExistValidator
      ]]
    });
  }

}
