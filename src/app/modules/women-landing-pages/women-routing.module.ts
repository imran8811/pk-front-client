import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JeansManufacturersComponent } from './components/jeans-manufacturers/jeans-manufacturers.components';

const routes: Routes = [
  { path: 'jeans-manufacturers', component: JeansManufacturersComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class WomenLandingPagesRoutingModule { }

