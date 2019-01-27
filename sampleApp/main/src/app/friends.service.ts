import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Product } from './product';
import { Notification } from './notification';
import { AuthenicateService } from './authenicate.service';


@Injectable({
  providedIn: 'root'
})
export class FriendsService {
    token: String;
private _headers = new HttpHeaders({ "cache-control":'no-cache'});

constructor(private http: HttpClient, private auth: AuthenicateService) {
}

    getAllFriends(status)
{
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    return this.http.post<User>("https://publicserver.localtunnel.me/users/getAllFriends", status, { headers: headers });

}
    checkFriend(username:any)
    {
        console.log(username)
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    return this.http.post<User>("https://publicserver.localtunnel.me/users/checkFriends", username, { headers: headers });

}
    getAllFriendRequests()
{
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    return this.http.post<User>("https://publicserver.localtunnel.me/users/getAllFriendRequests",headers, { headers: headers });

}
handleRequest(url, accept)
    {
        this.token = this.auth.loadToken();
        const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post<User>("https://publicserver.localtunnel.me/users/"+url, accept, { headers: headers });
}
onAddProduct(product) {
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    headers.set('Content-Type', 'multipart/form-data');
    return this.http.post<User>("https://publicserver.localtunnel.me/users/addProduct", product, { headers: headers });

}
addNotification(product) {
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    headers.set('Content-Type', 'multipart/form-data');
    return this.http.post<User>("https://publicserver.localtunnel.me/users/addNotification", product, { headers: headers });

}
onRecommend(product) {
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    headers.set('Content-Type', 'multipart/form-data');
    return this.http.post<User>("https://publicserver.localtunnel.me/users/saverecommend", product, { headers: headers });

}
    getRecommendedPosts() {
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    headers.set('Content-Type', 'multipart/form-data');
    return this.http.post<User>("https://publicserver.localtunnel.me/users/getRecommendedPosts",headers, { headers: headers });

}
getNotifications() {
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    headers.set('Content-Type', 'multipart/form-data');
    return this.http.post<Notification>("https://publicserver.localtunnel.me/users/getNotifications",headers, { headers: headers });

}

onSearchProduct(productname) {
    this.token = this.auth.loadToken();
    const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
    return this.http.post<Product>("https://publicserver.localtunnel.me/users/getProductByName", productname, { headers: headers });

}
loadAllProducts()
    {
        this.token = this.auth.loadToken();
        const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post<Product>("https://publicserver.localtunnel.me/users/getAllProducts", headers, { headers: headers });   
}
    loadRecommendations()
{
        this.token = this.auth.loadToken();
        const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post<Product>("https://publicserver.localtunnel.me/users/getAllRecommendations",headers, { headers: headers });   
    }
    onVote(productname)
    {
        this.token = this.auth.loadToken();
        const headers = this._headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post<Product>("https://publicserver.localtunnel.me/users/onVote", productname, { headers: headers });
    }
}
