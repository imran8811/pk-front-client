import { NgModule } from '@angular/core';

import { SamplesRoutingModule } from './samples-routing.module';
import { SharedModule } from '../shared/shared.module';

import { SamplesListingComponent } from './components/listing/samples-listing.components';
import { SamplesDetailsComponent } from './components/details/details.components';

@NgModule({
  declarations: [
    SamplesListingComponent,
    SamplesDetailsComponent
  ],
  imports: [
    SamplesRoutingModule,
    SharedModule
  ]
})
export class SamplesModule { }
