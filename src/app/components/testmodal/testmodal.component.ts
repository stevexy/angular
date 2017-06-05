import { Component } from "@angular/core";


@Component({
    selector: "app",
    template: `
<div class="container">

    <!-- first modal: modal with custom header, content and footer -->
    <div class="row">
        <button (click)="firstModal.open()">modal with custom header content and footer</button>
        <modal #firstModal>
            <modal-headerx>
                <h1>I am first modal</h1>
            </modal-headerx>
            <modal-contentx>
                This modal has its own header, content and footer.
            </modal-contentx>
            <modal-footerx>
                <button class="btn btn-primary" (click)="firstModal.close()">okay!</button>
            </modal-footerx>
        </modal>
    </div>
    
    <!-- second modal: disable close button -->
    <div class="row">
        <button (click)="secondModal.open()">modal without close button</button>
        <modal #secondModal [hideCloseButton]="true">
            <modal-headerx>
                <h1>I am second modal</h1>
            </modal-headerx>
            <modal-contentx>
                This modal does not have close button.
            </modal-contentx>
            <modal-footerx>
                <button class="btn btn-primary" (click)="secondModal.close()">okay!</button>
            </modal-footerx>
        </modal>
    </div>
    
    <!-- third modal: disable close button -->
    <div class="row">
        <button (click)="thirdModal.open()">modal that cannot be simply closed</button>
        <modal #thirdModal [closeOnEscape]="false" [closeOnOutsideClick]="false">
            <modal-headerx>
                <h1>I am third modal</h1>
            </modal-headerx>
            <modal-contentx>
                You cannot close this modal by pressing "ESC" button or clicking outside of the modal.
            </modal-contentx>
            <modal-footerx>
                <button class="btn btn-primary" (click)="thirdModal.close()">okay!</button>
            </modal-footerx>
        </modal>
    </div>
    
    <!-- forth modal: this modal has default title and cancle button -->
    <div class="row">
        <button (click)="forthModal.open()">modal that has title and cancel button</button>
        <modal #forthModal title="I am forth modal" cancelButtonLabel="close it">
            <modal-contentx>
                You can simply use "title" attribute to provide a modal default header.<br/>
                Also you can add default cancel button by providing a label to it.
            </modal-contentx>
        </modal>
    </div>
    
    <!-- fifth modal: this modal uses extra "large class" -->
    <div class="row">
        <button (click)="fifthModal.open()">large modal</button>
        <modal #fifthModal title="I am fifth modal" cancelButtonLabel="close it" modalClass="modal-lg">
            <modal-contentx>
                Very large modal.
            </modal-contentx>
        </modal>
    </div>
    
    <!-- sixth modal: this modal uses extra "small class" -->
    <div class="row">
        <button (click)="sixthModal.open()">small modal</button>
        <modal #sixthModal title="I am sixth modal" cancelButtonLabel="close it" modalClass="modal-sm">
            <modal-contentx>
                Very small modal.
            </modal-contentx>
        </modal>
    </div>
    
    <!-- seventh modal: this modal can listen close event -->
    <div class="row">
        <button (click)="seventhModal.open()">it opens first modal after you close it</button>
        <modal #seventhModal title="I am seventh modal" cancelButtonLabel="close it" (onClose)="firstModal.open()">
            <modal-contentx>
                Now try to close it and it will open you first modal.
            </modal-contentx>
        </modal>
    </div>
    
    <!-- eighth modal: this modal can listen close event -->
    <div class="row">
        <button (click)="eighthModal.open()">it opens first modal right after you open it</button>
        <modal #eighthModal title="I am eighth modal" cancelButtonLabel="close it" (onOpen)="firstModal.open()">
            <modal-contentx>
                This modal opened first modal right after you opened it.
            </modal-contentx>
        </modal>
    </div>
    
    <!-- ninth modal: this modal can do something after you click submit button -->
    <div class="row">
        <button (click)="ninthModal.open()">it opens first modal after you click submit button</button>
        <modal #ninthModal title="I am ninth modal" submitButtonLabel="submit" (onSubmit)="firstModal.open()">
            <modal-contentx>
                This modal has a submit button with your custom label. Also it can make an action after you
                click that submit button. Here it will open you first modal after you click submit.
            </modal-contentx>
        </modal>
    </div>
    
</div>
`
})
export class TestModuleComponent {
}