import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { User } from '../interfaces/user.login';

@Injectable()
export class AuthService implements OnInit {
  public isLogged : boolean;
  public isLogged$ : Subject<any> = new Subject();
  public user = {};
  private authStore : Observable<any>;

  
  constructor(private store : Store<any>) {
          this.authStore = this.store.select('auth');
            this.store.subscribe(info => {
              if (info.auth.isLogged && info.router =='/login') {
                this.isLogged = true;
                this.isLogged$.next(true);
              } else if (!info.auth.isLogged){
                this.isLogged = false;
                this.isLogged$.next(false);
              }
              this.user = info.auth.user;
            });  
                      
  }
 ngOnInit() {
 
 }

  public login(user : User) {
     this.store.dispatch({type: 'LOG_IN', payload :  user});
  }
  public logout() {
    this.store.dispatch({type: 'LOG_OUT', payload : {}});
  }

}