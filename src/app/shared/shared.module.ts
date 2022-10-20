// Library modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './modules/angular-material.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

// Generics
import { HoverDetailsComponent } from './generics';

@NgModule({
  declarations: [
    HoverDetailsComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    NgxMaterialTimepickerModule
  ],
  exports: [
    AngularMaterialModule,
    CommonModule,
    HoverDetailsComponent,
    NgxMaterialTimepickerModule
  ]
})
export class SharedModule { }
