import { Component, OnInit } from '@angular/core';

import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})

export class Dashboard implements OnInit {

    users: User[] = [];

    constructor(
        private router: Router,
        private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getUsers()
            .then(users => this.users = users.slice(1, 5));
    }

}