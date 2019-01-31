import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { User } from '../user';
import { Recommend } from '../recommend';
import { AuthenicateService } from '../authenicate.service';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from '../friends.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
    productname: string = '';
    product: Product;
    user: User;
    recommend:Recommend
    voteStatus: String;
    image: any;
    
    constructor(private route: ActivatedRoute, private auth: AuthenicateService, private friend: FriendsService, private flashMessages: FlashMessagesService) { }


    ngOnInit() {
        this.loadProfile();
      this.productname = this.route.snapshot.paramMap.get('productname');
      var data = { productname: this.productname }
      this.friend.onSearchProduct(data).subscribe(productData => {
          console.log(productData);
          this.product = productData;
        })
  }
    loadProfile() {
        var data = this.auth.getProfile();
        this.user = data;
        this.voteStatus = this.user.vote;

    }
    onRecommend(data) {
        console.log(data);
        data.productname = this.product.productname;
        this.friend.onRecommend(data).subscribe(data => {
            console.log(data)
            this.onRecommendSuccess();
        })
        let notification = {
            'friendname': data.recommendTo,
            'productname': this.product.productname
        }
        this.friend.addNotification(notification).subscribe(data => {
            console.log(data);
        })
    }
    onRecommendSuccess() {

        this.flashMessages.show('Recommand successful', { cssClass: 'alert-success', timeout: 3000 })

    }
    onVote() {
        var productname = { productname: this.product.productname };
        console.log(productname);
        this.friend.onVote(productname).subscribe(data => { console.log(data) })
        this.product.vote = Number(this.product.vote) + 1;
        this.auth.uservoted();
        this.voteStatus = 'true';
    }
}
