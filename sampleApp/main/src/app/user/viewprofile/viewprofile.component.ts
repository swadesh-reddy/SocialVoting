import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AuthenicateService } from '../../authenicate.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
    username: string;
    user: User;
    constructor(private route: ActivatedRoute, private auth: AuthenicateService) { }

    ngOnInit() {
        this.username = this.route.snapshot.paramMap.get('username');
          let data = {username:this.username}
          this.auth.getProfileById(data).subscribe(userdata => {
              console.log(userdata);
              this.user = userdata;
              this.user.propic = 'http://localhost:3000/' + this.user.propic;
        })
    }


}
