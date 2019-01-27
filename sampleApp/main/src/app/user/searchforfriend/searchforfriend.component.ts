import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';
import { Friend } from '../../friend';

@Component({
    selector: 'app-searchforfriend',
    templateUrl: './searchforfriend.component.html',
    styleUrls: ['./searchforfriend.component.css']
})
export class SearchforfriendComponent implements OnInit {
    public userdetails: User;
    public user:User;
     friendStatus: any;
    
    constructor(private auth: AuthenicateService, private friend: FriendsService) {
    }

    ngOnInit() {
        this.loadProfile();
        }
    loadProfile() {
        var data = this.auth.getProfile();
        this.user = data;
        this.user.propic = 'https://publicserver.localtunnel.me/' + this.user.propic;
        console.log(this.user);

    }
    onSearchFriend(username) {
        this.auth.getProfileById(username).subscribe(userdata => {
            console.log(userdata);
            this.userdetails = userdata;
            this.userdetails.propic = 'https://publicserver.localtunnel.me/' + this.userdetails.propic;
        })
        this.checkFriend(username);
        let searchedContent = { "searchedContent": username.username }
        this.auth.saveToHistory(searchedContent).subscribe(data => { console.log(data) })
    }
    checkFriend(username) {
        this.friend.checkFriend(username).subscribe(data => {
            console.log(data);
            this.friendStatus = data;
        })
    }
    onRequest() {
        this.checkFriend(this.userdetails.username);
        let friend = {
            'friend': this.userdetails.username,
            'status': false
        }
        console.log(friend);
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
