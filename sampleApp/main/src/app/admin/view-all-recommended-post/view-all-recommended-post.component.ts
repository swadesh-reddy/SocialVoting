import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';
import { Product } from '../../product';

@Component({
  selector: 'app-view-all-recommended-post',
  templateUrl: './view-all-recommended-post.component.html',
  styleUrls: ['./view-all-recommended-post.component.css']
})
export class ViewAllRecommendedPostComponent implements OnInit {
    recommends: Product;
    constructor(private auth: AuthenicateService, private friend: FriendsService) { }

    ngOnInit() {
        this.friend.loadRecommendations().subscribe(data => {
            this.recommends = data;
        console.log(this.recommends)
        })

  }

}
