import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-ifdirective',
  templateUrl: './ng-ifdirective.component.html',
  styleUrls: ['./ng-ifdirective.component.css']
})
export class NgIfdirectiveComponent {

  show:boolean=true;

  isVisible:boolean=false;


  courses:any=['JavaScript','Angular','React','Node','ExpressJS']

  togglecontent(){
    this.isVisible=!this.isVisible
  }

}
