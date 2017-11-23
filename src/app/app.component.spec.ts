import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms/src/form_builder';

describe('nameOnlyComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent(new FormBuilder);
  });

  it('should create a form with 1 control', () => {
    expect(component.nameOnlyForm.contains('name')).toBeTruthy();
  });

  it('should make the name control required', () => {
    const control = component.nameOnlyForm.get('name');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should make sure that name control contain atleast 2 char', () => {
    const control = component.nameOnlyForm.get('name');

    control.setValue('Q');

    expect(control.valid).toBeTruthy();
  });

  it('should make sure that name controls values got its first letter Cap', () => {
    const control = component.nameOnlyForm.get('name');

    control.setValue('qqq');

    expect(control.valid).toBeFalsy();
  });

  it('should make sure that name controls values donot contain some special chars other than $,_,-,&', () => {
    const control = component.nameOnlyForm.get('name');

    control.setValue('Qwer*');

    expect(control.valid).toBeFalsy();
  });

});
