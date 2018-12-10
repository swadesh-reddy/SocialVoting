import { Component, OnInit } from '@angular/core';
declare function Barchart(): any;
@Component({
    selector: 'app-top-krating-chart',
    templateUrl: './top-krating-chart.component.html',
    styleUrls: ['./top-krating-chart.component.css']
})

export class TopKRatingChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      Barchart();
  }
 
   }
