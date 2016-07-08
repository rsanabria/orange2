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
var angular2_materialize_1 = require('angular2-materialize');
var OrangeNavBar = (function () {
    function OrangeNavBar() {
    }
    OrangeNavBar.prototype.ngOnInit = function () {
        console.log("prueba2");
    };
    OrangeNavBar = __decorate([
        core_1.Component({
            selector: 'my-nav',
            directives: [angular2_materialize_1.MaterializeDirective, router_1.ROUTER_DIRECTIVES],
            template: "<nav >\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['/']\" class=\"brand-logo\">Ora<strong>ng</strong>e <strong>2.0</strong></a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n\n      </ul>\n    </div>\n                </nav>"
        }), 
        __metadata('design:paramtypes', [])
    ], OrangeNavBar);
    return OrangeNavBar;
}());
exports.OrangeNavBar = OrangeNavBar;
//# sourceMappingURL=navbar.component.js.map