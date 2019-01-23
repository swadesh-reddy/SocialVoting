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
    public users: User;
    public userdetails: User;
    user = [];
    friendRequests = [];
    requestStatus = 'Request';
    friendStatus: any;
    nodata: String;
    constructor(private auth: AuthenicateService, private friend: FriendsService) {
    }

    ngOnInit() {
            this.loadFriendRequests();
    }
   
    loadFriendRequests()
    {
        let status={status:false}
        this.friend.getFriendRequests(status).subscribe(data => {
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
    
   

    acceptFriendRequest(friend)
    {
        let accept = {friend: friend, status:true}
        this.friend.handleRequest('acceptFriend', accept).subscribe(data=>{})
    }
    deleteFriendRequest(friend)
    {
        let accept = {friend: friend, status:true}
        this.friend.handleRequest('deleteFriend', accept).subscribe(data=>{})
    }
}
