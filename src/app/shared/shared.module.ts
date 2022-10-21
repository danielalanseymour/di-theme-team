// Library modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './modules/angular-material.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

// Generics
import { HoverDetailsComponent } from './generics';
import { ColorPaletteComponent, ColorPaletteItemComponent } from './generics/color-palette';

@NgModule({
  declarations: [
    ColorPaletteComponent,
    ColorPaletteItemComponent,
    HoverDetailsComponent,
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    NgxMaterialTimepickerModule
  ],
  exports: [
    AngularMaterialModule,
    ColorPaletteComponent,
    ColorPaletteItemComponent,
    CommonModule,
    HoverDetailsComponent,
    NgxMaterialTimepickerModule,
  ]
})
export class SharedModule { }
