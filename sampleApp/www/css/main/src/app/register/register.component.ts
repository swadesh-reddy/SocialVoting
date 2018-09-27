import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenicateService } from "../authenicate.service";
import { User } from '../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthenicateService) { }
  user:User;
  ngOnInit() {
  }
  onRegister(data)
  {
    console.log(data);
    this.auth.registerData(data).subscribe(data => { this.user = data; console.log(data); });
  }
}
