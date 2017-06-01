import { NgModule }       from '@angular/core';
import { CommonModule } from "@angular/common";
import { Modal, ModalModule } from "../modal/modal.module";
import { TestModuleComponent } from "./testmodal.component";
import { TestModalRoutingModule } from './testmodal-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ModalModule,
        TestModalRoutingModule
    ],
    declarations: [
        TestModuleComponent
    ]
})

export class TestModalModule { }