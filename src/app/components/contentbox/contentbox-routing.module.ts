import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { profitcheckComponent } from '../profit/profitcheck.component';


const contentRoutes: Routes = [
  {
    path: '',
    component: profitcheckComponent,
  }
];

@NgModule({
  imports: [    RouterModule.forChild(contentRoutes)  ],
  exports: [    RouterModule  ]
})
export class contentRoutingModule { }