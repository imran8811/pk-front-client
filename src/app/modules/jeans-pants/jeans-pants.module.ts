import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JeansPantsRoutingModule } from './jeans-pants-routing.module';
import { SharedModule } from '../shared/shared.module';

import { COMPONENT_LIST } from './components';

@NgModule({
  declarations: [COMPONENT_LIST],
  imports: [
    JeansPantsRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class JeansPantsModule { }
