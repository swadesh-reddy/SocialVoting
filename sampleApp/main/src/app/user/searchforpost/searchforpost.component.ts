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
    users: Product;
    constructor(private auth: AuthenicateService, private friend: FriendsService, private flashMessages: FlashMessagesService) { }

    ngOnInit() {
        this.loadAllProducts();
  }
    loadAllProducts() {
      this.friend.loadAllProducts().subscribe(data => {
          console.log(data);
          this.users = data;
      })
  }
  onSearchPost(productname) {
      this.friend.onSearchProduct(productname).subscribe(data => {
          console.log(data)
          this.Product = data;
      })
      let searchedContent = { "searchedContent": productname.productname }
      this.auth.saveToHistory(searchedContent).subscribe(data => { console.log(data) })

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
      this.friend.onVote(productname).subscribe(data => { console.log(data) })
      this.Product.vote = Number(this.Product.vote) + 1;
  }
  //onReview(data) {
  // //   this.friend.onReview(data).subscribe(data=>{console.log(data)})
  //}
}
