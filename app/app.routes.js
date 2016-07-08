"use strict";
var router_1 = require('@angular/router');
var landing_component_1 = require('./landing/landing.component');
var routes = [
    {
        path: '',
        component: landing_component_1.LandingComponent
    } /*,
    {
    path: '',
    redirectTo: '',
    patchMatch: 'full'
  }*/
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map