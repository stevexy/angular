import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/sidenav/sidenav.component';
import { ContentComponent } from './components/contentbox/contentbox.component';
import { AppRoutingModule } from './app-routing.module';
// import { TabmenuModule } from './components/profit/tabmenu.module';
// import { ContentBoxModule } from './components/contentbox/contentbox.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // TabmenuModule,
    // ContentBoxModule
  ],
  declarations: [
    AppComponent,
    SideNavComponent,
    ContentComponent
    // CapitalFirstPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
