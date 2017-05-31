import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
// import {AlertComponent} from '../alert/alert.component';
import { AlertShareModule } from '../alert/alert.shared.module';

import { AlertService, AuthenticationService, UserService } from '../_services/index';

import { fakeBackendProvider } from '../_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RegisterRoutingModule,
    AlertShareModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions]
})
export class RegisterModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/