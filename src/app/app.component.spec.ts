import { AppComponent } from './app.component';
import { Component } from '@angular/core';

describe('nameOnlyComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it('should create a form with 1 control', () => {
    expect(component.nameOnlyForm.contains('name')).toBeTruthy();
  });

  it('should make the name control required', () => {
    const control = component.nameOnlyForm.get('name');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should make the name control contain atleast 2 char', () => {
    const control = component.nameOnlyForm.get('name');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should make the name control required', () => {
    const control = component.nameOnlyForm.get('name');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should make the name control required', () => {
    const control = component.nameOnlyForm.get('name');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should make the name control required', () => {
    const control = component.nameOnlyForm.get('name');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
});
