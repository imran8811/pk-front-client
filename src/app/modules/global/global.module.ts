import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { GlobalRoutingModule } from './global-routing.module';
import { NotifierModule } from 'angular-notifier';

import { COMPONENTS_LIST } from './global-routing.module';

@NgModule({
  declarations: [
    COMPONENTS_LIST
  ],
  imports: [
    GlobalRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule
  ]
})
export class GlobalModule { }
