import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureComponent } from './infrastructure-component/infrastructure-component.component';
import { InfraStructureRoutingModule } from './infrastructure-module-routing.module';
import { SharedModule } from '../shared-module/shared-module.module';
import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [InfrastructureComponent],
  imports: [
    CommonModule,
    InfraStructureRoutingModule,
    MaterialModule,
    SharedModule
  ],exports:[
    SharedModule
  ]
})
export class InfrastructureModule { }
