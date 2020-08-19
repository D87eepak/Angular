import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityRoutingModule } from './quality-module-routing.module';
import { QualityComponent} from './quality-component/quality-component.component';


@NgModule({
  declarations: [QualityComponent],
  imports: [
    CommonModule,
    QualityRoutingModule
  ]
})
export class QualityModule { }
