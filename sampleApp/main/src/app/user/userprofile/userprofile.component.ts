import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { User } from '../../user';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

    user: User;
    image: any;
    constructor(private auth: AuthenicateService) { }

    ngOnInit() {
        this.loadProfile();
    }
    loadProfile() {
        var data = this.auth.getProfile();
        this.user = data.user;
          this.user.propic = 'http://localhost:3000/' + this.user.propic;
          console.log(this.user);

    }
}
