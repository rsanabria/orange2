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
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var ToastrService = (function () {
    function ToastrService(toastr) {
        this.toastr = toastr;
    }
    ToastrService.prototype.showSuccess = function (msj) {
        this.toastr.success(msj);
    };
    ToastrService.prototype.showError = function (msj) {
        this.toastr.error(msj);
    };
    ToastrService.prototype.showWarning = function (msj) {
        this.toastr.warning(msj);
    };
    ToastrService.prototype.showInfo = function (msj) {
        this.toastr.info(msj);
    };
    ToastrService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ng2_toastr_1.ToastsManager])
    ], ToastrService);
    return ToastrService;
}());
exports.ToastrService = ToastrService;
//# sourceMappingURL=toastr.service.js.map