import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-templatereference',
  templateUrl: './templatereference.component.html',
  styleUrls: ['./templatereference.component.css']
})
export class TemplatereferenceComponent {

  logInputValue(inputElement:HTMLInputElement):void{
    console.log(inputElement.value)
  }


  submitForm(form:NgForm):void{
    console.log(form.value);
    console.log(form.valid);
  }

}
