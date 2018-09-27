import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../authenicate.service';
import { User } from '../user';

@Component({
  selector: 'app-usermainpage',
  templateUrl: './usermainpage.component.html',
  styleUrls: ['./usermainpage.component.css']
})
export class UsermainpageComponent implements OnInit {

  constructor(private auth: AuthenicateService) { }

  ngOnInit() {
    this.loadProfile();
  }
  loadProfile() {
    this.auth.getProfile().subscribe(data => { console.log(data) })
  }
}
