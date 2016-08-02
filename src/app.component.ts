import { Component, OnInit } from '@angular/core';
import { OrangeNavBar } from './navbar.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ToastService } from './common/toast.service';
import { AuthService } from './common/auth.service';
import { RouteService } from './common/route.service';
import { LogInComponent } from './login/login.component';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';



@Component({
    selector : 'orange',
    template : '<my-nav></my-nav><router-outlet></router-outlet> <ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor>',
    directives : [OrangeNavBar, ROUTER_DIRECTIVES, StoreLogMonitorComponent],
    providers: [ToastService, AuthService, RouteService],
    precompile : [LogInComponent]
})

export class AppComponent {
 constructor() {

 }


}
