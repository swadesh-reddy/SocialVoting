import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';
import { Product } from '../../product';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
    recommends: any;
    product = [];
    constructor(private auth: AuthenicateService, private friend: FriendsService) { }

  ngOnInit() {
      this.recommendedPosts();

  }
  recommendedPosts() {
      this.friend.getRecommendedPosts().subscribe(data => {
          this.recommends = data;
          for (var i = 0; i < this.recommends.length; i++) {
              let productname = { productname: this.recommends[i].productname };
              this.friend.onSearchProduct(productname).subscribe(datas => {
                  this.product.push(datas);
                  console.log(this.product);
                  console.log(this.recommends);
              })}
         
      })
        }

}
