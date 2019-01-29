import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';

@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.component.html',
  styleUrls: ['./friend-profile.component.css']
})
export class FriendProfileComponent implements OnInit {
    username: string='';
    user: User;
    friendStatus:any;
    constructor(private route: ActivatedRoute, private auth: AuthenicateService, private friend: FriendsService) { }

    ngOnInit() {
        this.loadFriend();
        }
    ngOnChanges() { this.loadFriend(); }
  onRequest() {
      let friend = {
          'friend': this.user.username,
          'status': false
      }
      console.log(friend);
      this.auth.sendRequest(friend).subscribe(data => {
          console.log(data);
      })
  }
  loadFriend() {
      this.username = this.route.snapshot.paramMap.get('username');
      let data = { 'username': this.username }
      this.auth.getProfileById(data).subscribe(userdata => {
          console.log(userdata);
          this.user = userdata;
          this.user.propic = 'http://localhost:3000/' + this.user.propic;
      })
      this.friend.checkFriend({ username: this.username }).subscribe(data => {
          console.log(data);
          this.friendStatus = data;
      })
      let searchedContent = { "searchedContent": this.username }
      this.auth.saveToHistory(searchedContent).subscribe(data => { console.log(data) })

  }
}
