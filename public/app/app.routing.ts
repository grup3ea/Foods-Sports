import { Routes, RouterModule} from '@angular/router';

import { Login } from './login/login.component';
import { Register } from './register/register.component';
import { Dashboard } from './dashboard/dashboard.component';
import { ModuleWithProviders } from "@angular/core";

import { UserComponent } from './user/user.component'

const appRoutes: Routes = [

    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: Dashboard
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

