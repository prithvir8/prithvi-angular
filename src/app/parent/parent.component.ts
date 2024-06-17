import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  myname:string='Jeevan Konduru'
  myname_02:string='Prithvi'

  myplace='Hyderabad - Dilsukhnagar'
  myplace_02='Ameerpet-Hyderabad';

  myarrnames=['Sai','Bhanu','deepak','harsha','narendra'];
  myarrnames_02=['aadhya','Reethu','Shivani','Vasu'];

}
