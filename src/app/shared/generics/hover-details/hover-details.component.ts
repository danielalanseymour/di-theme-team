import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-hover-details',
  styleUrls: ['./hover-details.component.scss'],
  templateUrl: './hover-details.component.html'
})
export class HoverDetailsComponent {
  @Input() detailContext: TemplateRef<any>; // The template that will be used when a row is selected
}
