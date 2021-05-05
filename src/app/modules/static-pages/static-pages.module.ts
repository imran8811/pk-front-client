import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'

import { SharedModule } from '../shared/shared.module';
import { StaticPagesRoutingModule } from './static-pages-routing.module';

import { COMPONENTS_LIST } from './static-pages-routing.module';

@NgModule({
  declarations: [
    COMPONENTS_LIST
  ],
  imports: [
    StaticPagesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ]
})
export class StaticPagesModule { }
