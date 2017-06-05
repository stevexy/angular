import {
    NgModule,
    Component
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from './tab.component';
import { Tabset } from './tabs.component';
import { GamesubsComponent } from './gamesubs.component';
import { GamesubsRoutingModule } from './gamesubs-routing.module';


@NgModule({
    declarations: [
        GamesubsComponent,
        Tabset,
        Tab
    ],
    imports: [CommonModule, GamesubsRoutingModule],
    exports: [GamesubsComponent]
})
export class GamesubsModule { }