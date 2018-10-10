import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';


@Injectable({
    providedIn: 'root'
})
export class AuthenicateService {
    authToken: any;
    user: any;

    private _headers = new HttpHeaders();

    constructor(private http: HttpClient) {
    }


    registerData(data) {

        console.log(data);
        const headers = this._headers;
        headers.append("cache-control", 'no-cache');
        headers.set('Content-Type', 'multipart/form-data');
        return this.http.post<User>('http://localhost:3000/users/register', data, { headers: headers });
    }
    Login(data) {
        const headers = this._headers;
        headers.set('Content-Type', 'application/json');
        return this.http.post<User>('http://localhost:3000/users/login', data, { headers: headers });
    }


    getProfile() {
        this.loadToken();
        //console.log(this.authToken);
        const headers = this._headers.append('Authorization', 'Bearer ' + this.authToken);
        headers.append("cache-control", 'no-cache');
        return this.http.get<User>("http://localhost:3000/users/profile", { headers: headers });

    }
    getProfileById(email:any)
    {
        this.loadToken();   
        //console.log(this.authToken);
        const headers = this._headers.append('Authorization', 'Bearer ' + this.authToken);
        headers.append("cache-control", 'no-cache');
        return this.http.post<User>("http://localhost:3000/users/profileById", email, { headers: headers });

    }
    getAllProfiles() {
        this.loadToken();
        //console.log(this.authToken);
        const headers = this._headers.append('Authorization', 'Bearer ' + this.authToken);
        headers.append("cache-control", 'no-cache');
        return this.http.get<User>("http://localhost:3000/users/allprofiles", { headers: headers });

    }
    loggedIn() {
        this.loadToken();
        if (localStorage.getItem('token')) { return true } else { return false };
    }
    loadToken() {
        const token = localStorage.getItem('token');
        this.authToken = token;
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
        this.user = data.user;

    }
    logout() {

        this.authToken = '';
        this.user = '';
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        localStorage.clear();

    }



}


