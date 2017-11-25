import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

describe('nameOnlyComponent is on inspection and ', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [AppComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(AppComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should create a form with 1 control', () => {
    expect(component.nameOnlyForm.contains('nameControl')).toBeTruthy();
  });

  it('should make the name control required', () => {
    const control = component.nameOnlyForm.get('nameControl');

    control.setValue('');

    expect(control.hasError('required')).toBeTruthy();
  });

  it('should make sure that name control contain atleast 2 alphabet', () => {
    const control = component.nameOnlyForm.get('nameControl');

    control.setValue('35g234^');

    expect(control.hasError('atleastTwoAlpha')).toBeTruthy();
  });

  it('should make sure that name controls values got its first letter Cap', () => {
    const control = component.nameOnlyForm.get('nameControl');

    control.setValue('qqq');

    expect(control.hasError('pattern')).toBeTruthy();
  });

  it('should make sure that name controls values donot contain some special chars other than $,_,-,&', () => {
    const control = component.nameOnlyForm.get('nameControl');

    control.setValue('Tibin');

    expect(control.hasError('thisNameAlreadyExist')).toBeFalsy();
  });



});
