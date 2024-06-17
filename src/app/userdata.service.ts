import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  mypersonaldata:any=['Jeevan Konduru','FullStack Developer','13 Years'];
  fruits:any=['Banana','cherry','Orange'];
  course:string='Angular-8Am';

  constructor() { }
}
