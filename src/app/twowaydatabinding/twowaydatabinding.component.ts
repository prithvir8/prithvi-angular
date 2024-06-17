import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.css']
})
export class TwowaydatabindingComponent {

  coursename:any='Angular';


  updatecourse(){
    this.coursename='FullStack Angular Development'
  }

}
