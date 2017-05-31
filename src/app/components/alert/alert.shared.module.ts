import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AlertComponent } from './alert.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertComponent
    
    // CapitalFirstPipe
  ],
  providers: [],
  exports:[
    AlertComponent
  ]
})
export class AlertShareModule { }
