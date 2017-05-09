import { Component, OnInit } from '@angular/core';

import { ToastService } from '../shared/services/toast.service';
import { RouterService } from '../shared/services/router.service';
@Component({
    templateUrl: 'landing.component.html'
})
export class LandingComponent implements OnInit {
    public counter: any;
    constructor(private toastS : ToastService, private router : RouterService) { 
        this.router.actualizarRuta('/');
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
}