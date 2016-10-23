import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/users">Users</a>
   </nav>
   <router-outlet></router-outlet>
 `,
})
export class AppComponent {

    title = "Food Sports";
    login = {name: "", password: ""};

    onLoginClicked() {

        alert("name : " + this.login.name + " - password : " + this.login.password);
    }
}
