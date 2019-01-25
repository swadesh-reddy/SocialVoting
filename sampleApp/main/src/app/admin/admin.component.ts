import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../authenicate.service';
import { RouterModule, Router } from '@angular/router';
import { User } from '../user';
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
        var sidenav = document.getElementById("mySidenav1");
        if (sidenav.style.width == "300px") {
            sidenav.style.width = "0";
        }
        else {
            sidenav.style.width = "300px";
        }
    }

}
