import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  AboutComponent,
  FactoryComponent,
  BlogComponent,
  ContactComponent,
  MenListingComponent,
  MenDetailsComponent,
  OrderReceivedComponent
} from './components';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'factory', component: FactoryComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: ':dept/:category', component: MenListingComponent },
  { path: ':dept/:category/:styleNo', component: MenDetailsComponent },
  { path: 'order-received', component: OrderReceivedComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: []
})

export class GlobalRoutingModule {}

export const COMPONENTS_LIST = [
  HomeComponent,
  AboutComponent,
  FactoryComponent,
  BlogComponent,
  ContactComponent,
  MenListingComponent,
  MenDetailsComponent,
  OrderReceivedComponent
]
