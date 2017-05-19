import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidemenuDemoComponent } from './sidemenu.component';
import { SideMenuComponent } from './components/sidemenu/sidemenu';
//import { CapitalFirstPipe } from './components/sidemenu/capital-first-letter';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    SidemenuDemoComponent,
    SideMenuComponent,
    // CapitalFirstPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
