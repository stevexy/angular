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
import { UncheckComp } from './unchecked.component';
import { CheckingComp } from './checking.component';
import { FailComp } from './failed.component';

import { UploadComp } from './uploadcomp.component';


@NgModule({
    declarations: [
        GamesubsComponent,
        Tabset,
        Tab,
        CheckedComp,
        UncheckComp,
        CheckingComp,
        FailComp,
        UploadComp
    ],
    entryComponents: [CheckedComp,UncheckComp,CheckingComp,FailComp,UploadComp],
    imports: [CommonModule, GamesubsRoutingModule],
    exports: [GamesubsComponent]
})
export class GamesubsModule { }