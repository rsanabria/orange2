"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var store_1 = require('@ngrx/store');
var effects_1 = require('@ngrx/effects');
var auth_reducer_1 = require('./common/reducers/auth.reducer');
var router_reducer_1 = require('./common/reducers/router.reducer');
var counter_reducer_1 = require('./common/reducers/counter.reducer');
var auth_effect_1 = require('./common/effects/auth.effect');
/*Dev*/
var store_devtools_1 = require('@ngrx/store-devtools');
var store_log_monitor_1 = require('@ngrx/store-log-monitor');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    store_1.provideStore({ auth: auth_reducer_1.authReducer, counter: counter_reducer_1.counterReducer, router: router_reducer_1.routerReducer }),
    effects_1.runEffects(auth_effect_1.AuthEffects),
    store_devtools_1.instrumentStore({
        monitor: store_log_monitor_1.useLogMonitor({
            visible: false,
            position: 'right'
        })
    })
]);

//# sourceMappingURL=main.js.map
