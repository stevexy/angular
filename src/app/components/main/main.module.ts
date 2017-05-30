import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MainComponent } from './main.component';
import { SideNavComponent } from '../sidenav/sidenav.component';
import { ContentComponent } from '../contentbox/contentbox.component';

import { MainRoutingModule } from './main-routing.module';


@NgModule({
  imports: [
    MainRoutingModule,
    CommonModule
  ],
  declarations: [
    MainComponent,
    SideNavComponent,
    ContentComponent,
    
    // CapitalFirstPipe
  ],
  providers: [],
})
export class MainModule { }
