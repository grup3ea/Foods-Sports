"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var register_component_1 = require('./register/register.component');
var home_component_1 = require('./home/home.component');
var appRoutes = [
    {
        path: 'login',
        component: login_component_1.Login
    },
    {
        path: 'register',
        component: register_component_1.Register
    },
    {
        path: '',
        component: home_component_1.Home
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map