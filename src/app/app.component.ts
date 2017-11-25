import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

import * as CustomValidators from './custom.validators';
import { mockData } from './data.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Form related properties
  nameOnlyForm: FormGroup;
  get name() { return this.nameOnlyForm.get('nameControl'); }

  // State of form properties
  nameControlValue;
  saveMessageDisplay = false;

  // Data Store
  listOfAllUsers: string[];


  constructor(private fb: FormBuilder) {
    localStorage.setItem('listOfNamesArray', JSON.stringify(this.listOfAllUsers));
  }

  ngOnInit() {
    this.nameOnlyForm = this.fb.group({
      nameControl: [mockData.name, [
        Validators.required,
        Validators.pattern(/^[A-Z]{1}.*/),
        CustomValidators.atleastTwoAlphaValidator,
        CustomValidators.presentsOfSymbolsValidator,
        CustomValidators.thisNameAlreadyExistValidator
      ]]
    });
  }

  showSaveMessage() {
    this.saveMessageDisplay = true;
    setTimeout(() => {
      console.log(this.saveMessageDisplay);
      this.saveMessageDisplay = false;
    }, 5000);
  }

  onSubmitButtonPress() {
    const nameJustAdded = this.name.value;
    this.listOfAllUsers = JSON.parse(localStorage.getItem('listOfNamesArray'));
    this.listOfAllUsers.push(nameJustAdded);
    localStorage.setItem('listOfNamesArray', JSON.stringify(this.listOfAllUsers));
    this.nameOnlyForm.reset();
    this.showSaveMessage();
  }

}
