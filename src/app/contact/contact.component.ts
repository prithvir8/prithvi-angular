import { Component } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
contact:string='ITproSkillSet-Dilsukhnagar';

constructor(private servicedata:UserdataService){}

mypdata=this.servicedata.mypersonaldata;

}
