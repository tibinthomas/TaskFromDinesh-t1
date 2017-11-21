import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateUpperCaseFirst } from './custom.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameOnlyForm: FormGroup;
  submitStatus = false;
  name: string;
  listOfAllUsers: string[];

  onSubmitButtonPress() {
    this.submitStatus = false;
    localStorage.setItem(name, name);
    this.listOfAllUsers.push(name);
    this.name = '';
  }

  ifNameIsUnique() {
    if (this.listOfAllUsers.find(name) === undefined) {
      return true;
    }
  }

  private initForm() {
    this.nameOnlyForm = new FormGroup({
      'name': new FormControl(name, [
        Validators.required,
        Validators.minLength(2),
        ValidateUpperCaseFirst,

      ])
    });


  }
}







// user = JSON.parse(localStorage.getItem(currentUser));

