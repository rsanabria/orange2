"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
/*Dev*/
var store_devtools_1 = require('@ngrx/store-devtools');
var store_log_monitor_1 = require('@ngrx/store-log-monitor');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    store_devtools_1.instrumentStore({
        monitor: store_log_monitor_1.useLogMonitor({
            visible: true,
            position: 'right'
        })
    })
]);

//# sourceMappingURL=main.js.map
