import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular App</h1>' +
    '<router-outlet></router-outlet>'
})
export class AppComponent {

    title = "Food Sports";
    login = {name: "", password: ""};

    onLoginClicked() {

        alert("name : " + this.login.name + " - password : " + this.login.password);
    }
}
