import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenicateService {
  authToken: any;
  user: any;

  private _headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {   
  }

  registerData(data)
  {
      const headers = this._headers;
   return this.http.post<User>('http://localhost:3000/users/register', data);
  }
  Login(data)
  {
      const headers = this._headers;
    return this.http.post<User>('http://localhost:3000/users/login', data, { headers: headers });
  }
    


  getProfile() {
    this.loadToken();
    //console.log(this.authToken);
    const headers= this._headers.append('Authorization', 'Bearer '+ this.authToken);
    headers.append("cache-control", 'no-cache');
    console.log({ headers: headers });
    return this.http.get<User>("http://localhost:3000/users/profile",  {headers: headers});

  }
   
  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }



  storageUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;

  }
  logout() {
    this.authToken = '';
    this.user = '';
    localStorage.clear();
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    if (localStorage.getItem('token')) { return true } else { return false };
  }

}


