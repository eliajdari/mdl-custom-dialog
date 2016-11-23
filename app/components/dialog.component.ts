import {
    Component,
    HostListener,
    OnInit,
    Inject,
    OpaqueToken
} from '@angular/core';
import { MdlDialogReference} from "angular2-mdl";

export const TEST_VALUE = new OpaqueToken('test value');

@Component({
    selector: 'login-dialog',
    templateUrl: 'app/components/dialog.component.html',
    styles: [
        `
     .status-bar {
         text-align: center;
     }
    `
    ]
})
export class DialogComponent implements OnInit {

    public processingLogin = false;
    public statusMessage = '';

    constructor(
        private dialog: MdlDialogReference,
        @Inject( TEST_VALUE) testValue: string) {

        console.log(`injected test value: ${testValue}`);

        // just if you want to be informed if the dialog is hidden
        this.dialog.onHide().subscribe( () => console.log('login dialog hidden') );

        this.dialog.onVisible().subscribe( () => {
            console.log('set focus');
        });

    }

    public ngOnInit() {

    }
    public login() {
    console.log("1");
    }




}