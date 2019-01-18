import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';

@Component({
  selector: 'app-mysearchhistory',
  templateUrl: './mysearchhistory.component.html',
  styleUrls: ['./mysearchhistory.component.css']
})
export class MysearchhistoryComponent implements OnInit {
    histories: Array<User> = [];
    history: User;
    constructor(private auth: AuthenicateService) { }
    
  ngOnInit() {
      this.loadhistory();

  }
  loadhistory() {
      this.auth.loadHistory().subscribe(data => {
          this.history = data;
      })
  }
  clearuserhistory() {
      this.auth.clearuserhistory().subscribe(data=>{console.log(data)})
  }
}
