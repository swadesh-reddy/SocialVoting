import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RouterModule, Router } from '@angular/router';
import { AuthenicateService } from "../authenicate.service";
import { User } from '../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private auth: AuthenicateService, private router: Router) { }

  ngOnInit() {
  }
  onRegister(userdata)
  {
      console.log(userdata);
    this.auth.registerData(userdata).subscribe(data => {
        console.log(data);
        if (data) {
            this.router.navigate(['/login'])
        }
    });
  }
}
