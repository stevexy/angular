import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../contentbox/contentbox.component';
// import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './main.component';

const mainRoutes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'contentbox', component: ContentComponent
      },
      {
        path: 'contentbox/:id', component: ContentComponent
      },
      {
        path: 'profixs',
        loadChildren: 'app/components/profit/tabmenu.module#TabmenuModule'
      },
      {
        path: 'gamesubs',
        loadChildren: 'app/components/gamesubs/gamesubs.module#GamesubsModule'
      }
    ]
  }
  // { path: 'contentbox', component: ContentComponent },
  // { path: 'contentbox/:id', component: ContentComponent },
  // { path: '', redirectTo: 'contentbox', pathMatch: 'full' },
  // {
  //   path: 'profixs',
  //   loadChildren: 'app/components/profit/tabmenu.module#TabmenuModule',
  //   // // //   // https://damienbod.com/2017/01/14/angular-2-lazy-loading-with-webpack-2/
  //   data: { preload: true }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
