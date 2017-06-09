import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ProfitRoutingModule } from './profit-routing.module';
import { tabmenuComponent } from './tabmenu.component';
import { profitcheckComponent} from './profitcheck.component';

import { TabmenuService } from './tabmenu.service';

@NgModule({
  imports: [
    CommonModule,
    ProfitRoutingModule
  ],
  declarations: [
    tabmenuComponent,
    profitcheckComponent
  ],
  providers: [ TabmenuService]
})
export class TabmenuModule {}