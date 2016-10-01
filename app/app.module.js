"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var store_1 = require('@ngrx/store');
var effects_1 = require('@ngrx/effects');
var store_devtools_1 = require('@ngrx/store-devtools');
var store_log_monitor_1 = require('@ngrx/store-log-monitor');
var auth_effect_1 = require('./common/stores/effects/auth.effect');
var app_routes_1 = require('./app.routes');
var auth_service_1 = require('./common/services/auth.service');
var route_service_1 = require('./common/services/route.service');
var navbar_component_1 = require('./common/layout/navbar.component');
var app_component_1 = require('./app.component');
var toast_service_1 = require('./common/toast.service');
var landing_component_1 = require('./landing/landing.component');
var login_component_1 = require('./login/login.component');
var auth_reducer_1 = require('./common/stores/reducers/auth.reducer');
var router_reducer_1 = require('./common/stores/reducers/router.reducer');
var counter_reducer_1 = require('./common/stores/reducers/counter.reducer');
var angular2_materialize_1 = require('angular2-materialize');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, navbar_component_1.NavBarComponent, landing_component_1.LandingComponent, login_component_1.LogInComponent, angular2_materialize_1.MaterializeDirective],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routes_1.routing,
                store_1.StoreModule.provideStore({ router: router_reducer_1.routerReducer, auth: auth_reducer_1.authReducer, counter: counter_reducer_1.counterReducer }, { router: '', counter: 0 }),
                effects_1.EffectsModule.runAfterBootstrap(auth_effect_1.AuthEffects),
                store_devtools_1.StoreDevtoolsModule.instrumentStore({
                    monitor: store_log_monitor_1.useLogMonitor({
                        visible: true,
                        position: 'right'
                    })
                }),
                store_log_monitor_1.StoreLogMonitorModule
            ],
            providers: [auth_service_1.AuthService, route_service_1.RouteService, toast_service_1.ToastService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map