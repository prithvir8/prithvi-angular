import { Component } from '@angular/core';

@Component({
  selector: 'app-attributedirective',
  templateUrl: './attributedirective.component.html',
  styleUrls: ['./attributedirective.component.css']
})
export class AttributedirectiveComponent {
checkcondition:string="mycondition";
condition2:any='successstatus';

checkStatus:boolean=true;

condition:string='Hello';

}
