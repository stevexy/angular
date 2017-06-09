import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';


import { ContentComponent }    from './contentbox.component';
import { contentRoutingModule } from './contentbox-routing.module';

@NgModule({
  imports: [
    CommonModule,
    contentRoutingModule
  ],
  declarations: [
    ContentComponent
  ],
  providers: [  ]
})
export class ContentBoxModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/