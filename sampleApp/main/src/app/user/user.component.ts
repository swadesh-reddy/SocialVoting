import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../authenicate.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    show: Boolean = true;
    constructor(private auth: AuthenicateService, private router: Router) { }

    ngOnInit() {
    }
    logout() {
        this.auth.logout();
        this.router.navigate(['/login']);

    }
    closeNav() {
        var sidenav = document.getElementById("mySidenav");
        if (sidenav.style.width == "350px") {
            sidenav.style.width = "0";
        }
        else {
            sidenav.style.width = "350px";
        }
    }
    openNav() {
        this.show = true;
    }
}
