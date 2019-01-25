import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openNav() {
      var sidenav = document.getElementById("mySidenav1");
      if (sidenav.style.width == "300px") {
          sidenav.style.width = "0";
      }
      else {
          sidenav.style.width = "300px";
      }
  }
}
