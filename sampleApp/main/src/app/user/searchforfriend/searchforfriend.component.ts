import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';
import { Friend } from '../../friend';
import { Recommend } from '../../recommend';

@Component({
    selector: 'app-searchforfriend',
    templateUrl: './searchforfriend.component.html',
    styleUrls: ['./searchforfriend.component.css']
})
export class SearchforfriendComponent implements OnInit {
    public userdetails: User;
    public user: User;
    public users: User;
    friendObject: Friend;
    friendStatus: Boolean;
    username: String;
    userStatus: Boolean;
   public usernotFound: Boolean;

    constructor(private auth: AuthenicateService, private friend: FriendsService) {
    }
    
    ngOnInit() {
        this.loadProfile();
        this.loadAllProfiles();
    }
    loadAllProfiles() {
        this.auth.getAllProfiles().subscribe(data => {
            this.users = data;
        })
    }
    loadProfile() {
        var data = this.auth.getProfile();
        this.user = data;
        this.user.propic = 'http://localhost:3000/' + this.user.propic;
        console.log(this.user);

    }
    onSearchFriend(username) {
        this.auth.getProfileById(username).subscribe(userdata => {
            console.log(userdata);
            if (userdata) {
             this.usernotFound = false;
             this.userdetails = userdata;
             if (this.userdetails.username == this.user.username) {
                 this.userStatus = true;
             } else { this.userStatus = false;}
            this.userdetails.propic = 'http://localhost:3000/' + this.userdetails.propic;
            this.checkFriend(username);
            let searchedContent = { "searchedContent": username.username }
            this.auth.saveToHistory(searchedContent).subscribe(data => { console.log(data) })
            } else {
                this.usernotFound = true;
            }
        })
  }
    checkFriend(username) {
        this.friend.checkFriend(username).subscribe(data => {
            if (data == null) {
                this.friendStatus = null;
            } else {
            this.friendObject = data;
           this.friendStatus = this.friendObject.status;
            }
                      console.log(this.friendStatus);
        })
    }
    onRequest() {
        this.friendStatus = false;
        console.log(this.friendStatus);
        let friend = {
            'friend': this.userdetails.username,
            'status': false
        }
        this.auth.sendRequest(friend).subscribe(data => {
            console.log(data);
        })
        let notification = {
            'friendname': this.userdetails.username,
            'productname': ''
        }
        this.friend.addNotification(notification).subscribe(data => {
            console.log(data);
        })
    }
}
