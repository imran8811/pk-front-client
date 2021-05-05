import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/static-pages/static-pages.module').then(module => module.StaticPagesModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./modules/shop/shop.module').then(module => module.ShopModule)
  },
  {
    path: 'samples',
    loadChildren: () => import('./modules/samples/samples.module').then(module => module.SamplesModule)
  },
  {
    path: 'men',
    loadChildren: () => import('./modules/men-landing-pages/men.module').then(module => module.MenLandingPagesModule)
  },
  {
    path: 'women',
    loadChildren: () => import('./modules/women-landing-pages/women.module').then(module => module.WomenLandingPagesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
