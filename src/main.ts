import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.routes';
/*NGRX*/
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { Store, provideStore } from '@ngrx/store';
import { runEffects } from '@ngrx/effects';


import { authReducer } from './common/reducers/auth.reducer';
import { routerReducer } from './common/reducers/router.reducer';
import { counterReducer} from './common/reducers/counter.reducer';

import { AuthEffects } from './common/effects/auth.effect';


import { LoggedInGuard } from './common/login.guard';
import { AuthService } from './common/auth.service';
import { ToastService } from './common/toast.service';
/*Dev*/
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';


bootstrap(AppComponent,[
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provideStore({ auth: authReducer, counter: counterReducer, router: routerReducer }),
     runEffects(AuthEffects),
    instrumentStore({
        monitor: useLogMonitor({
            visible: false,
            position: 'right'
        })
    })    
    ]);