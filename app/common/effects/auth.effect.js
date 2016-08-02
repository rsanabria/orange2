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
var effects_1 = require('@ngrx/effects');
var AuthEffects = (function () {
    function AuthEffects(updates$) {
        var _this = this;
        this.updates$ = updates$;
        this.usuarios = [
            { usuario: 'test',
                password: 'test@',
                ruta: '/'
            }
        ];
        this.login$ = this.updates$
            .whenAction('LOG_IN')
            .map(function (info) {
            var u = _this.findUser(info.action.payload.usuario);
            if (u) {
                if (u.password === info.action.payload.password)
                    return ({ type: 'LOG_IN_SUCCESS', payload: { usuario: u.usuario, isLogged: true, ruta: u.ruta } });
            }
            return ({ type: 'LOG_IN_FAILED', payload: { usuario: '', isLogged: false } });
        });
    }
    AuthEffects.prototype.findUser = function (u) {
        return this.usuarios.find(function (usuario) {
            return usuario.usuario === u;
        });
    };
    __decorate([
        effects_1.Effect(), 
        __metadata('design:type', Object)
    ], AuthEffects.prototype, "login$", void 0);
    AuthEffects = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [effects_1.StateUpdates])
    ], AuthEffects);
    return AuthEffects;
}());
exports.AuthEffects = AuthEffects;

//# sourceMappingURL=auth.effect.js.map
