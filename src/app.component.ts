import { Component, OnInit } from '@angular/core';
import { OrangeNavBar } from './navbar.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ToastService } from './common/toast.service';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
@Component({
    selector : 'orange',
    template : '<ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor><my-nav></my-nav><router-outlet></router-outlet>',
    directives : [OrangeNavBar, ROUTER_DIRECTIVES],
    providers: [ToastService, StoreLogMonitorComponent]
})

export class AppComponent implements OnInit {
 constructor() {

 }

 ngOnInit () {
 }

}
