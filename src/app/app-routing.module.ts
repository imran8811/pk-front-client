import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/global/global.module').then(module => module.GlobalModule)
  },
  {
    path: 'jeans-pants',
    loadChildren: () => import('./modules/jeans-pants/jeans-pants.module').then(module => module.JeansPantsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
