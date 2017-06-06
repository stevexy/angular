import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/contentbox/contentbox.component';
import { AuthGuard } from './components/_guards/auth.guard';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadChildren: 'app/components/login/login.module#LoginDialogModule'
  },
  { 
    path: 'main', 
    loadChildren: 'app/components/main/main.module#MainModule',
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { 
    path: 'register', 
    loadChildren: 'app/components/register/register.module#RegisterModule'
  },
  // {
  //   path: 'test',
  //   loadChildren: 'app/components/testmodal/testmodal.module#TestModalModule'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
