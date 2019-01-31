import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';
import { Recommend } from '../../recommend';
import { Product } from '../../product';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
    recommends: any;
    recommend: Recommend;
    nodata: Boolean
    product = [];
    constructor(private auth: AuthenicateService, private friend: FriendsService) { }

  ngOnInit() {
      this.recommendedPosts();

  }
  recommendedPosts() {
      this.friend.getRecommendedPosts().subscribe(data => {
          console.log(data)
          if (data.length) {
              this.recommends = data;
              this.nodata = false;
                  
              for (var i = 0; i < this.recommends.length; i++) {
                  let productname = { productname: this.recommends[i].productname };
                  this.friend.onSearchProduct(productname).subscribe(datas => {
                      console.log(datas);
                      datas.productimage = 'https://publicserver.localtunnel.me/' + datas.productimage;
                      this.product.push(datas);

                  })
              }
          }
          else { this.nodata = true;}
      })
        }

}
