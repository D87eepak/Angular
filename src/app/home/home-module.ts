import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-component/home-component.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';   
import { SharedModule } from '../shared-module/shared-module.module';
import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, 
    BrowserModule,
    MaterialModule,
    SharedModule
  ],
  exports:[
    SharedModule
  ]
})
export class HomeModule { }
