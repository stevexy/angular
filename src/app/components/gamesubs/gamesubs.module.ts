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
import { DetailComp } from './detail.component';
import { UploadComp } from './uploadcomp.component';
import { CheckedEditComp } from './checkededit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        GamesubsComponent,
        Tabset,
        Tab,
        CheckedComp,
        UncheckComp,
        CheckingComp,
        FailComp,
        UploadComp,
        DetailComp,
        CheckedEditComp,
    ],
    entryComponents: [CheckedComp,UncheckComp,CheckingComp,FailComp,UploadComp],
    imports: [CommonModule, GamesubsRoutingModule,FormsModule],
    exports: [GamesubsComponent]
})
export class GamesubsModule { }