import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../Modules/user';

@Component({
  selector: 'login',
  templateUrl: './../Views/login.component.html'
//   styleUrls: ['./CSS/login.component.css'],
})
export class LoginComponent implements OnInit { 
  ngOnInit(): void{
    alert('Danielle');
  }
}