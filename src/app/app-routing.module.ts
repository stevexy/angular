import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/contentbox/contentbox.component';
// import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadChildren: 'app/components/login/login.module#LoginDialogModule',
  },
  { 
    path: 'main', 
    loadChildren: 'app/components/main/main.module#MainModule',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
