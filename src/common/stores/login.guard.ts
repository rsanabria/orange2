import { Injectable } from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private auth: AuthService, private router : Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isLogged) { return true; }

    // Store the attempted URL for redirecting
    //this.authService.redirectUrl = state.url;

    // Navigate to the login page
    this.router.navigate(['/']);
    return false;
  }
}