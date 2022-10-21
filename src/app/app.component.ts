import { Component } from '@angular/core';

import { FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormBuilder, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'THEME TEAM';
  theme = '';
  toggleTheme = false;

  addCustomColor = false;
  colorForm: FormGroup;
  disabled: false;
  touchUi = false;
  color: ThemePalette = 'primary';
  primaryColor = '';
  accentColor = '';

  constructor(private fb: FormBuilder) {
    this.colorForm = fb.group({
      primaryColor: ['', Validators.compose([Validators.required])]
    })
  }

  chageTheme(): void {
    this.theme = this.toggleTheme ? "" : "alternative";
    this.toggleTheme = !this.toggleTheme;
  }

  getKey(): AbstractControl {
    return this.colorForm.get('primaryColor') as FormGroup;
  }
  print(): void {
    console.log(this.primaryColor);
  }
  selectTheme(className: string): void {
    this.theme = className;
  }

  toggleCustomColor() {
    this.addCustomColor = !this.addCustomColor;
  }
}
