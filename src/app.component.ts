import { Component } from '@angular/core';
import { OrangeNavBar } from './navbar.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    selector : 'orange',
    directives : [OrangeNavBar, ROUTER_DIRECTIVES],
    template : '<my-nav></my-nav><router-outlet></router-outlet>'
})

export class AppComponent {

}