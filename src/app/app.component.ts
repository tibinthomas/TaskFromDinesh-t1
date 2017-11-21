import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameOnlyForm: FormGroup;

  onSubmitButtonPress() {

  }

  private initForm() {
    let name = '';

    this.nameOnlyForm = new FormGroup({
      'name': new FormControl(name)
    });


  }
}
