import { Component } from '@angular/core';

import { LoginComponent } from './Components/login.component';


@Component({
  selector: 'my-app',
  templateUrl: './Views/app.component.html',
})
export class AppComponent  { 
      constructor(private loginComp: LoginComponent){}
}
