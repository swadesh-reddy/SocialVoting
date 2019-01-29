import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';
import { Friend } from '../../friend';

@Component({
  selector: 'app-load-friend-requests',
  templateUrl: './load-friend-requests.component.html',
  styleUrls: ['./load-friend-requests.component.css']
})
export class LoadFriendRequestsComponent implements OnInit {

    public users: User;
    public userdetails: User;
    user: User;
    friendRequests = [];
    requestStatus = 'Request';
    friendStatus: any;
    nodata: String;
    constructor(private auth: AuthenicateService, private friend: FriendsService) {
    }

    ngOnInit() {
        this.loadProfile();
        this.loadFriendRequests(this.user.username);
    }
    loadProfile() {
        var data = this.auth.getProfile();
        this.user = data;
        this.user.propic = 'http://localhost:3000/' + this.user.propic;
        console.log(this.user);

    }
    loadFriendRequests(username) {
        let status = { status: false, username: username }
        this.friend.getAllFriends(status).subscribe(data => {
            console.log(data);
            if (this.friendRequests.length == 0) {
                this.nodata = 'No Friend Requests';
                console.log(this.nodata)
            } else { this.nodata = ''; }
            for (var key in data) {
                if (data[key].username !== undefined) {
                    this.auth.getProfileById({ 'username': data[key].username }).subscribe(data => {
                        console.log(data);
                        data.propic = 'http://localhost:3000/' + data.propic;
                        this.friendRequests.push(data);
                    })
                }
            }
        });
    }
    cleanFriendRequest(friendname) {
        for (var index = 0; index < this.friendRequests.length; index++) {
            console.log(this.friendRequests[index].username);
            if (this.friendRequests[index].username == friendname) {
                this.friendRequests.splice(index, 1)
            }
        }
    }


    acceptFriendRequest(friend) {
        this.cleanFriendRequest(friend)
        let accept = { friend: friend, status: true }
        this.friend.handleRequest('acceptFriend', accept).subscribe(data => { 
        })
    }
    deleteFriendRequest(friend) {
        this.cleanFriendRequest(friend);
        let accept = { friend: friend, status: true }
        this.friend.handleRequest('deleteFriend', accept).subscribe(data => {
            console.log(data);})
    }
}
