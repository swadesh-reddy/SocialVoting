import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Product } from './product';
import { AuthenicateService } from './authenicate.service';


@Injectable({
  providedIn: 'root'
})
export class FriendsService {
    token: String;
private _headers = new HttpHeaders({ "cache-control":'no-cache'});

constructor(private http: HttpClient, private auth: AuthenicateService) {
}

getFriendRequests(status)
{
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    return this.http.post<User>("http://localhost:3000/users/getFriendRequests", status, { headers: headers });

}
    getAllFriendRequests()
{
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    return this.http.get<User>("http://localhost:3000/users/getAllFriendRequests", { headers: headers });

}
handleRequest(url, accept)
    {
        this.token = this.auth.loadToken();
        const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post<User>("http://localhost:3000/users/"+url, accept, { headers: headers });
}
onAddProduct(product) {
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    headers.set('Content-Type', 'multipart/form-data');
    return this.http.post<User>("http://localhost:3000/users/addProduct", product, { headers: headers });

}
    onRecommend(product) {
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    headers.set('Content-Type', 'multipart/form-data');
    return this.http.post<User>("http://localhost:3000/users/saverecommend", product, { headers: headers });

}
    getRecommendedPosts() {
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    headers.set('Content-Type', 'multipart/form-data');
    return this.http.get<User>("http://localhost:3000/users/getRecommendedPosts", { headers: headers });

}

onSearchProduct(productname) {
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    return this.http.post<Product>("http://localhost:3000/users/getProductByName", productname, { headers: headers });

}
    loadAllProfiles()
{
        this.token = this.auth.loadToken();
        const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.get<Product>("http://localhost:3000/users/getAllProducts", { headers: headers });   
}
    loadRecommendations()
{
        this.token = this.auth.loadToken();
        const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.get<Product>("http://localhost:3000/users/getAllRecommendations", { headers: headers });   
    }
    onVote(productname)
    {
        this.token = this.auth.loadToken();
        const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post<Product>("http://localhost:3000/users/onVote", productname, { headers: headers });
    }
}
