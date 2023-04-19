import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
    selector: 'app-botao',
    templateUrl: './botao.components.html'
})

export class BotaoComponents{
    @Output()
    clickBotao = new EventEmitter();

    @Output()
    botaoMouseOver = new EventEmitter();

    @Input()
    conteudo = String;

    @Input()
    corFundo = String;

    
    botaoClick():void{
         console.log("botaoComponent -> botaoAppComponent");
         this.clickBotao.emit();          
    }
    mouseOver():void{
        console.log("MouseOver");
        this.botaoMouseOver.emit();
    }

    
}