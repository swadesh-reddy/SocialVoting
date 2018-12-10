import { Component, ElementRef, OnInit } from '@angular/core';
import { User } from '../user';
import {AuthenicateService} from '../authenicate.service';
import { UsermainpageComponent } from '../user/usermainpage/usermainpage.component';
import { RouterModule, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
    constructor(private auth: AuthenicateService, private router: Router, private flashMessages: FlashMessagesService, private el: ElementRef) {  }
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
      if (this.data.success == true) {
        this.auth.storageUserData(data);
        this.router.navigate(['/user/usermainpage']);
      }
      else {
          this.inValidLogin();
      }
    })
  }
  inValidLogin() {
     
      this.flashMessages.show('ivalid credentials', { cssClass: 'alert-warning', timeout: 5000})
  }
  changeText() {

      
  }
}
