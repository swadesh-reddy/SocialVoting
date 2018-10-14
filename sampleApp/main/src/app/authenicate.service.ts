import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';


@Injectable({
    providedIn: 'root'
})
export class AuthenicateService {
    authToken: any;
    user: any;

    private _headers = new HttpHeaders({ "cache-control":'no-cache'});

    constructor(private http: HttpClient) {
    }


    public registerData(data) {

        console.log(data);
        const headers = this._headers;
        headers.set('Content-Type', 'multipart/form-data');
        return this.http.post<User>('http://localhost:3000/users/register', data, { headers: headers });
    }
    Login(data) {
        const headers = this._headers;
        headers.set('Content-Type', 'application/json');
        return this.http.post<User>('http://localhost:3000/users/login', data, { headers: headers });
    }


    getProfile() {
        var userString = localStorage.getItem('user');
        userString = JSON.parse(userString)
        this.user = { 'user': userString };
        console.log(this.user);
        return this.user;

    }
    getProfileById(username:any)
    {
        this.loadToken();   
        const headers = this._headers.append('Authorization', 'Bearer ' + this.authToken);
        return this.http.post<User>("http://localhost:3000/users/profileById", username, { headers: headers });

    }
    getAllProfiles() {
        this.loadToken();
        const headers = this._headers.append('Authorization', 'Bearer ' + this.authToken);
        return this.http.get<User>("http://localhost:3000/users/allprofiles", { headers: headers });
    }

    loggedIn() {
        this.loadToken();
        if (localStorage.getItem('token')) { return true } else { return false };
    }
    loadToken() {
        const token = localStorage.getItem('token');
        this.authToken = token;
        return token;
    }

    sendRequest(friendName: any)
    {
        this.loadToken();
        console.log(friendName);
        const headers = this._headers.append('Authorization', 'Bearer ' + this.authToken);
        headers.append("cache-control", 'no-cache');
        return this.http.post<User>("http://localhost:3000/users/friendrequest", friendName, { headers: headers });

    }

    storageUserData(data) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.authToken = data.token;
       
    }
    logout() {

        this.authToken = '';
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        localStorage.clear();

    }



}


