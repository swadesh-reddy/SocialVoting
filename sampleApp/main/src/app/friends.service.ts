import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { AuthenicateService } from './authenicate.service';


@Injectable({
  providedIn: 'root'
})
export class FriendsService {
    token: String;
private _headers = new HttpHeaders({ "cache-control":'no-cache'});

constructor(private http: HttpClient, private auth: AuthenicateService) {
    }
getFriendRequests()
{
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    return this.http.get<User>("http://localhost:3000/users/getFriendRequests", { headers: headers });

}
}
