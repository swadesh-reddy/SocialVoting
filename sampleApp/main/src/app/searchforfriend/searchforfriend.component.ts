import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../authenicate.service';
import { FriendsService } from '../friends.service';
import { User } from '../user';

@Component({
    selector: 'app-searchforfriend',
    templateUrl: './searchforfriend.component.html',
    styleUrls: ['./searchforfriend.component.css']
})
export class SearchforfriendComponent implements OnInit {
    public users: User;
    public userdetails: User;
    user = [];
    friendRequests = [];
    requestStatus = 'Request';

    constructor(private auth: AuthenicateService, private friend: FriendsService) { }

    ngOnInit() {
        this.loadProfile();
        this.loadFriendRequests();
    }
    loadProfile() {
        this.auth.getAllProfiles().subscribe(data => {
            console.log(data);
            this.users = data;
         })
    }
    loadFriendRequests()
    {
        this.friend.getFriendRequests().subscribe(data => {
          
           for (var key in data) {
               console.log(data[key].username);
               this.auth.getProfileById({ 'username': data[key].username }).subscribe(data => {
                   console.log(data);
                   data.propic = 'http://localhost:3000/' + data.propic;
                   this.friendRequests.push(data);
                   console.log(this.friendRequests);
               })
            }
                });
    }
    onSearchFriend(username) {
        console.log(username)
        this.auth.getProfileById(username).subscribe(data => {
            console.log(data);
            this.userdetails = data;
            this.userdetails.propic = 'http://localhost:3000/' + this.userdetails.propic;
            console.log(this.userdetails);
        })
    }
    onRequest()
    {
        let friend = {
            'friend': this.userdetails.username,
            'status': false
        }
        console.log(friend);
      this.auth.sendRequest(friend).subscribe(data => {
            console.log(data);
            this.requestStatus = 'Request Sent';
                 })
    }
}
