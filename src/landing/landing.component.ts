import {Component} from "@angular/core";
import { MaterializeDirective } from 'angular2-materialize';

@Component({
    selector : 'landing',
    templateUrl : 'app/landing/landing.html',
    directives: [MaterializeDirective]
})
export class LandingComponent {
    mensaje: string = "";
    constructor() { }
}