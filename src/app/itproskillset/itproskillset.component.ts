import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itproskillset',
  templateUrl: './itproskillset.component.html',
  styleUrls: ['./itproskillset.component.css']
})
export class ItproskillsetComponent {
@Input() inst:any
@Input() address:any
@Input() contact:any
}
