import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';


@Component({
  selector: 'app-viewall-friend-request',
  templateUrl: './viewall-friend-request.component.html',
  styleUrls: ['./viewall-friend-request.component.css']
})
export class ViewallFriendRequestComponent implements OnInit {

    constructor(private friend: FriendsService) { }
    friendRequest:any
  ngOnInit() {
      this.loadFriendrequests()
  }
  loadFriendrequests()
  {
      this.friend.getAllFriendRequests().subscribe(data => {
          console.log(data);
          this.friendRequest=data
      })
  }
}
