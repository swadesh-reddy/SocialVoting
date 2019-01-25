import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../authenicate.service';
import { RouterModule, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    show: Boolean = true;
    public users: User;
    public userdetails: User;

    constructor(private auth: AuthenicateService, private router: Router) { }

    ngOnInit() {
        this.loadProfile();
    }

    loadProfile() {
        this.auth.getAllProfiles().subscribe(data => {

            this.users = data;
        })
        this.userdetails = this.auth.getProfile();
        this.userdetails.propic = 'https://publicserver.localtunnel.me/' + this.userdetails.propic;
    }
    logout() {
        this.auth.logout();
        this.router.navigate(['/login']);

    }
    closeNav() {
        var sidenav = document.getElementById("mySidenav");
        if (sidenav.style.width == "300px") {
            sidenav.style.width = "0";
        }
        else {
            sidenav.style.width = "300px";
        }
    }
    openNav() {
        this.show = true;
    }
}
