import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'THEME TEAM';
  theme = '';
  toggleTheme = false;

  constructor() {
  }

  chageTheme(): void {
    this.theme = this.toggleTheme ? "" : "alternative";
    this.toggleTheme = !this.toggleTheme;
  }

  selectTheme(className: string): void {
    this.theme = className;
  }
}
