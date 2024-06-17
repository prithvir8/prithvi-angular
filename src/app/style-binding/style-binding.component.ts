import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {

  textcolorvariable:string='blue';
  backgroundcolor:string='orange';

  mystyles:object={
  color:'Green',
  background:'Yellow',
  border:'solid 2px #f00'
}

hasError:boolean=true;

}
