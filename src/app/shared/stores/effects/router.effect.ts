import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects'
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';

@Injectable()
export class RouterEffects {
    constructor(private actions$: Actions, private session : SessionStorageService) {

    }

    @Effect({dispatch: false}) router$ = this.actions$
        .ofType('UPDATE_ROUTE')
        .map( info => {
            this.session.store("route",info.payload);
        });
}