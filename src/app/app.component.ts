import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateUpperCaseFirst } from './custom.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.nameOnlyForm = new FormGroup({
      'name': new FormControl(name, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[A-Z]+$'),
        Validators.pattern('[]')
      ]))
  });
  }

  nameOnlyForm: FormGroup;
  submitStatus = false;
  name: string;
  listOfAllUsers: string[];

  onSubmitButtonPress() {
    if (this.nameIsUnique()) {
    this.submitStatus = false;
    localStorage.setItem(name, name);
    this.listOfAllUsers.push(name);
    this.name = '';
    }
  }

  nameIsUnique(): boolean {
    if (this.listOfAllUsers.find(name) === undefined) {
      return true;
    }
  }
}







// user = JSON.parse(localStorage.getItem(currentUser));

