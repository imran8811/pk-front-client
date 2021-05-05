import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplesListingComponent } from './components/listing/samples-listing.components';
import { SamplesDetailsComponent } from './components/details/details.components';

const routes: Routes = [
  { path: '', component: SamplesListingComponent },
  { path: 'details/:id', component: SamplesDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class SamplesRoutingModule { }

