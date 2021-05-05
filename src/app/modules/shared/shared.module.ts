import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';
import { SharedRoutingModule } from './shared-routing.module';
import { NotifierModule } from 'angular-notifier';


import {
  HeaderComponent,
  FooterComponent,
  BannerSliderComponent,
  FilterSidebarComponent
} from './components'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerSliderComponent,
    FilterSidebarComponent
  ],
  imports: [
    SharedRoutingModule,
    CommonModule,
    SwiperModule,
    NotifierModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    BannerSliderComponent,
    FilterSidebarComponent
  ]
})

export class SharedModule { }
