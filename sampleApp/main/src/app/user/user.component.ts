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
        this.show = false;
    }
    openNav() {
        this.show = true;
    }
}
