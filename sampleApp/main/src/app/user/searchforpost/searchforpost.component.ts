import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';
@Component({
  selector: 'app-searchforpost',
  templateUrl: './searchforpost.component.html',
  styleUrls: ['./searchforpost.component.css']
})
export class SearchforpostComponent implements OnInit {
    Product: any
    recommand: any;
    users: User;
    constructor(private auth: AuthenicateService, private friend: FriendsService) { }

    ngOnInit() {
        this.loadProfile();
  }
  loadProfile() {
      this.auth.getAllProfiles().subscribe(data => {
          console.log(data);
          this.users = data;
      })
  }
  onSearchPost(productname) {
      this.friend.onSearchProduct(productname).subscribe(data => {
          console.log(data)
          this.Product = data;
      })
  }
  onRecommend(data) {
      console.log(data);
      data.productname = this.Product.productname;
      this.friend.onRecommend(data).subscribe(data=>{console.log(data)})
  }
  //onReview(data) {
  // //   this.friend.onReview(data).subscribe(data=>{console.log(data)})
  //}
}
