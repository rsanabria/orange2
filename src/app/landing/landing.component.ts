import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ToastService } from '../shared/services/toast.service';
import { RouterService } from '../shared/services/router.service';
@Component({
    templateUrl: 'landing.component.html'
})
export class LandingComponent implements OnInit {
    public counter: any;
    constructor(private toastS : ToastService, private router : RouterService, private store : Store<any>) { 
        this.router.actualizarRuta('/');
        this.counter = store.select('counter');
    }

    ngOnInit() { }

    public toast (type:string) {
        switch (type) {
            case 'success' : 
                this.toastS.success("Éxito");
                break;
            case 'error': 
                this.toastS.error("Error");
                break;
            case 'alert': 
                this.toastS.alert("Alerta");
                break;
            case "info":
                this.toastS.info("Info");
                break;
            default:
                break;
        }
    }

    public counterActions (action:string) {
        switch (action) {
            case 'aumentar' : 
                this.store.dispatch({type : 'INCREMENT'});
                break;
            case 'disminuir' : 
                this.store.dispatch({type: 'DECREMENT'});
                break;
            case 'restart' :
                this.store.dispatch({type: 'RESET'});
                break;
        }
    }

}