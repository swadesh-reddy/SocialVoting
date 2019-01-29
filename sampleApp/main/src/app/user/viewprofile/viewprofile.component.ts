import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AuthenicateService } from '../../authenicate.service';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from '../../friends.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
    username: string='';
    user: User;
    image: any;
    friends = [];
    constructor(private route: ActivatedRoute, private auth: AuthenicateService, private friend: FriendsService) { }

    ngOnInit() {
        this.username = this.route.snapshot.paramMap.get('username');
          var data = {username:this.username}
          this.auth.getProfileById(data).subscribe(userdata => {
              console.log(userdata);
              this.user = userdata;
              this.user.propic = 'http://localhost:3000/' + this.user.propic;
          })
          this.loadFriends(this.username)
    }

    loadFriends(username) {
        let status = { status: true,username:username }
        this.friend.getAllFriends(status).subscribe(data => {
            console.log(data);
            for (var key in data) {
             
                if (data[key].username !== undefined) {
                    console.log(data[key].username);
                    this.auth.getProfileById({ 'username': data[key].username }).subscribe(data => {
                        console.log(data);
                        data.propic = 'http://localhost:3000/' + data.propic;
                        this.friends.push(data);
                        console.log(this.friends);
                    })
                }
            }
        });
    }
}
