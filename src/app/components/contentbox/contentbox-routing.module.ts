import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { profitcheckComponent } from '../profit/profitcheck.component';
import { tabmenuComponent } from '../profit/tabmenu.component'


const profitRoutes: Routes = [
  {
    path: 'profit',
    component: tabmenuComponent,
    children: [
      {
        path: ':id',
        component: profitcheckComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(profitRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfitRoutingModule { }