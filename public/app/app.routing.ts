import { Routes, RouterModule} from '@angular/router';

import { Login } from './login/login.component';
import { Register } from './register/register.component';
import { Home } from './home/home.component';

const appRoutes: Routes = [

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
        component: Home
    },

];

export const routing= RouterModule.forRoot(appRoutes);