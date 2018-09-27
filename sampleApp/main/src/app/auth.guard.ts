import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenicateService } from './authenicate.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenicateService, private router: Router) { }

  canActivate() {
    if (!this.auth.loggedIn()) {
      this.router.navigate(['/login'])
      return false;
    }
    else {
      return true;
    }
  }
}
