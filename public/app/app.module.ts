import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';
import { CoolStorageModule } from "angular2-cool-storage";
import { CommonModule }      from '@angular/common';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';
import { Dashboard }      from './dashboard/dashboard.component';
import { Login }          from './login/login.component';
import { Register }       from './register/register.component';
import { AuthGuard }      from './guards/auth.guard';
import { UserService }    from './user/user.service';
import { UserComponent}   from './user/user.component'
import { RouterModule }   from '@angular/router';

import { HttpModule } from '@angular/http';



@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        CoolStorageModule
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
    ],
    exports:[
        CommonModule,
        FormsModule,
        RouterModule]
})
export class AppModule { }

