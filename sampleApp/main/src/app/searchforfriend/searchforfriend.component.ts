import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../authenicate.service';
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
    requestStatus = 'Request';

    constructor(private auth: AuthenicateService) { }

    ngOnInit() {
        this.loadProfile();
    }
    loadProfile() {
        this.auth.getAllProfiles().subscribe(data => {
            console.log(data);
            this.users = data;
            //this.user.push(data);
            //console.log(data);
        })
    }
    onSearchFriend(email) {
        console.log(email)
        this.auth.getProfileById(email).subscribe(data => {
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
