import { Injectable } from '@angular/core'

import { User } from './../Modules/user';
import { USERS } from './../Mocks/mock-users';

@Injectable ()
export class UserService{
    getUsers(): User[]{
        return (USERS);
    }

    getUser(userName: string): User {
     return this.getUsers().find(user => user.userName === userName);
    }
}