import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';

@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent implements OnInit {
    public users:User;
    public userdetails: User;
    user = [];
    friendRequests = [];
    requestStatus = 'Request';
    constructor(private auth: AuthenicateService, private friend: FriendsService) { }

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
}
