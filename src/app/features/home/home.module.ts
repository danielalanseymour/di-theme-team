import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { ColorPaletteComponent } from 'src/app/shared/generics/color-palette/color-palette.component';

@NgModule({
  declarations: [
    HomeComponent,
    ColorPaletteComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
