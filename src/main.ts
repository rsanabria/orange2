import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.routes';
/*Dev*/
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';


bootstrap(AppComponent,[
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    instrumentStore({
        monitor: useLogMonitor({
            visible: true,
            position: 'right'
        })
    })    
    ]);