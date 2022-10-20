import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  styleUrls: ['./color-palette.component.scss'],
  templateUrl: './color-palette.component.html'
})
export class ColorPaletteComponent {
  @Input() accent: string = "#fff59d";
  @Input() accentDark: string = "#cabf45";
  @Input() accentLight: string = "#ffffcf";
  @Input() primary: string = "#3e2723";
  @Input() primaryDark: string = "#1b0000";
  @Input() primaryLight: string = "#6a4f4b";
  @Input() themeName = "Chocolate";

  constructor() {
  }
}
