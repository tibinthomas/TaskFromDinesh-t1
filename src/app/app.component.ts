import { Component, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import * as CustomValidators from './custom.validators';

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
  listOfAllUsers = ['Tibin', 'Tibu', 'Tibi', 'Thibu']; // alwaysKeepInSyncWithsessionStorage


  constructor(fb: FormBuilder) {
    this.nameOnlyForm = fb.group({
      nameControl: ['', [
        Validators.required,
        Validators.pattern(/^[A-Z]{1}.*/),
        CustomValidators.atleastTwoAlphaValidator,
        CustomValidators.presentsOfSymbolsValidator,
        // CustomValidators.thisNameAlreadyExistValidator
      ]]
    });

    sessionStorage.setItem('listOfNamesArray', JSON.stringify(this.listOfAllUsers));

    this.name.valueChanges.subscribe((data) => {         // code should be moved from here
      this.listOfAllUsers = JSON.parse(sessionStorage.getItem('listOfNamesArray'));
      if (this.listOfAllUsers.includes(data) ) {
        this.notUniqueName = true;
      } else {
        this.notUniqueName = false;
      }
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
    this.listOfAllUsers = JSON.parse(sessionStorage.getItem('listOfNamesArray'));
    this.listOfAllUsers.push(nameJustAdded);
    sessionStorage.setItem('listOfNamesArray', JSON.stringify(this.listOfAllUsers));
    // localStorage.removeItem('listOfNamesArray');
    this.nameOnlyForm.reset();
    this.showSaveMessage();
  }

}
  // onChangeInText(): boolean {
  //   this.nameControlValue = this.nameOnlyForm.controls['nameControl'].value;
  //   if (this.listOfAllUsers.includes(this.nameControlValue) ) {
  //     return this.notUniqueName = true;
  //   } else {
  //     return this.notUniqueName = false;
  //   }
  // }



  // IsUniqueValidator(control: AbstractControl) {
  //   if (this.notUniqueName) {
  //     return { isUniqueValidator: true };
  //   }
  //       return null;
  // }









// user = JSON.parse(sessionStorage.getItem(currentUser));
