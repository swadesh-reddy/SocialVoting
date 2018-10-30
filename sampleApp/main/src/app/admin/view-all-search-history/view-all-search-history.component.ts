import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';

@Component({
  selector: 'app-view-all-search-history',
  templateUrl: './view-all-search-history.component.html',
  styleUrls: ['./view-all-search-history.component.css']
})
export class ViewAllSearchHistoryComponent implements OnInit {
    history:any
    constructor(private auth: AuthenicateService, private friend: FriendsService) { }

  ngOnInit() {
      this.loadhistory();
  }
  loadhistory() {
      this.auth.loadAllHistory().subscribe(data => {
          console.log(data);
          this.history = data;
      })
  }
}
