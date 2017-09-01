import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../Modules/user';
import { UserService } from './../Services/user.service'

@Component({
  selector: 'login',
  templateUrl: './../Views/login.component.html'
//   styleUrls: ['./CSS/login.component.css'],
})
export class LoginComponent { 
   @Input() user : User;
   showLoginError : boolean;
  
  constructor(private userService: UserService){
      this.showLoginError = false;
  }

  login(user: User): boolean{
    if (this.userService.getUser(user.userName).password == this.user.password){
      return true;
    }
    else{
      this.showLoginError = true;
      return false;
    }
  }
}