import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ProfitRoutingModule } from './profit-routing.module';
import { tabmenuComponent } from './tabmenu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfitRoutingModule
  ],
  declarations: [
    tabmenuComponent

  ],
  providers: [ ]
})
export class TabmenuModule {}