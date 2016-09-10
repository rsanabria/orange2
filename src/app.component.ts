import { Component, OnInit } from '@angular/core';
import { ToastService } from './common/toast.service';
import { AuthService } from './common/services/auth.service';
import { RouteService } from './common/services/route.service';
import { LogInComponent } from './login/login.component';
//import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';



@Component({
    selector : 'orange',
    template : '<my-nav></my-nav><router-outlet></router-outlet> ',
    providers: [ToastService, AuthService, RouteService]
})

export class AppComponent {
 constructor() {

 }


}

/*<ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor>*/