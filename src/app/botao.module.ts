import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {  BotaoComponents } from "./botao.components";

@NgModule({
    declarations:[
      BotaoComponents
    ],
    imports:[
        CommonModule
    ],
    exports:[
        BotaoComponents
    ]
})

export class BotaoModule{
    
}