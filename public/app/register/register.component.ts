import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
    selector: 'register',
    templateUrl: '/app/register/register.component.html'
})
export class Register {

    constructor(private userService: UserService) {

    }

    user = { name: "", password: ""};

    onRegisterClicked() {

        this.userService.register(this.user).subscribe(
            x => console.log(x),
            err => console.log(err)

        );
    }
}