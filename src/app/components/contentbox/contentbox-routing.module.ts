import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { profitcheckComponent } from '../profit/profitcheck.component';
// import { tabmenuComponent } from '../profit/tabmenu.component'


const contentRoutes: Routes = [
  {
    path: '',
    component: profitcheckComponent,
    // children: [
    //   { path: '', component: profitcheckComponent }
    // ]
  }
];

@NgModule({
  imports: [    RouterModule.forChild(contentRoutes)  ],
  exports: [    RouterModule  ]
})
export class contentRoutingModule { }