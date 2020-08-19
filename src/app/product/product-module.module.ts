import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product-component/product-component.component';
import { ProductRoutingModule } from './product-module-routing.module';
import { MaterialModule } from '../material.module';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [ProductComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule
  ]
})
export class ProductModule { }
