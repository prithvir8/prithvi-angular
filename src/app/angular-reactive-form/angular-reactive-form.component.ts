import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-reactive-form',
  templateUrl: './angular-reactive-form.component.html',
  styleUrls: ['./angular-reactive-form.component.css']
})
export class AngularReactiveFormComponent {
allfields=new FormGroup({
  username:new FormControl("UserName",[Validators.required,this.customvalidation]),
  email:new FormControl("email",[Validators.required,Validators.email]),
})

customvalidation(con:any){
  let pattern=/[A-Z]{1}[a-z]{4,6}[0-9]{1}/;

  if(pattern.test(con.value)){
     return null
  }
  else {
    return {'noupper':true}
  }
}

}
