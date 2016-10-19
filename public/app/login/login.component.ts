import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
    selector: 'login',
    templateUrl: '/app/login/login.component.html'
})
export class Login {

    constructor(private userService: UserService) {

    }

    user = { name: "", password: ""};
    alertMessage = '';

    onLoginClicked() {

        this.userService.login(this.user).subscribe(
            x => console.log(x),
            err => {

                console.log(err);
                this.alertMessage = err.json().reason;
            }
        );
    }
}