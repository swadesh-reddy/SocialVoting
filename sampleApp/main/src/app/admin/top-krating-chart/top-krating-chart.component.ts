import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../../authenicate.service';
import { FriendsService } from '../../friends.service';
import { User } from '../../user';
import { Product } from '../../product';
declare function Barchart(product): any;
@Component({
    selector: 'app-top-krating-chart',
    templateUrl: './top-krating-chart.component.html',
    styleUrls: ['./top-krating-chart.component.css']
})

export class TopKRatingChartComponent implements OnInit {

    product: Product;
    constructor(private auth: AuthenicateService, private friend: FriendsService) { }

  ngOnInit() {
      this.loadAllProducts();
      Barchart(this.product);
  }
  loadAllProducts() {
      this.friend.loadAllProducts().subscribe(data => {
          console.log(data);
          this.product = data;
      })
  }
   }
