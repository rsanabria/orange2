import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public isLogged : boolean = false;
  private isLogged$ : Subject<any>;
  private authStore : Observable<any>;
  constructor(private router: Router, private store : Store<any>) {
          this.authStore = store.select('auth');
            store.subscribe(info => {
              if (info.auth.isLogged && info.router =='login' /*Esta es ela ruta de donde viene el formulario*/) {
                this.isLogged = true;
                this.router.navigateByUrl(info.auth.ruta);
              } else if (!info.auth.isLogged){
                //this.router.navigateByUrl('/login');
              }
            });
                      
  }
  public login(usuario) {
     this.store.dispatch({type: 'LOG_IN', payload : usuario});
  }
  public logout() {
    this.store.dispatch({type: 'LOG_OUT', payload : {}});
    this.isLogged$.next(false);
  }

}