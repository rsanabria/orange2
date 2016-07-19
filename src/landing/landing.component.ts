import {Component} from "@angular/core";
import { MaterializeDirective } from 'angular2-materialize';
import { ToastService } from '../common/toast.service';

@Component({
    moduleId: module.id,
    selector : 'landing',
    templateUrl : './landing.html',
    directives: [MaterializeDirective]
})
export class LandingComponent {
    mensaje: string = "";
    constructor( private toast : ToastService) { }

    public exito () {
        this.toast.success('Este es un mensaje éxitoso!');
    }
    public error() {
        this.toast.error('Este es un mensaje de error');
    }

    public alerta() {
        this.toast.alert('Este es un mensaje de alerta');
    }
    public info() {
        this.toast.info('Este es un mensaje informativo');
    }
}