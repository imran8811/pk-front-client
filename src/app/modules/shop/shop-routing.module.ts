import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopDetailsComponent } from './components/details/details.components';
import { ShopListingComponent } from './components/listing/shop-listing.components';
import { JeansPantsComponent } from './components/jeans-pants/jeans-pants.components';

const routes: Routes = [
  { path: '', component: ShopListingComponent },
  { path: 'men/:category/:id', component: ShopDetailsComponent },
  { path: 'men/:category', component: JeansPantsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ShopRoutingModule { }

