import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/auth.service';
import { RouteService } from '../common/services/route.service';

class usuario {
    public usuario : string;
    public password: string;
}
@Component({
    moduleId: module.id,
    selector: 'logIn',
    templateUrl: 'login.component.html'
})
export class LogInComponent implements OnInit {
    public usuario = new usuario();
    public error = false;
    constructor(private auth: AuthService, private route : RouteService) {
        route.actualizarRuta('login');
     }

    ngOnInit() { }

    public logIn() {
        console.log(this.usuario);
        this.auth.login(this.usuario);
        if (this.auth.isLogged) {
            this.usuario = new usuario();
            this.error = false;
        }
        else {
            this.error = true;
        }
    }


}