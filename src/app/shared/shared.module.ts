// Library modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './modules/angular-material.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

// Modals

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgxMaterialTimepickerModule
  ],
  exports: [
    CommonModule,
    AngularMaterialModule,
    NgxMaterialTimepickerModule
  ]
})
export class SharedModule { }
