import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../authenicate.service';
import { User } from '../user';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

    public user: User;
    image: any;
    constructor(private auth: AuthenicateService) { }

    ngOnInit() {
        this.loadProfile();
    }
    loadProfile() {
        this.auth.getProfile().subscribe(data => {
            console.log(data);
            this.user = data;
            this.image = 'http://localhost:3000/' + this.user.propic;
            console.log(this.image);
        })

    }
}
