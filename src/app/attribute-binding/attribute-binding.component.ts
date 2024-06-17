import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})
export class AttributeBindingComponent {
path:string='./assets/cute-tiger.png';
isDisabled:boolean=true;
isHidden:boolean=false;
customalignment:any='center'
}
