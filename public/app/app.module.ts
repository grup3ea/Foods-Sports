import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';
import { Dashboard }      from './dashboard/dashboard.component';
import { Login }          from './login/login.component';
import { Register }       from './register/register.component';
import { UserService }    from './user/user.service';
import { UserComponent}  from './user/user.component'

import { HttpModule } from '@angular/http';



@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],

    declarations: [
        AppComponent,
        Dashboard,
        UserComponent,
        Login,
        Register
    ],

    bootstrap:    [
        AppComponent
    ],

    providers:    [
        UserService
    ]
})
export class AppModule { }

