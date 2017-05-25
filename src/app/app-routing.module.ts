import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent }   from './components/contentbox/contentbox.component';

const routes: Routes = [
  { path: 'contentbox/:id',  component: ContentComponent },
  { path: 'contentbox',  component: ContentComponent },
  // { path: '', redirectTo: '/contentbox', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
