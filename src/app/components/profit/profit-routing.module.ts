import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { profitcheckComponent } from './profitcheck.component';
import { tabmenuComponent } from './tabmenu.component'



const profitRoutes: Routes = [
  // {
  //   path: '',
  //   component: tabmenuComponent,
  //   children: [
  //     // { path: ':id', component: profitcheckComponent, },
  //     { path: '', component: profitcheckComponent, }
  //   ]
  // },
  {
    path: 'formgame/:id',
    component: tabmenuComponent,
    children: [
      // { path: ':id', component: profitcheckComponent, },
      { path: '', component: profitcheckComponent, }
    ]
  },
  {path: '',   redirectTo: 'formgame/1', pathMatch: 'full'}
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