import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
// import { tabmenuComponent } from '../profit/tabmenu.component'


const LoginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // children: [
    //   { path: '', component: profitcheckComponent }
    // ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(LoginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }