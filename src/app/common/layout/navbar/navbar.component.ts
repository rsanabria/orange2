
import { Component } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'my-nav',
  template: `<nav>
    <div class="nav-wrapper orange accent-4">
      <a [routerLink]="['/']" class="brand-logo">Ora<strong>ng</strong>e <strong>2.0</strong></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
       <li> <a *ngIf="!islogged" [routerLink]="['login']">LOGIN</a></li>
       <div *ngIf="islogged">
       <li> <a [routerLink]="['login']">{{user | uppercase }}</a></li>
        <li><a (click)="logOut()">LOGOUT</a></li>
        </div>
      </ul>
    </div>
                </nav>`
})

export class NavBarComponent {
  islogged: boolean = false;
  user: any;
  constructor(private auth: AuthService) {
    auth.isLogged$.subscribe(islogged => {
      this.islogged = islogged;
      if (islogged) {
        console.log(auth.user);
        this.user = auth.user;
      }
    })
  }
  ngOnInit() {
    console.log("prueba2");
  }

  logOut () {
    this.auth.logout();
  }

}