import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
// import {AlertComponent} from '../alert/alert.component';
import { AlertShareModule } from '../alert/alert.shared.module';

import { AlertService, AuthenticationService, UserService } from '../_services/index';

import { fakeBackendProvider } from '../_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    HttpModule,
    AlertShareModule
  ],
  declarations: [
    LoginComponent,
    // AlertComponent
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions]
})
export class LoginDialogModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/