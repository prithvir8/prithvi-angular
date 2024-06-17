import { Component } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent {

person:object={
'name':'Sree Aadhya',
'gender':'f',
'name2':'Shiva Sai'
}

message:string='Good Morning';

content:string='Hello am from custom pipe content here...'
}
