import { Component, ViewChild } from '@angular/core';
import {ViewchildComponent} from './viewchild/viewchild.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mstyles:string='menustyles';

  @ViewChild(ViewchildComponent) mychildone:any
  test(){
    console.log(this.mychildone.passtoparent());
  }
  
  childdata:any;

}

