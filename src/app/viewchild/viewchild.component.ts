import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent {

  mydata:string='Hello am from Child component content here am using viewChild Decorator';

  passtoparent(){
    return this.mydata;
  }

}
