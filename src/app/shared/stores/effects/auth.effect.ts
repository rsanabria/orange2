import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects'
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';

import { ToastService } from '../../services/toast.service';
import { User } from '../../interfaces/user.login';



@Injectable() 
export class AuthEffects {
    private users  = [
    {user : 'test',
    passwd: 'test@',
    ruta: '/'
    }];
  
    constructor(private actions$ : Actions, private router: Router, private toast : ToastService, private session: SessionStorageService) {}


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
                        return ({type: 'LOG_IN_SUCCESS', payload : { user : {name : u.user, ruta: u.ruta}, isLogged: true, ruta : u.ruta }});
                    }
                }
                return ({type: 'LOG_IN_FAILED', payload : { user : '', isLogged: false }});
            });

    @Effect({dispatch: false}) logout$ = this.actions$
        .ofType('LOG_OUT')
            .map(info => {
                this.router.navigateByUrl('/login');
                this.session.clear('userStored');
                this.session.clear('route');
            });
       
    @Effect({dispatch: false}) login_success$ = this.actions$
        .ofType('LOG_IN_SUCCESS')
            .map(info => {
                if (info.payload.isLogged) {
                    this.session.store('userStored',info.payload.user);
                    this.router.navigateByUrl(info.payload.ruta); 
                }
            } );
    @Effect({dispatch: false}) restore_session$ = this.actions$
        .ofType('RESTORE_SESSION')
            .map(info => {
                    this.router.navigateByUrl(this.session.retrieve("route"));
                /*insert server logic*/
            })

}