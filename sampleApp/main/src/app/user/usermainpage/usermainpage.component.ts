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
    public innerWidth:any
    constructor(private auth: AuthenicateService, private friend: FriendsService) { }

  ngOnInit() {
      this.loadAllProducts();
      document.getElementById('scrollX').style.width = Number(window.innerWidth*0.9)+'px';
  }
  loadAllProducts() {
      this.friend.loadAllProducts().subscribe(data => {
          console.log(data);
          this.product = data;
      })

  }
}
