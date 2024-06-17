import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

  counter:number=0;

  increase(){
    this.counter+=1;
  }

  decrease(){
    this.counter-=1;
  }

}
