import {Component, ViewContainerRef, Inject} from '@angular/core';
import {MdlDialogService, MdlDialogReference, MdlDialogOutletService} from "angular2-mdl";
import {DialogComponent, TEST_VALUE} from "./components/dialog.component";
import {Observable} from 'rxjs/Rx';
import {obj} from "./obj";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    constructor(
                private dialogService: MdlDialogService,
                private dialogOutletService: MdlDialogOutletService,
                private viewContainerRef: ViewContainerRef){
        dialogOutletService.setDefaultViewContainerRef(viewContainerRef);

    }

    public checkbox1 = true;
    public radioOption = '1';
    public editDocument() {

        let pDialog = this.dialogService.showCustomDialog({
            component: DialogComponent,
            providers: [{provide: TEST_VALUE, useValue: 'Just an example'}],
            isModal: true,
            clickOutsideToClose: true
        });
        pDialog.subscribe( (dialogReference: MdlDialogReference) => {
            console.log('dialog visible', dialogReference);
        });
    }

}