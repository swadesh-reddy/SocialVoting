import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';
import { Product } from '../../product';

@Component({
  selector: 'app-usermainpage',
  templateUrl: './usermainpage.component.html',
  styleUrls: ['./usermainpage.component.css']
})
export class UsermainpageComponent implements OnInit {
    product: Product;

    constructor(private auth: AuthenicateService, private friend: FriendsService) { }

  ngOnInit() {
      this.loadAllProducts();
  }
  loadAllProducts() {
      this.friend.loadAllProducts().subscribe(data => {
          console.log(data);
          this.product = data;
      })
  }
}
