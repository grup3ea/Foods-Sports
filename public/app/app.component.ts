import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    title = "Food Sports";
    login = {name: "", password: ""};

    onLoginClicked() {

        alert("name : " + this.login.name + " - password : " + this.login.password);
    }
}


