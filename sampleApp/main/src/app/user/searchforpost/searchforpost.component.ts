import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';
import { Product } from '../../product';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-searchforpost',
  templateUrl: './searchforpost.component.html',
  styleUrls: ['./searchforpost.component.css']
})
export class SearchforpostComponent implements OnInit {
    Product: any
    recommand: any;
    product: Product;
    user: User;
    voteStatus: String;
    productNotFound: Boolean;
    constructor(private auth: AuthenicateService, private friend: FriendsService, private flashMessages: FlashMessagesService) { }

    ngOnInit() {
        this.loadAllProducts();
        this.loadProfile();
  }
    loadAllProducts() {
      this.friend.loadAllProducts().subscribe(data => {
          console.log(data);
          this.product = data;
         
      })
    }
    loadProfile() {
        var userdata = this.auth.getProfile();
        this.user = userdata;
        this.voteStatus = this.user.vote;
        console.log(this.voteStatus)
    }
  onSearchPost(productname) {
      this.friend.onSearchProduct(productname).subscribe(data => {
          console.log(data)
          if (data) {
              this.productNotFound = false;
          this.Product = data;
          let searchedContent = { "searchedContent": productname.productname }
          this.auth.saveToHistory(searchedContent).subscribe(data => { console.log(data) })
          }
          else {
              this.productNotFound = true;
          }
      })
  
  }
  onRecommend(data) {
      console.log(data);
      data.productname = this.Product.productname;
      this.friend.onRecommend(data).subscribe(data => {
          console.log(data)
          this.onRecommendSuccess();
      })
  }
  onRecommendSuccess() {

      this.flashMessages.show('Recommand successful', { cssClass: 'alert-success', timeout: 3000 })
    
  }
  onVote()
  {
      var productname = { productname: this.Product.productname };
      console.log(productname);
      this.friend.onVote(productname).subscribe(data => { console.log(data) });
      this.auth.uservoted();
      this.Product.vote = Number(this.Product.vote) + 1;
      this.voteStatus = 'true';
  }
  //onReview(data) {
  // //   this.friend.onReview(data).subscribe(data=>{console.log(data)})
  //}
}
