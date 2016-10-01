import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService implements OnInit {
  public isLogged : boolean = false;
  private isLogged$ : Subject<any>;
  private authStore : Observable<any>;

  
  constructor(private store : Store<any>) {
          this.authStore = this.store.select('auth');
            this.store.subscribe(info => {
            console.log(info);
              if (info.auth.isLogged && info.router =='/login') {
                this.isLogged = true;
              } else if (!info.auth.isLogged){
                this.isLogged = false;
              }
            });  
                      
  }
 ngOnInit() {
 
 }

  public login(usuario) {
     this.store.dispatch({type: 'LOG_IN', payload : usuario});
  }
  public logout() {
    this.store.dispatch({type: 'LOG_OUT', payload : {}});
    //this.isLogged$.next(false);
  }

}