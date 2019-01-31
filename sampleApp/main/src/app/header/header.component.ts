import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../authenicate.service';
import { FriendsService } from '../friends.service';
import { FriendProfileComponent } from '../user/friend-profile/friend-profile.component';
import { User } from '../user';
import { Friend } from '../friend';
import { Notification } from '../notification';
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
    notifications: Notification;
    notificationCounter: any;
    constructor(private auth: AuthenicateService, private router: Router, private friend: FriendsService) { }

    ngOnInit() {
        this.loadNotifications();
    }
    
  openNav() {
          var sidenav = document.getElementById("mySidenav");
          if (sidenav.style.width == "300px") {
              sidenav.style.width = "0";
          }
          else {
              sidenav.style.width = "300px";
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
    loadNotifications(){
     this.friend.getNotifications().subscribe(data => {
         console.log(data);
         if(data){
             this.notificationCounter = data.length;
         this.notifications = data;
         }
        })
  }
    cleanNotification(notification, index) {
        delete this.notifications[index];
        this.notificationCounter = this.notificationCounter-1;
        let friendObject = { friendname: notification.username, productname: notification.productname }
        console.log(friendObject);
        this.friend.cleanNotification(friendObject).subscribe(data => { console.log(data) })
    }
}
