import { Component } from '@angular/core';
import { UserlistService } from '../userlist.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent {

  constructor(private userservicedata:UserlistService){}
usersData:any[]=this.userservicedata.userslist
}
