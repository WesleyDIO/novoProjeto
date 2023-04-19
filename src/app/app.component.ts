import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  appBotaoClick(): void{
    console.log("appBotaoClick")
  }
  appMouseOver():void{
    console.log("appMouseOver")
  }
  
}
