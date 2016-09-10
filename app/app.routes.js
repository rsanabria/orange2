"use strict";
var router_1 = require('@angular/router');
var landing_component_1 = require('./landing/landing.component');
var login_component_1 = require('./login/login.component');
var routes = [
    { path: '', component: landing_component_1.LandingComponent },
    { path: 'login', component: login_component_1.LogInComponent },
    {
        path: '*',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map