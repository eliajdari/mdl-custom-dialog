/// <reference path="../node_modules/@types/node/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MdlModule} from "angular2-mdl";
import {DialogComponent} from "./components/dialog.component";
@NgModule({
    imports:      [ BrowserModule, MdlModule, CommonModule, ReactiveFormsModule, FormsModule ],
    declarations: [ AppComponent, DialogComponent ],
    entryComponents: [DialogComponent ],
    bootstrap:    [ AppComponent]
})
export class AppModule { }
