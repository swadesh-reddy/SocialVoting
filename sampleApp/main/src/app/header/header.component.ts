import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../authenicate.service';
import { FriendsService } from '../friends.service';
import { FriendProfileComponent } from '../user/friend-profile/friend-profile.component';
import { User } from '../user';
import { Friend } from '../friend';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public users: User;
    public userdetails: User;
    user = [];
    friendRequests = [];
    requestStatus = 'Request';
    friendStatus: any 

    constructor(private auth: AuthenicateService, private router: Router, private friend: FriendsService) { }

    ngOnInit() {
       this.loadProfile();
    }
    loadProfile() {
        this.auth.getAllProfiles().subscribe(data => {

            this.users = data;
        })
        this.userdetails = this.auth.getProfile();
        this.userdetails.propic = 'https://publicserver.localtunnel.me/' + this.userdetails.propic;
    }
  openNav() {
          var sidenav = document.getElementById("mySidenav");
          if (sidenav.style.width == "350px") {
              sidenav.style.width = "0";
          }
          else {
              sidenav.style.width = "350px";
          }
  }
  onSearchFriend(username) {
      console.log(username)
      this.router.navigate(['/user/friendprofile/', username.username])
      this.friend.checkFriend(username).subscribe(data => {
          console.log(data);
          this.friendStatus = data;
      })
      let searchedContent = { "searchedContent": username.username }
      this.auth.saveToHistory(searchedContent).subscribe(data => { console.log(data) })
  }
}
