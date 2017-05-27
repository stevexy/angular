import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/contentbox/contentbox.component';

const routes: Routes = [
  { path: 'contentbox', component: ContentComponent  },
  { path: 'contentbox/:id', component: ContentComponent },
  { path: '', redirectTo: '/contentbox', pathMatch: 'full' },
  
  { 
    path: 'login', 
    loadChildren: 'app/components/login/login.module#LoginDialogModule',
  },
  {
     path: 'profixs',
     loadChildren: 'app/components/profit/tabmenu.module#TabmenuModule',
  // //   // https://damienbod.com/2017/01/14/angular-2-lazy-loading-with-webpack-2/
     data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
