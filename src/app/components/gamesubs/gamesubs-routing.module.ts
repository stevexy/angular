import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Tabset } from './tabs.component';
import { GamesubsComponent } from './gamesubs.component';
import { DetailComp } from './detail.component';
import { CheckedEditComp } from './checkededit.component';


const profitRoutes: Routes = [
  {
    path: '',
    component: GamesubsComponent
  },
  {
    path: 'detail/:id', component: DetailComp
  },

  {
    path: 'detailedit/:id', component: CheckedEditComp
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
export class GamesubsRoutingModule { }