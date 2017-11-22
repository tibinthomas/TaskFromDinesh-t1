import { Component, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidateUpperCaseFirst } from './custom.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Form related properties
  nameOnlyForm: FormGroup;
  get name() { return this.nameOnlyForm.get('nameControl'); }

  // State of form properties
  nameControlValue;
  notUniqueName = false;
  saveMessageDisplay = false;

  // Data Store
  listOfAllUsers = ['Tibin', 'Thomas'];


  constructor(fb: FormBuilder) {
    this.nameOnlyForm = fb.group({
      nameControl: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[A-Z][a-z,A-Z, ]*')
      ]]
  });
  }

  onSubmitButtonPress() {
    this.nameControlValue = this.nameOnlyForm.controls['nameControl'].value;
    localStorage.setItem(this.nameControlValue, this.nameControlValue);
    this.listOfAllUsers.push(this.nameControlValue);
    this.saveMessageDisplay = true;
    //setInterval(() => { this.saveMessageDisplay = false }, 5000);
  }

  onChangeInText() {
    this.nameControlValue = this.nameOnlyForm.controls['nameControl'].value;
    if (this.listOfAllUsers.includes(this.nameControlValue) ) {
      this.notUniqueName = true;
    } else {
      this.notUniqueName = false;
    }
  }

}







// user = JSON.parse(localStorage.getItem(currentUser));
