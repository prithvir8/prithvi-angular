import { Component, OnInit } from '@angular/core';
import { UserlistService } from '../userlist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private usd:UserlistService, private route:ActivatedRoute){}

  cuser:any;
  ngOnInit(): void {
      this.route.paramMap.subscribe(
        parms=>{
          let userid:any=parms.get('id');
          this.cuser=this.usd.userslist.find(
            u=>u.id==userid
          )
        }
      )
  }
}
