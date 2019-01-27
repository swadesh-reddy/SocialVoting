import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RouterModule, Router } from '@angular/router';
import { AuthenicateService } from "../authenicate.service";
import { User } from '../user';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    user: User;
    image: File = null;
    public files: any[];
    constructor(private auth: AuthenicateService, private router: Router, private flashMessages: FlashMessagesService) { }

    ngOnInit() {
    }

    onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            this.image = <File>event.target.files[0];
            console.log(this.image.name);
        }
    }
    onRegister(data) {

        var form = new FormData();
        form.append("username", data.username);
        form.append("password", data.password);
        form.append("email", data.email);
        form.append("admin", "false");
        form.append("vote", 'false');
        form.append("contact", data.contact);
        form.append("propic", this.image, this.image.name);
        console.log(form);
        this.auth.registerData(form).subscribe(data => {
            console.log(data);
            this.user = data;
            if (this.user.success == true) {
                this.router.navigate(['/login'])
            }
            else {
                this.inValidRegistration();
            }
        });
    }
    inValidRegistration() {

        this.flashMessages.show('Email already exists', { cssClass: 'alert-warning', timeout: 5000 })
    }
    //onImage(image) {
    //  console.log(image);
    //  this.auth.ImageUpload(image).subscribe(data => {
    //    console.log(data);
    //  })
    //}
}
