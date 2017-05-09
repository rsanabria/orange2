import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterService } from '../shared/services/router.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    template: `<div class="container">
    <h1>NGRX integrated</h1>
    <div class="row">
        <h2>Counter Store</h2>
        <h4>Value: <small>{{counter$ | async}}</small></h4>
            <button class="btn" (click)="counterActions('increase')">Increase</button>
    <button class="btn" (click)="counterActions('decrease')">Decrease</button>
    <button class="btn" (click)="counterActions('restart')">Restart</button>
    </div>
    <div class="row">
        <h2>User Store</h2>
        <h4>User: <small>{{(user$ | async).user.name }}</small></h4> 

    </div>
        <div class="row">
        <h2>Router Store</h2>
        <h4>Actual route: <small>{{route$ | async }}</small></h4>   
    </div>
    </div>`,
    changeDetection : ChangeDetectionStrategy.OnPush
})

export class NgrxDashBoardComponent implements OnInit {
    public counter$ : Observable<Number>;
    public user$ : Observable<any>;
    public route$ : Observable<String>;

    constructor(private routerS: RouterService, private store: Store<any>) {
        routerS.actualizarRuta('ngrx');

        this.counter$ = store.select<Number>("counter");
        this.user$ = store.select("auth");
        this.route$ = store.select<String>("router");

    }

    ngOnInit() { }

        public counterActions (action:string) {
        switch (action) {
            case 'increase' : 
                this.store.dispatch({type : 'INCREMENT'});
                break;
            case 'decrease' : 
                this.store.dispatch({type: 'DECREMENT'});
                break;
            case 'restart' :
                this.store.dispatch({type: 'RESET'});
                break;
        }
    }
}