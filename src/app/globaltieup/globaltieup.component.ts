import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-globaltieup',
  templateUrl: './globaltieup.component.html',
  styleUrls: ['./globaltieup.component.css']
})
export class GlobaltieupComponent {
@Input() cname:any
@Input() oaddress:any
@Input() myservices:any
}
