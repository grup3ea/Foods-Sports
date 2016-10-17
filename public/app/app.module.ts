import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';
import { Home }           from './home/home.component';
import { Login }          from './login/login.component';
import { Register }       from './register/register.component';
import { UserService }    from './user/user.service';

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
        Login,
        Register,
        Home
    ],

    bootstrap:    [
        AppComponent
    ],

    providers:    [
        UserService
    ]
})
export class AppModule { }

