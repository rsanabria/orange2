import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/auth.service';
import { RouteService } from '../common/route.service';
@Component({
    moduleId: module.id,
    selector: 'logIn',
    templateUrl: 'login.component.html'
})
export class LogInComponent implements OnInit {
    public usuario = {};
    constructor(private auth: AuthService, private route : RouteService) {
        route.actualizarRuta('login');
     }

    ngOnInit() { }

    public logIn() {
        this.auth.login(this.usuario);
        if (this.auth.isLogged) this.usuario = {};
    }


}