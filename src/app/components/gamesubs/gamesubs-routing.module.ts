import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Tabset } from './tabs.component';
import { GamesubsComponent } from './gamesubs.component';


const profitRoutes: Routes = [
  {
    path: '',
    component: GamesubsComponent
    // children: [
    //   { path: '', component: profitcheckComponent, }
    // ]
  },
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