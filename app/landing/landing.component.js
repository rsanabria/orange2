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
var core_1 = require("@angular/core");
var angular2_materialize_1 = require('angular2-materialize');
var toast_service_1 = require('../common/toast.service');
var LandingComponent = (function () {
    function LandingComponent(toast) {
        this.toast = toast;
        this.mensaje = "";
    }
    LandingComponent.prototype.exito = function () {
        this.toast.success('Este es un mensaje éxitoso!');
    };
    LandingComponent.prototype.error = function () {
        this.toast.error('Este es un mensaje de error');
    };
    LandingComponent.prototype.alerta = function () {
        this.toast.alert('Este es un mensaje de alerta');
    };
    LandingComponent.prototype.info = function () {
        this.toast.info('Este es un mensaje informativo');
    };
    LandingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'landing',
            templateUrl: './landing.html',
            directives: [angular2_materialize_1.MaterializeDirective]
        }), 
        __metadata('design:paramtypes', [toast_service_1.ToastService])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;

//# sourceMappingURL=landing.component.js.map
