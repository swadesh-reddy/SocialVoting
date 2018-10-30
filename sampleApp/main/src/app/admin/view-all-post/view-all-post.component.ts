import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';
import { Product } from '../../product';

@Component({
  selector: 'app-view-all-post',
  templateUrl: './view-all-post.component.html',
  styleUrls: ['./view-all-post.component.css']
})
export class ViewAllPostComponent implements OnInit {
    product: Product;

    constructor(private auth: AuthenicateService, private friend: FriendsService) { }

  ngOnInit() {
      this.loadAllProducts();
  }
  loadAllProducts() {
      this.friend.loadAllProfiles().subscribe(data => {
          console.log(data);
          this.product = data;
      })
  }
}
