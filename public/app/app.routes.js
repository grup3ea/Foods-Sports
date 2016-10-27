"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var register_component_1 = require('./register/register.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var user_component_1 = require('./shared/services/user/user.component');
var appRoutes = [
    {
        path: 'users',
        component: user_component_1.UserComponent
    },
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
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.Dashboard
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map