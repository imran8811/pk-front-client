import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SwiperModule } from 'swiper/angular';
import { SharedRoutingModule } from './shared-routing.module';
import { NotifierModule } from 'angular-notifier';

import {
  HeaderComponent,
  FooterComponent,
  BannerSliderComponent,
  FilterSidebarComponent,
  LoginComponent,
  SignupComponent,
  ModalComponent
} from './components'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerSliderComponent,
    FilterSidebarComponent,
    LoginComponent,
    SignupComponent,
    ModalComponent
  ],
  imports: [
    SharedRoutingModule,
    CommonModule,
    SwiperModule,
    NotifierModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    BannerSliderComponent,
    FilterSidebarComponent,
    LoginComponent,
    SignupComponent,
    ModalComponent
  ]
})

export class SharedModule { }
