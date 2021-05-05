import { NgModule } from '@angular/core';

import { MenLandingPagesRoutingModule } from './men-routing.module';
import { SharedModule } from '../shared/shared.module';

import { JeansManufacturersComponent } from './components/jeans-manufacturers/jeans-manufacturers.components';


@NgModule({
  declarations: [
    JeansManufacturersComponent
  ],
  imports: [
    MenLandingPagesRoutingModule,
    SharedModule
  ]
})
export class MenLandingPagesModule { }
