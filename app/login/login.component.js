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
var auth_service_1 = require('../common/auth.service');
var route_service_1 = require('../common/route.service');
var LogInComponent = (function () {
    function LogInComponent(auth, route) {
        this.auth = auth;
        this.route = route;
        this.usuario = {};
        route.actualizarRuta('login');
    }
    LogInComponent.prototype.ngOnInit = function () { };
    LogInComponent.prototype.logIn = function () {
        this.auth.login(this.usuario);
        if (this.auth.isLogged)
            this.usuario = {};
    };
    LogInComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'logIn',
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, route_service_1.RouteService])
    ], LogInComponent);
    return LogInComponent;
}());
exports.LogInComponent = LogInComponent;

//# sourceMappingURL=login.component.js.map
