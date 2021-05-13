import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JeansManufacturersComponent } from './components/jeans-manufacturers/jeans-manufacturers.components';
import { WholesaleJeansBulkComponent } from './components/wholesale-jeans-bulk/wholesale-jeans-bulk.components';

const routes: Routes = [
  { path: 'jeans-manufacturers', component: JeansManufacturersComponent },
  { path: 'wholesale-jeans-bulk', component: WholesaleJeansBulkComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class JeansPantsRoutingModule { }

