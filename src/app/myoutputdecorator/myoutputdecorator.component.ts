import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-myoutputdecorator',
  templateUrl: './myoutputdecorator.component.html',
  styleUrls: ['./myoutputdecorator.component.css']
})
export class MyoutputdecoratorComponent {

  @Output() customeve=new EventEmitter();

  message:any='Pass data from child to Parent... hello am from child info..';

  passdatatoparent(){
    this.customeve.emit(this.message);
  }

}
