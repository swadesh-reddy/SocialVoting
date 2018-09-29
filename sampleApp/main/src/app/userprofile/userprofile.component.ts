import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../authenicate.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

    public user: any
    public image:any    
    constructor(private auth: AuthenicateService) { }

    ngOnInit() {
        this.loadProfile();
  }
  loadProfile() {
      this.auth.getProfile().subscribe(data => {
          console.log(data.user);
          this.user = data.user;
      })
  }
}
