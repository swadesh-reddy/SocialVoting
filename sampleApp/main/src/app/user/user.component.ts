import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "320px";
    document.getElementById("openbtn").style.opacity = "0";
}

closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("openbtn").style.opacity = "1";

}
}
