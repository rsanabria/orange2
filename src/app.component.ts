import { Component, OnInit } from '@angular/core';
import { OrangeNavBar } from './navbar.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ToastService } from './common/toast.service';

@Component({
    selector : 'orange',
    template : '<my-nav></my-nav><router-outlet></router-outlet>',
    directives : [OrangeNavBar, ROUTER_DIRECTIVES],
    providers: [ToastService]
})

export class AppComponent implements OnInit {
 constructor() {

 }

 ngOnInit () {
 }

}
