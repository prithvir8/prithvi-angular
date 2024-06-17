import { Component } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-global-data',
  templateUrl: './global-data.component.html',
  styleUrls: ['./global-data.component.css']
})
export class GlobalDataComponent {

  constructor(private myglobaldata:UserdataService){}
  
  mypdata=this.myglobaldata.mypersonaldata;
  myfruits=this.myglobaldata.fruits;
  course=this.myglobaldata.course;
}
