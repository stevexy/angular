import {
    NgModule,
    Component
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from './tab.component';
import { Tabset } from './tabs.component';
import { GamesubsComponent } from './gamesubs.component';
import { GamesubsRoutingModule } from './gamesubs-routing.module';
import { CheckedComp } from './checked.component';


@NgModule({
    declarations: [
        GamesubsComponent,
        Tabset,
        Tab,
        CheckedComp
    ],
    imports: [CommonModule, GamesubsRoutingModule],
    exports: [GamesubsComponent]
})
export class GamesubsModule { }