import { Component, OnInit } from "@angular/core";
import { MaterializeDirective } from 'angular2-materialize';
import { AuthService } from '../common/services/auth.service';
import { ToastService } from '../common/toast.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector : 'landing',
    templateUrl : './landing.html'
})
export class LandingComponent{
    mensaje: string = "";
    counter;
    public auth;
    public isLogged:boolean;
    constructor( private authS: AuthService, private store : Store<any>, private toast : ToastService) { 
        this.counter = store.select('counter');
        this.auth = store.select('auth');
    }

    public toastr (val: number) {
        switch (val)  {
            case 0 : this.toast.success('Este es un mensaje éxitoso!');
            case 1 : this.toast.error('Este es un mensaje de error');
            case 2 : this.toast.alert('Este es un mensaje de alerta');
            case 3 : this.toast.info('Este es un mensaje informativo'); 
        }
    }

    public aumenta () {
        this.store.dispatch({ type: 'INCREMENT' });
    }
     public disminuye () {
         this.store.dispatch({ type: 'DECREMENT' });
     }
    public logout() {
        this.authS.logout();
    }
}