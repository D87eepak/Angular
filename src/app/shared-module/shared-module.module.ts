import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CarouselComponent } from './shared-component/carousel/carousel.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';   



@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatCarouselModule
  ],
  exports:[CarouselComponent]
})
export class SharedModule { }
