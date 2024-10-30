import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscRoutingModule } from './misc-routing.module';
import { ResourcesComponent } from './resources/resources.component';


@NgModule({
  declarations: [
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    MiscRoutingModule
  ]
})
export class MiscModule { }
