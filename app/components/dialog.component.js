"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require('@angular/core');
const angular2_mdl_1 = require("angular2-mdl");
exports.TEST_VALUE = new core_1.OpaqueToken('test value');
let DialogComponent = class DialogComponent {
    constructor(dialog, testValue) {
        this.dialog = dialog;
        this.processingLogin = false;
        this.statusMessage = '';
        console.log(`injected test value: ${testValue}`);
        // just if you want to be informed if the dialog is hidden
        this.dialog.onHide().subscribe(() => console.log('login dialog hidden'));
        this.dialog.onVisible().subscribe(() => {
            console.log('set focus');
        });
    }
    ngOnInit() {
    }
    login() {
    }
};
DialogComponent = __decorate([
    core_1.Component({
        selector: 'login-dialog',
        templateUrl: 'app/components/dialog.component.html',
        styles: [
            `
     .status-bar {
         text-align: center;
     }
    `
        ]
    }),
    __param(1, core_1.Inject(exports.TEST_VALUE)), 
    __metadata('design:paramtypes', [angular2_mdl_1.MdlDialogReference, String])
], DialogComponent);
exports.DialogComponent = DialogComponent;
//# sourceMappingURL=dialog.component.js.map