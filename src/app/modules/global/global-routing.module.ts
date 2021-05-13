import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.components';
import { AboutComponent } from './components/about/about.components';
import { FactoryComponent } from './components/factory/factory.components';
import { BlogComponent } from './components/blog/blog.components';
import { ContactComponent } from './components/contact/contact.components';
import { LoginComponent } from './components/login/login.components';
import { SignupComponent } from './components/signup/signup.components';
import { MenJeansPantsComponent, MenJeansShirtsComponent } from './components/men';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'factory', component: FactoryComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'men/:category/:id', component: MenJeansPantsComponent }
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
  LoginComponent,
  SignupComponent
]
