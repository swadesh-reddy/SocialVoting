import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../authenicate.service';
import { RouterModule, Router } from '@angular/router';
        
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    constructor(private auth: AuthenicateService, private router: Router) { }

  ngOnInit() {
  }
  logout() {
      this.auth.logout();
      this.router.navigate(['/adminlogin']);

  }
}
