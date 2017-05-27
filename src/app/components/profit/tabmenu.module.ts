import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ProfitRoutingModule } from './profit-routing.module';
import { tabmenuComponent } from './tabmenu.component';
import { profitcheckComponent} from './profitcheck.component';

import { TabmenuService } from './tabmenu.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfitRoutingModule
  ],
  declarations: [
    tabmenuComponent,
    profitcheckComponent
  ],
  providers: [ TabmenuService]
})
export class TabmenuModule {}