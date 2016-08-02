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
var router_1 = require('@angular/router');
var store_1 = require('@ngrx/store');
var AuthService = (function () {
    function AuthService(router, store) {
        var _this = this;
        this.router = router;
        this.store = store;
        this.isLogged = false;
        this.authStore = store.select('auth');
        store.subscribe(function (info) {
            if (info.auth.isLogged && info.router == 'login' /*Esta es ela ruta de donde viene el formulario*/) {
                _this.isLogged = true;
                _this.router.navigateByUrl(info.auth.ruta);
            }
            else if (!info.auth.isLogged) {
            }
        });
    }
    AuthService.prototype.login = function (usuario) {
        this.store.dispatch({ type: 'LOG_IN', payload: usuario });
    };
    AuthService.prototype.logout = function () {
        this.store.dispatch({ type: 'LOG_OUT', payload: {} });
        this.isLogged$.next(false);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, store_1.Store])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=auth.service.js.map
