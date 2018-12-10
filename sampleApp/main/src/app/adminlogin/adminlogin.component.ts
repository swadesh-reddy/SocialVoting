import { Component, OnInit } from '@angular/core';
import { AuthenicateService } from '../authenicate.service';
import { UsermainpageComponent } from '../user/usermainpage/usermainpage.component';
import { RouterModule, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

    constructor(private auth: AuthenicateService, private router: Router) { }
    user: User;
    data: any;
  ngOnInit() {
  }
  onAdminLogin(user) {
      console.log(user);
      this.auth.adminLogin(user).subscribe(data => {
          this.data = data;
         if(this.data != null){
          if (this.data.user.admin == 'true') {
              this.auth.storageUserData(data);
              this.router.navigate(['/admin/adminmainpage']);

             }
          else { this.router.navigate(['/adminlogin']) }
         }
         
      })
  }

}
