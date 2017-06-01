import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestModuleComponent } from './testmodal.component';


const TestModalRoutes: Routes = [
  {
    path: '',
    component: TestModuleComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(TestModalRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TestModalRoutingModule { }