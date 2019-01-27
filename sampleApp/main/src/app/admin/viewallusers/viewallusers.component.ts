import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { User } from '../../user';

@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent implements OnInit {
    public users:User;
    constructor(private auth: AuthenicateService) { }

  ngOnInit() {
      this.loadProfile()

  }
  loadProfile() {
      this.auth.getAllProfiles().subscribe(data => {
          console.log(data);
          this.users=data;
          console.log(this.users);
      })
  }
  makeAdmin(data) {
      let username = {username:data}
      this.auth.makeAdmin(username).subscribe(data => {
          console.log(data);
          this.loadProfile();
      })
  } 

}
