import { Component } from '@angular/core';

@Component({
  selector: 'app-childcommunication',
  templateUrl: './childcommunication.component.html',
  styleUrls: ['./childcommunication.component.css']
})
export class ChildcommunicationComponent {
data:string="Hi am from Child Component Data..."
myfun(){
  return "Hello am from Function Data..."
}
test="Text Content here..."
}
