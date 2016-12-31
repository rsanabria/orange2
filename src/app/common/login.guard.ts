import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './services/auth.service';
import { ToastService } from './services/toast.service';

@Injectable()
export class LogInGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService, private toast: ToastService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.url.length) {
      if (route.url[0].path == 'login') {
        return !this.auth.isLogged;
      } else {
        return true;
      }
    } else {
      if (this.auth.isLogged) {
        return true;
      } else {

        // Store the attempted URL for redirecting
        //this.authService.redirectUrl = state.url;

        // Navigate to the login page
        this.router.navigate(['login']);
        this.toast.error("necesitas iniciar sesión primero");
        return false;
      }
    }
  }
}
