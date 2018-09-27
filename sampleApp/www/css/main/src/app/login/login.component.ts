import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {AuthenicateService} from '../authenicate.service';
import { UsermainpageComponent } from '../usermainpage/usermainpage.component';
import {RouterModule, Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private auth: AuthenicateService, private router:Router) {  }
  user: User;
  data: User;
  ngOnInit() {
  }
  onLogin(user)
  {
    console.log(user);
    this.auth.Login(user).subscribe(data => {
      this.data = data;
      console.log(data);
      if (this.data.success = true) {
        this.auth.storageUserData(data.token, data.user);
        this.router.navigate(['/user/usermainpage']);
      }
      else { this.router.navigate(['/register'])}
    })
  }
}
