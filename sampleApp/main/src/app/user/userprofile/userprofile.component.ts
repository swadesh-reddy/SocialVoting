import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { User } from '../../user';
import { FriendsService } from '../../friends.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

    user: User;
    image: any;
    friends = [];
    constructor(private auth: AuthenicateService, private friend: FriendsService) { }

    ngOnInit() {
        this.loadProfile();
        this.loadFriendRequests();
    }
    loadProfile() {
        var data = this.auth.getProfile();
        this.user = data;
          this.user.propic = 'http://localhost:3000/' + this.user.propic;
          console.log(this.user);

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
                        data.propic = 'http://localhost:3000/' + data.propic;
                        this.friends.push(data);
                        console.log(this.friends);
                    })
                }
            }
        });
    }
}
