import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects'

import { ToastService } from '../../services/toast.service';
import { User } from '../../interfaces/user.login';

@Injectable() 
export class AuthEffects {
    private users  = [
    {user : 'test',
    passwd: 'test@',
    ruta: '/'
    }];
  
    constructor(private actions$ : Actions, private router: Router, private toast : ToastService) {}

    private findUser (u: string) {
        return this.users.find(user => { 
            return user.user === u });
    } 

    @Effect() login$ = this.actions$
        .ofType('LOG_IN')
            .map(info => {
                var u = this.findUser(info.payload.user);
                if (u) {
                    if (u.passwd === info.payload.passwd) {
                        return ({type: 'LOG_IN_SUCCESS', payload : { user : u.user, isLogged: true, ruta : u.ruta }});
                    }
                }
                return ({type: 'LOG_IN_FAILED', payload : { user : '', isLogged: false }});
            });

    @Effect() logout$ = this.actions$
        .ofType('LOG_OUT')
            .map(info => {
                this.router.navigateByUrl('/');
                return {type:''}
            });
       
    @Effect() login_success$ = this.actions$
        .ofType('LOG_IN_SUCCESS')
            .map(info => {
                if (info.payload.isLogged) {
                    console.log(info);
                    this.router.navigateByUrl(info.payload.ruta); 
                    //para evitar error  
                    return {type: ''};
                }
            } );

}