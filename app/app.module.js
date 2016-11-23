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
/// <reference path="../node_modules/@types/node/index.d.ts" />
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const app_component_1 = require('./app.component');
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
const angular2_mdl_1 = require("angular2-mdl");
const dialog_component_1 = require("./components/dialog.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, angular2_mdl_1.MdlModule, common_1.CommonModule, forms_1.ReactiveFormsModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, dialog_component_1.DialogComponent],
        entryComponents: [dialog_component_1.DialogComponent],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map