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
const core_1 = require('@angular/core');
const angular2_mdl_1 = require("angular2-mdl");
const dialog_component_1 = require("./components/dialog.component");
let AppComponent = class AppComponent {
    constructor(dialogService, dialogOutletService, viewContainerRef) {
        this.dialogService = dialogService;
        this.dialogOutletService = dialogOutletService;
        this.viewContainerRef = viewContainerRef;
        this.checkbox1 = true;
        this.radioOption = '1';
        dialogOutletService.setDefaultViewContainerRef(viewContainerRef);
    }
    editDocument() {
        let pDialog = this.dialogService.showCustomDialog({
            component: dialog_component_1.DialogComponent,
            providers: [{ provide: dialog_component_1.TEST_VALUE, useValue: 'Just an example' }],
            isModal: true,
            clickOutsideToClose: true
        });
        pDialog.subscribe((dialogReference) => {
            console.log('dialog visible', dialogReference);
        });
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html'
    }), 
    __metadata('design:paramtypes', [angular2_mdl_1.MdlDialogService, angular2_mdl_1.MdlDialogOutletService, core_1.ViewContainerRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map