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
    friendStatus:any    
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
            for (var key in data) {
                console.log(key);
                if (data[key].username !== undefined) {
                    console.log(data[key].username);
                    this.auth.getProfileById({ 'username': data[key].username }).subscribe(data => {
                        console.log(data);
                        data.propic = 'https://publicserver.localtunnel.me/' + data.propic;
                        this.friendRequests.push(data);
                        console.log(this.friendRequests);
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
