import { NgModule } from '@angular/core';

import { WomenLandingPagesRoutingModule } from './women-routing.module';
import { SharedModule } from '../shared/shared.module';

import { JeansManufacturersComponent } from './components/jeans-manufacturers/jeans-manufacturers.components';


@NgModule({
  declarations: [
    JeansManufacturersComponent
  ],
  imports: [
    WomenLandingPagesRoutingModule,
    SharedModule
  ]
})
export class WomenLandingPagesModule { }
