import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about-component/about.component';
import { AboutRoutingModule } from './about.routing.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule,
    SharedModule
  ],exports:[
    SharedModule
  ]
})
export class AboutModule { }
