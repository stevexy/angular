import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register.component';
// import { tabmenuComponent } from '../profit/tabmenu.component'


const RegisterRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(RegisterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterRoutingModule { }