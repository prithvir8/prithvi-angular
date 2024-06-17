import { Component } from '@angular/core';

@Component({
  selector: 'app-mypipes',
  templateUrl: './mypipes.component.html',
  styleUrls: ['./mypipes.component.css']
})
export class MypipesComponent {
institute:string='aiit';
course:string='Angular';
fee:number=20000;
companyName:string='ITproSkillSet';
val:number=1.55;

person1:object={
  'name':'Bhanu',
  'age':20,
  'place':'Hyderabad'
}

}
