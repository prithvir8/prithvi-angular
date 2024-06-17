import { Component } from '@angular/core';
import { GetapidataService } from '../getapidata.service';

@Component({
  selector: 'app-getapidata',
  templateUrl: './getapidata.component.html',
  styleUrls: ['./getapidata.component.css']
})
export class GetapidataComponent {

  printdata:any;

  constructor(private apidata:GetapidataService){

    apidata.userDetails().subscribe(
      (dataapi)=>{
        this.printdata=dataapi
      }
    )
  }

  
}
