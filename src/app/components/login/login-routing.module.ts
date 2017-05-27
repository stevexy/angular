import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginDialogComponent } from './login.component';
// import { tabmenuComponent } from '../profit/tabmenu.component'


const LoginRoutes: Routes = [
  {
    path: '',
    component: LoginDialogComponent,
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