import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { FormMakingService } from './form-making.service';

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
  listOfAllUsers: string[] = [];


  constructor(private fMakingService: FormMakingService) {
    localStorage.setItem('listOfNamesArray', JSON.stringify(this.listOfAllUsers));
  }

  ngOnInit() {
    this.nameOnlyForm = this.fMakingService.createForm();
  }

  showSaveMessage() {
    this.saveMessageDisplay = true;
    setTimeout(() => {
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
