import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenicateService {
  authToken: any;
  user: any;
   
  constructor(private http: HttpClient) {

   
  }
 
  registerData(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
   return this.http.post<User>('http://localhost:3000/users/register', data);
  }
  Login(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<User>('http://localhost:3000/users/login', data, { headers: headers });
  }
    


  getProfile() {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.loadToken();
    console.log(this.authToken);
    headers.append('Authorization', 'Bearer '+ this.authToken);
    return this.http.get("http://localhost:3000/users/profile",  {headers: headers});

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


