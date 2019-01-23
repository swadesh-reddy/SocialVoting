import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';

@Component({
  selector: 'app-view-all-my-friends',
  templateUrl: './view-all-my-friends.component.html',
  styleUrls: ['./view-all-my-friends.component.css']
})
export class ViewAllMyFriendsComponent implements OnInit {
    friends = [];

    constructor(private auth: AuthenicateService, private friend: FriendsService    ) { }

    ngOnInit() {
        this.loadFriendRequests();  
  }
  loadFriendRequests() {
      let status = { status: true }
      this.friend.getFriendRequests(status).subscribe(data => {
          console.log(data);
          for (var key in data) {
              console.log(key);
              if (data[key].username !== undefined) {
                  console.log(data[key].username);
                  this.auth.getProfileById({ 'username': data[key].username }).subscribe(data => {
                      console.log(data);
                      data.propic = 'https://publicserver.localtunnel.me/' + data.propic;
                      this.friends.push(data);
                      console.log(this.friends);
                  })
              }
          }
      });
  }
}
